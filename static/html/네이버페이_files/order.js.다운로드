nmp.createModule("nmp.front.order",{
	initialize : function(){
	},
	_checkConfirm : function(htResult, aConfirmTypes) {
		var waConfirmItems = $A(htResult.htReturnValue.invalidItemList).filter(function(item) {
			console.log("item.type is " , item.type);
			if ( "Confirmed" == item.type ) {
				return true;
			} else if (item.type.substr(0, 9) == "Confirmed") {
				return true;
			}
			return false;
		});
		
		waConfirmItems.map(function(confirmItem) {
			// Confirm Function
			confirmItem.fConfirm = function() {
				return confirm(confirmItem.message);
			};
			
			return confirmItem;
		});
		
		return waConfirmItems.$value();
	},
	_onFailValidation : function(htResult, oRetryArguments) {
		// Validation 오류 
		var aConfirmItems = this._checkConfirm(htResult);
		console.log("aConfirmItems is " , aConfirmItems);
		
		var bValidationErrorOccurred = ( aConfirmItems.length == 0 && htResult.htReturnValue.invalidItemList );
		
		console.log("bValidationErrorOccurred is ", bValidationErrorOccurred);
		
		if ( bValidationErrorOccurred ) {
			alert(htResult.htReturnValue.invalidItemList[0].message);
			return;
		} else {
			$A(aConfirmItems).forEach(function(confirmItem) {
				if ( confirmItem.fConfirm() ) {
					var htParameter = oRetryArguments.htParameter;
					htParameter[confirmItem.name] = true;
					
					console.log("oRetryArguments is ", oRetryArguments);
					
					this.requestAjax(oRetryArguments.sUrl, oRetryArguments.sRequestMethod, htParameter, oRetryArguments.fSuccessCallback, oRetryArguments.fConfirmCancelCallback);
				} else {
					oRetryArguments.fConfirmCancelCallback(oRetryArguments.htParameter, htResult);
				}
				$A.Break();
			}, this);
		}
	},
	_onLoad : function(htParameter, fSuccessCallback, fFailCallback, oRetryArguments, htResult, oResponse) {
		if (htResult && htResult.bSuccess) {
        	fSuccessCallback(htParameter, htResult, oResponse);
        } else {
        	fFailCallback(htResult, oRetryArguments);
        }
	},
	_defaultFailCallback : function(htResult, oRetryArguments) {
		//1. htResult.sErrorMessage 가 있는 경우
		if (nmp.utility.isNotEmpty(htResult.sErrorMessage)) {
			// htResult.sErrorMessage가 있으면 nmp.requestAjax에서 미리 alert를 띄워줌
			return;
		}
		// 2. form validation 에러
		if (htResult.sErrorCode == "INVALID_FORM_DATA" ) {
    		this._onFailValidation(htResult, oRetryArguments);
    		return;
    	}
		// 3. 그외 서버에서 내려온 에러메시지
		if (htResult.htReturnValue && nmp.utility.isNotEmpty(htResult.htReturnValue.sMessage)){
			alert(htResult.htReturnValue.sMessage);
			return;
		}
		
		if(htResult && !htResult.bSuccess && htResult.sErrorCode == "ACCESS_DENIED") {
			htResult.htReturnValue.script?eval(htResult.htReturnValue.script):location=htResult.htReturnValue.url;
			return
		}
		// 4. 없는 경우는 "알 수 없는 오류 발생"
    	// TODO 기본 오류 메시지 확인
		alert("알 수 없는 오류 발생");
	},
	_defaultSuccessCallback : function(htParameter, htResult, oResponse) {
		// 1. 성공 메시지가 있는 경우
		if (htResult.htReturnValue && nmp.utility.isNotEmpty(htResult.htReturnValue.sMessage)){
			alert(htResult.htReturnValue.sMessage);
			return;
		}
		
		// TODO message를 sMessage로 변환해야함. 모두 변환되면 아래 코드 삭제
		if(htResult.htReturnValue && htResult.htReturnValue["message"]){
			alert(htResult.htReturnValue["message"]);
		}else{
			alert("성공");
		}
	},
	getPagedGridResponseHandler : function(oPagedGrid, fSuccessCallback, aConfirmTypes) {
		var sUrl = oPagedGrid.option("sApiUrl");
		var sRequestMethod = oPagedGrid.option("sRequestMethod");
		var htParameter = oPagedGrid.getParam();
		var fFailCallback = $Fn(this._defaultFailCallback, this).bind();
		
		var oRetryArguments = {
			"sUrl" :  sUrl,
			"sRequestMethod" : sRequestMethod,
			"htParameter" : htParameter,
			"fSuccessCallback" : fSuccessCallback,
			"aConfirmTypes" : aConfirmTypes
		};
		
		$Fn(this._onLoad, this).bind(htParameter, fSuccessCallback, fFailCallback, oRetryArguments, aConfirmTypes);
	},
	
	 /**
     * 폼 전송 방법값을 폼에 적용한다.
     */
    _applyRequestMethod : function(htParameter, sRequestMethod){
    	if(htParameter) { 
	        if(sRequestMethod == "put" || sRequestMethod == "delete"){
	        	htParameter["_method"] = sRequestMethod;
	        } else {
	        	delete htParameter["_method"];
	        }
    	}
    },
	_defaultConfirmCancelCallback : function(htParameter, htResult) {},
	/**
	 * 
	 * @param sUrl 요청 URL
	 * @param sMethod 요청 Method
	 * @param htParameter 요청 파라미터
	 * @param fSuccessCallback 성공 Callback
	 */
	requestAjax : function(sUrl, sRequestMethod, htParameter, fSuccessCallback, fConfirmCancelCallback, fFailCallback) {
		if (!fSuccessCallback || typeof fSuccessCallback != "function") {
			fSuccessCallback = $Fn(this._defaultSuccessCallback, this).bind();
		}
		if (!fFailCallback || typeof fFailCallback != "function") {
			fFailCallback = $Fn(this._defaultFailCallback, this).bind();
		}
		if (!fConfirmCancelCallback || typeof fConfirmCancelCallback != "function") {
			fConfirmCancelCallback = this._defaultConfirmCancelCallback;
		}
		var oRetryArguments = {
			"sUrl" :  sUrl,
			"sRequestMethod" : sRequestMethod,
			"htParameter" : htParameter,
			"fSuccessCallback" : fSuccessCallback,
			"fConfirmCancelCallback" : fConfirmCancelCallback
		};
		
		this._applyRequestMethod(htParameter, sRequestMethod);
        nmp.requestAjax(sUrl, htParameter, {
        	method : sRequestMethod,
            onload : $Fn(this._onLoad, this).bind(htParameter, fSuccessCallback, fFailCallback, oRetryArguments)
        });
        
	},
	requestAjaxByFormHelper : function(oFormHelper, fSuccessCallback, fConfirmCancelCallback) {
		this.requestAjax(oFormHelper.getActionUrl(), oFormHelper.getRequestMethod(), oFormHelper.getFormData(), fSuccessCallback, fConfirmCancelCallback);
	},
	cloningObject : function(oSourceTarget){
		var sConstructor;
		var oDestinationTarget;

		if((typeof oSourceTarget == "object") && (sConstructor = this._getConstructorName(oSourceTarget))){
			oDestinationTarget = eval("new " + sConstructor + "()");

			if(oSourceTarget.prototype){
				for(var x in oSourceTarget.prototype){
					oDestinationTarget.prototype[x] = this.cloningObject(oSourceTarget.prototype[x]);
				}
			}

			for(var y in oSourceTarget){
				if(oSourceTarget[y] instanceof RegExp){
					oDestinationTarget[y] = eval(oSourceTarget[y].toString());
				}else{
					oDestinationTarget[y] = this.cloningObject(oSourceTarget[y]);
				}
			}
			return oDestinationTarget;
		}

		oDestinationTarget = oSourceTarget;
		return oDestinationTarget;
	},
	_getConstructorName : function(oTarget){
		if(oTarget && oTarget.constructor){
			var sCode = oTarget.constructor.toString();
			var aMatch = sCode.match(/function ([^\(]*)/);
			return (aMatch && aMatch[1]) || null;
		}
		return null;
	},
	getCreditCardCode : function(sCreditCardCode, bEasyPay) {
		if (sCreditCardCode == undefined || sCreditCardCode == "") {
			return sCreditCardCode;
		}

		if (bEasyPay != undefined && bEasyPay) {
			return sCreditCardCode;
		}

		switch (sCreditCardCode) {
			case "CP":
				// 카카오뱅크 -> 국민카드
				return "C3";
			case "CQ":
				// 케이뱅크 -> BC카드
				return "C1";
			default:
				return sCreditCardCode;
		}
	},
	"":""
}, true);