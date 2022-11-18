/*
 * @(#)nmp.js $version 2011. 11. 22.
 *
 * Copyright 2011 NHN Corp. All rights Reserved.
 * NHN PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**#nocode+*/
// document.domain 설정
if (/^(.*)nhncorp.com/.test(location.host)) {
	document.domain = "nhncorp.com";
} else if (/^(.*)naver.net/.test(location.host)) {
	document.domain = "naver.net";
} else {
	document.domain = "naver.com";
}

// IE6 flicker bug fix
if (jindo.$Agent().navigator().ie && jindo.$Agent().navigator().version == 6) {
	try {
		document.execCommand('BackgroundImageCache', false, true);
	} catch (e) {
	}
}

if (typeof console == "undefined") {
	console = {
		log:function () {},
		debug:function () {}
	};
}

// jindo.$Json() 함수 사용시, JSON 문자열이 잘못된 경우에 대한 피드백을 받을 수 없어,
// 임시로 오버라이딩 하여 에러를 throw 하도록 함
/** @ignore */
jindo.$Json._oldMakeJSON = function (sObject) {
	try {
		if (/^(?:\s*)[\{\[]/.test(sObject)) {
			sObject = eval("(" + sObject + ")");
		}
	} catch (e) {
		throw("JSON parsing error");
	}
	return sObject;
};
/**#nocode-*/

/**
 * @namespace nmp 기본 네임 스페이스 및 기본 메소드
 */
var nmp = {
	name:"nmp",
	/**
	 * Ajax 요청 정보 저장 객체
	 * @type {HashTable}
	 */
	_htAjaxRequestData:{},
	/**
	 * 인스턴스 저장 객체
	 * @type {HashTable}
	 */
	_htInstance:{},
	_htEventData:{},
	_htElement:{},
	_htPopup:{}, // 팝업창 인스턴스 저장 변수
	_htClosePopup:{},
	_oTplForm:jindo.$Template([
		'<form method="{=sMethod}" action="{=sPageUrl}" target="{=sName}" style="display:none">',
		'{for value in values}',
		'{set sKeyEscapeHtml=jindo.$S(=value.sKey).escapeHTML().$value()}',
		'{set sValueEscapeHtml=jindo.$S(=value.vValue).escapeHTML().$value()}',
		'<input type="hidden" name="{=sKeyEscapeHtml}" value="{=sValueEscapeHtml}" />',
		'{/for}',
		'</form>'
	].join('')),
	_oTplIframe:jindo.$Template('<iframe src="about:blank" name="{=sName}" style="display:none"></iframe>'),
	_aInitializeModuleList:[],
	_sContext:"",
    _bInitialized : false,

	initialize:function () {
		this._setFunctionName();
		this._initializeScriptErrorLogger();
		this._attachEvent();
		this._executeModule();
        this._bInitialized = true;
	},

	_setFunctionName:function () {
		var aModuleList = [nmp, nmp.utility, nmp.event_delegator];

		for(var i=0; i<aModuleList.length; i++){
			for(var x in aModuleList[i]){
				if(typeof(aModuleList[i][x]) == "function"){
					aModuleList[i][x]["__name"] = aModuleList[i]["name"] + "." + x;
				}
			}
		}
	},

	_executeModule : function(aExecuteModuleList){
		var aInitializeModuleList = aExecuteModuleList || this._aInitializeModuleList;
		for (var i = 0, nLen = aInitializeModuleList.length; i < nLen; i++) {
			var htModule = aInitializeModuleList[i];
			if (htModule.oContext.initialize && typeof(htModule.oContext.initialize) == "function") {
				try {
					htModule.oContext.initialize(htModule.htOption);
				} catch (e) {
					if (this.getVariable("bUseJeagleEye")) {
						if (window.JEagleEyeClient) {
							JEagleEyeClient[this.getVariable("sDeployEnvironment") != "real" ? "raiseError" : "ignoreError"](e, this, {
								"params":"initialize failed on " + (htModule.oContext.name || "unknown module")
							});
						} else {
							this._onError("initialize failed on " + (htModule.oContext.name || "unknown module"));
							if (this.getVariable("sDeployEnvironment") != "real") {
								throw(e);
							}
						}
					}
				}
			}
		}
	},

	_initializeScriptErrorLogger:function () {
		if (this.getVariable("bUseJeagleEye")) {
			if (window.JEagleEyeClient) {
				JEagleEyeClient.setEnable(true);
				JEagleEyeClient.attachOnError();
			} else {
				window.onerror = this._onError;
			}
		}
	},

	_onError:function (vMessage, sUrl, nLineNumber) {
		if (typeof vMessage == "object" && typeof vMessage.description == "string") {
			vMessage = vMessage + " : " + vMessage.description;
		}
		sUrl = sUrl || document.location;
		nLineNumber = nLineNumber || 0;

		var elImage = new Image();
		elImage.src = "http://cecs.naver.com/?m=" + encodeURIComponent(vMessage) + "&u=" + encodeURIComponent(sUrl) + "&l=" + nLineNumber;
	},

	/**
	 * 웹페이지 초기화 시에 사용할 서비스 모듈을 등록한다.
	 * - 서비스 모듈은 initialize와 destroy 모듈을 기본적으로 구현해야 한다.
	 * - 등록된 순서에 따라 서비스 모듈의 initialize 함수를 document의 ready 상태일 때 실행한다.
	 *
	 * @param {Object} oModuleContext 서비스 모듈 객체
	 * @param {HashTable} htInitializeOption 서비스 모듈의 initialize 함수에 전달할 파라미터
	 * @example
	 * // nmp.top 모듈을 등록
	 * nmp.registerModule(nmp.top);
	 *
	 * // nmp.display 모듈을 초기화 옵션과 함께 등록
	 * nmp.registerModule(nmp.display.sub_page_1, {
	 *	 "nList" : 10,
	 *	 "sType" : "service"
	 * });
	 *
	 */
	registerModule:function (oModuleContext, htInitializeOption) {
		if(oModuleContext){
            var htModule = {
                "oContext" : oModuleContext,
                "htOption" : htInitializeOption || {}
            };

            this._aInitializeModuleList.push(htModule);

            if(this._bInitialized){
                this._executeModule([htModule]);
            }
		}else{
			this.error(this.getMessage("MSG0030"));
		}
	},

	_attachEvent:function () {
		this._htEventData["unload"] = jindo.$Fn(this._destroy, this).attach(window, "unload");
		nmp.event_delegator.attach(document.body, "click", this, true);
	},


	/***************************************************************************************************************************
	 * Ajax 관련 함수
	 **************************************************************************************************************************/

	/**
	 * 랜덤한 값을 가져온다.
	 *
	 * @return {String} 랜덤값
	 */
	_getRandomId:function () {
		return String(parseInt(Math.random() * 10000000000, 10));
	},

	/**
	 * 공통 Ajax 처리 함수
	 *
	 * @param {String} sAPI 정의된 APICode 값 (__ghtVariables.htAPI에 저장된 값)
	 * @param {HashTable} htParameter Ajax 요청 시 함께 전달할 파라미터 객체
	 * @param {HashTable} htOption Ajax 요청 옵션 객체
	 * - $Ajax() 옵션 그대로 사용가능
	 * - 추가적인 옵션
	 *  bNotUseErrorAlert : Ajax 통신 중에, 에러가 발생하더라도, 얼럿을 띄우지 않도록 할 경우 true로 설정
	 *  sResultType : 응답 포맷
	 * @return {Object} $Ajax() 객체
	 * @example
	 * nmp.requestAjax("API0001", {
	 *	 "sAction" : "insertList",
	 *	 "nPage" : 3
	 * }, {
	 *	 onload : function(htResult){
	 *		if(htResult.bSuccess){
	 *			console.log("성공");
	 *			console.log("응답 데이터 : ", htResult.htReturnValue);
	 *		}else{
	 *			console.log("실패");
	 *		}
	 *	 }
	 * });
	 */
	requestAjax:function (sAPI, htParameter, htOption) {
		// Ajax 요청을 할 API 설정
		var sURL = /API[0-9]{4}/.test(sAPI) ? this.getAPI(sAPI) : sAPI;

		if (sURL) {
			// 랜덤 아이디 생성
			var sRandomId = this._getRandomId();

			// Ajax 요청용 파라미터 객체 설정
			htParameter = htParameter || {};
			htOption = htOption || {};

			// 중복된 요청일 경우 요청 중단
			for (var x in this._htAjaxRequestData) {
				if (sAPI == this._htAjaxRequestData[x].sAPI && jindo.$Json(this._htAjaxRequestData[x].htParameter).compare(htParameter)) {
					return false;
				}
			}

			// 디폴트 값 설정
			htOption.method = htOption.method || "post";

			// 요청 정보를 저장
			var htTempData = nmp.utility.cloningObject(htOption);
			htTempData.sAPI = sAPI;
			htTempData.htParameter = htParameter;
			this._htAjaxRequestData[sRandomId] = htTempData;

			// _method 파라미터 추가
			var sMethod = htOption.method.toLowerCase();
			if (sMethod == "put" || sMethod == "delete") {
				htParameter["_method"] = sMethod;
				htOption.method = "post";
			}

			// jsonp 방식으로 요청 시, X-Requested-With 파라미터에 JSONP 값을 함께 보냄
			if(htOption.type && htOption.type.toLowerCase() == "jsonp"){
				htParameter["X-Requested-With"] = "JSONP";
			}

			// Ajax 요청
			htOption.onload = jindo.$Fn(this._onReceiveData, this).bind(sRandomId);
			return jindo.$Ajax(sURL, htOption).header("X-Requested-With", "XMLHttpRequest").request(htParameter);
		} else {
			this.alertMessage("MSG0005"); // 요청할 API 주소가 올바르지 않습니다.
			return false;
		}
	},

	_showLayeredLogin : function (elLayeredLogin) {
		this.showLayer(elLayeredLogin, document.body, {
			"sPosition":"inside-center",
			"bShowDimmedLayer":true,
			// 로그인 Layer가 닫힐 때 처리
			"fHideCallback" : jindo.$Fn(function(){
				if(this._htLoginErrorParam && typeof this._htLoginErrorParam.onHideLayer == "function") {
					// onLoginSuccess 때문에 호출 순서 유지를 위해 delay 추가함
					jindo.$Fn(this._htLoginErrorParam.onHideLayer, this).delay(0);
				}
				this._htLoginErrorParam = null;
			}, this).bind(),
			"fLoadCallback":function (elTargetLayer) {
				if (!elTargetLayer) {
					throw new Error("nmp.showLayeredLogin : check class name");
				}
			},
			"fShowCallback": jindo.$Fn(function () {
				if(this._htLoginErrorParam && typeof this._htLoginErrorParam.onShowLayer == "function") {
					this._htLoginErrorParam.onShowLayer();
				}
				// 레이어 포지션 잡을수 있는 delay를 줌
				jindo.$Fn(function(){
					var protocol = document.location.protocol;
					if (protocol.indexOf("https") > -1) {
						jindo.$("isSecure").value = 1;
					} else {
						jindo.$("isSecure").value = 0;
					}

					if (jindo.$("username") != null && jindo.$("username").value.length > 0) {
						if (jindo.$("password") == null || jindo.$("password").value.length < 1) {
							jindo.$("password").focus();
						}
					} else {
						jindo.$("username").focus();
					}
				}, this).delay(0);
			}, this).bind()
		});
	},

	/**
	 * Ajax 요청 콜백 함수
	 * - Ajax 요청이 완료되었을 때 수행되며, HTTP 상태 코드와 서버에서의 응답 결과에 따라 공통된 처리를 수행한다.
	 * - Ajax 요청 시, 사용자가 등록한 콜백이 있으면 실행한다.
	 *
	 * @param {String} sRandomId Ajax 요청에 대한 고유 아이디
	 * @param {Object} oResponse Ajax 응답 객체
	 */
	_onReceiveData:function (sRandomId, oResponse) {
		var vResult, htResult,
			htServerError = {
				"bSuccess":false,
				"sErrorCode":"SERVER_ERROR",
				"sErrorMessage":this.getMessage("MSG0002") // 알 수 없는 오류가 발생하였습니다.
			},
			htRequestData = this._htAjaxRequestData[sRandomId];

		delete this._htAjaxRequestData[sRandomId];

		// TODO 코드 위치 변경하기
		try { // text 인 경우 예외 처리 위해 try/catch 추가
			vResult = oResponse.json();
			if (!vResult.bSuccess && vResult.sErrorCode == "LOGIN_ERROR") {
				this._htLoginErrorParam = htRequestData;
				this.hideLayer();
				var elLayeredLogin = jindo.$$.getSingle("._login");
				if (!elLayeredLogin) {
					this.requestAjax(vResult.sLayerUrl || "http://login.sell.shop.naver.com/layer/login", {}, {
						type:"jsonp",
						onload:jindo.$Fn(function (oRes) {
							var welLayer = jindo.$Element(oRes.htReturnValue.html);
							welLayer.appendTo(document.body);
							this._showLayeredLogin(welLayer.$value());
						}, this).bind()
					});
				} else {
					var username = jindo.$Cookie().get("SLID");
					if (username != null) {
						jindo.$("username").value = username;
						jindo.$("password").value = "";
						jindo.$("keep_slid").value = true;
						jindo.$("keep_slid").checked = true;
					} else {
						if (jindo.$("keep_slid").value) {
							jindo.$("password").value = "";
						} else {
							jindo.$("username").value = "";
							jindo.$("password").value = "";
						}
					}
					this._showLayeredLogin(elLayeredLogin);
				}

				return;
			}

			if (!vResult.bSuccess && vResult.sErrorCode == "HTTP_403") {
				this.hideLayer();

				this.showLayerAfterLoad("403", document.body, {
					sPosition:"inside-center",
					bShowDimmedLayer:true
				}, this);

				return;
			}
		} catch (me) {
		}

		vResult = oResponse[htRequestData.sResultType || "json"]();
		if (oResponse.status() == 200 && vResult) {
			if (htRequestData.sResultType == "text") {
				if (vResult) {
					htResult = {
						"bSuccess":true,
						"htReturnValue":{
							"text":vResult
						}
					};
				} else {
					htResult = htServerError;
				}
			} else {// 박정기 추가. else인 경우가 없어서 에러남
				htResult = vResult;
			}

			if (!htResult.bSuccess && !htRequestData.bNotUseErrorAlert && htResult.sErrorMessage) {
				alert(htResult.sErrorMessage);
			}
		} else {
			if (!htRequestData.bNotUseErrorAlert && vResult && vResult.sErrorMessage && vResult.bViewMessage) {
				this.alert("[" + oResponse.status() + "]" + vResult.sErrorMessage);
			} else if (!htRequestData.bNotUseErrorAlert) {
				this.alertMessage("MSG0002", [oResponse.status()]); // [StatusCode] 다시 시도하여 주시기 바랍니다.
			}
			htResult = htServerError;
		}

		if (htRequestData.onload && typeof htRequestData.onload == "function") {
			htRequestData.onload(htResult, oResponse);
		}
	},

	submitLayeredLogin:function () {
		jindo.$("layered_login_form").submit();
	},

	layeredLoginKeyDown:function (e, f) {
		if (navigator.appVersion.indexOf("MSIE 8") == -1) {
			return;
		}

		var t = e.target || e.srcElement;
		if (t) {
			if (e.keyCode == 13) {
				return f.submit();
			}
		}
	},

	layeredLoginCallback:function (vResult) {
		if (!vResult.bSuccess && vResult.sErrorCode == "LOGIN_ERROR") {
			alert(vResult.sErrorMessage);
			if(this._htLoginErrorParam && typeof this._htLoginErrorParam.onLoginError == "function") {
				// onLoginSuccess 때문에 호출 순서 유지를 위해 delay 추가함
				jindo.$Fn(this._htLoginErrorParam.onLoginError, this).delay(0);
			}
		} else {
			// 판매회원 상태팝업 필요여부 판단(쿠키)
			var _sCookieName = "OPEN_STATUS_POPUP",
				_openStatusPopup = jindo.$Cookie().get(_sCookieName);

			if (_openStatusPopup == null || _openStatusPopup == '') {

			} else {
				// 판매회원 상태팝업 open
				var popupUrl = LOGIN_DOMAIN + '/popup/noticeStatus/' + _openStatusPopup;
				window.open(popupUrl, "Notice", "width=475,height=400");
			}

            // 판매회원 카테고리(여행) 여부 판단(임시코드)
            this.openCategoryStatusNoticePopup();

			if (typeof gsLoginId != "undefined" && gsLoginId && gsLoginId != vResult.sLoginId) {
				// 로그인 사용자가 변경되면 페이지 리로드
				window.location.reload();
			}else if(this._htLoginErrorParam && typeof this._htLoginErrorParam.onLoginSuccess == "function") {
				// 기본적으로 delay 주지 않으면 메소드 호출이 정상적으로 되지 않음
				jindo.$Fn(this._htLoginErrorParam.onLoginSuccess, this).delay(0);
			}
			this.hideLayer();
		}
	},

    // 판매회원 카테고리(여행) 여부 판단(임시코드)
    openCategoryStatusNoticePopup : function() {
        var _sCookieName = "OPEN_CATEGORY_STATUS_POPUP";
        var _openCategoryStatusPopup = $Cookie().get(_sCookieName);

        if (_openCategoryStatusPopup == null || _openCategoryStatusPopup == '') {
            return;
        }

        // 판매회원 상태팝업 open
        var popupUrl = LOGIN_DOMAIN + '/popup/categoryStatus/' + _openCategoryStatusPopup;
        window.open(popupUrl, "Category", ["width=475", "height=400"]);
    },

	/***************************************************************************************************************************
	 * 환경 설정 데이터 관련 함수
	 **************************************************************************************************************************/

	/**
	 * sPath에 따라 환경 설정 데이터를 리턴한다.
	 * - sPath는 환경 설정 데이터 구조에 따라 .으로 구분지어 넣을 수 있다.
	 * - 사용자 데이터는 __ghtVariables.htData에 저장되지만, 실제 접근 시에는 htData를 생략하여 사용 가능하다.
	 *
	 * @param {String} [sPath] 값을 얻어오기 위한 데이터 경로 또는 변수명
	 * @return {Variant} sPath에 해당하는 환경 설정 데이터
	 * @example
	 * // 로그인한 사용자의 아이디를 얻을 때
	 * var vResult = nmp.getVariable("sUserId");
	 *
	 * // 잘못된 이름을 넣을 경우, null이 리턴됨
	 * // vResult2 is null
	 * var vResult2 = nmp.getVariable("WrongName");
	 *
	 * // API 데이터 전체
	 * var vResult3= nmp.getVariable("htAPI");
	 *
	 * // .을 이용하여 하위의 데이터를 찾아서 리턴
	 * var vResult4 = nmp.getVariable("htAPI.API0001");
	 * var vResult5 = nmp.getVariable("htMessage.MSG0002");
	 * var vResult6 = nmp.getVariable("htData.aList.0");
	 */
	getVariable:function (sPath) {
		if (!sPath) {
			this.alertMessage("MSG0004");
			return null;
		} else {
			return this._controlVariable(sPath);
		}
	},

	/**
	 * sPath에 해당하는 데이터를 vValue로 변경한다.
	 * - sPath에 대한 규칙은 getVariable()와 동일하다.
	 *
	 * @param {Variant} vPath 변경할 데이터의 경로
	 * @param {Variant} vValue 변경할 값
	 * @return {Boolean} 변경 처리 결과
	 * @example
	 * // 환경 설정 객체에, bCondition이라는 이름으로 true값을 저장
	 * nmp.setVariable("bCondition", true);
	 *
	 * // 환경 설정 객체에 저장된 sTmp라는 이름의 값을 ""로 초기화 함
	 * nmp.setVariable("sTmp", "");
	 *
	 * // .을 이용하여 하위의 이미지 경로 값을 변경 함
	 * nmp.setVariable("htData.sImageUrl", "http://www.naver.com/images");
	 *
	 * // HashTable 형태의 객체를 전달하여 한번에 설정할 수 있음
	 * nmp.setVariable({
	 *		 "userId" : "naver",
	 *		 "age" : 20
	 * });
	 */
	setVariable:function (vPath, vValue) {
		if (!vPath || (typeof(vPath) == "string" && typeof(vValue) == "undefined")) {
			this.alertMessage("MSG0004");
			return false;
		} else if (typeof(vPath) == "string") {
			return this._controlVariable(vPath, vValue);
		} else if (typeof(vPath) == "object") {
			for (var x in vPath) {
				this._controlVariable(x, vPath[x]);
			}
		}
	},

	/**
	 * getVariable, setVariable 실제 처리 함수
	 *
	 * @param {String} sPath 변경할 데이터의 경로
	 * @param {Variant} vValue 변경할 값
	 * @return {Variant} getVariable 처리 시에는 sPath에 해당하는 데이터, setVariable 처리 시에는 처리 결과
	 */
	_controlVariable:function (sPath, vValue) {
		if (!/\./.test(sPath)) {
			sPath = "htData." + sPath;
		}
		var aPathList = sPath.split(".");
		var htParent = __ghtVariables;

		for (var i = 0; i < aPathList.length; i++) {
			if (typeof(vValue) != "undefined") {
				if (i == aPathList.length - 1) {
					htParent[aPathList[i]] = vValue;
					return true;
				} else {
					if (htParent[aPathList[i]]) {
						htParent = htParent[aPathList[i]];
					} else {
						htParent = htParent[aPathList[i]] = {};
					}
				}
			} else {
				if (typeof(htParent[aPathList[i]]) != "undefined") {
					htParent = htParent[aPathList[i]];
				} else {
					return null;
				}
			}
		}
		return htParent;
	},

	/**
	 * sMessageCode 파라미터에 해당하는 메시지 문자열을 리턴한다.
	 *
	 * @param {String} sMessageCode 메시지 코드 (__ghtVariables.htMessage에 저장된 값)
	 * @return {String} 메시지 문자열 및 빈 문자열
	 * @param {Array} [aParameter] 메시지에 파라미터를 치환할 경우, 치환할 값의 배열
	 * @example
	 * // 메시지 코드를 파라미터로 전달
	 * var sResult = nmp.getMessage("MSG0001");
	 *
	 * // 메시지 코드의 문자열 중 일부를 치환하여 결과를 리턴
	 * var sResult = nmp.getMessage("MSG0001", ["first", "second"]);
	 */
	getMessage:function (sMessageCode, aParameter) {
		var sMessage = this.getVariable("htMessage." + sMessageCode) || "";
		return aParameter ? nmp.utility.replaceString(sMessage, aParameter) : sMessage;
	},

	/**
	 * sPageCode 파라미터에 해당하는 페이지 주소를 리턴한다.
	 *
	 * @param {String} sPageCode 페이지 코드 (__ghtVariables.htPage에 저장된 값)
	 * @param {Array} [aParameter] 페이지 주소에 파라미터를 치환할 경우, 치환할 값의 배열
	 * @return {String} 페이지 주소 및 빈 문자열
	 * @example
	 * // 페이지 코드를 파라미터로 전달
	 * var sPageUrl = nmp.getPageUrl("PAGE0001");
	 *
	 * // /music.nhn?action=test&param1=first&param2=2&param3=getList와 같은 페이지를 호출할 경우
	 * // 환경 설정의 htPage에 다음과 같은 값을 추가한다.
	 * // /music.nhn?action=test&param1={0}&param2={1}&param3={2}
	 * // 그런 후, 아래와 같이 호출할 경우 원하는 값을 얻을 수 있다.
	 * var sPageUrl = nmp.getPageUrl("PAGE0001", ["first", 2, "getList"]);
	 */
	getPageUrl:function (sPageCode, aParameter) {
		var sPageUrl = this.getVariable("htPage." + sPageCode);
		if (sPageUrl) {
			return aParameter ? nmp.utility.replaceString(sPageUrl, aParameter) : sPageUrl;
		} else {
			return "";
		}
	},

	setContext:function (sContext) {
		if (sContext) {
			this._sContext = sContext;
		}
	},

	prependContext:function (sUrl, aParameter, bContainHost) {
		if (sUrl) {
			sUrl = aParameter ? nmp.utility.replaceString(sUrl, aParameter) : sUrl;

			// 상태 경로인 경우 (./ or ../)
			if ((new RegExp("^(\\.\\/|\\.\\.\\/|http(s)?:\\/\\/)")).test(sUrl)) {
				return sUrl;
				// 절대 경로인 경우
			} else if (this._sContext && !(new RegExp("^" + this._sContext + "/")).test(sUrl)) {
				// url에 컨텍스트가 포함되지 않은 경우
				sUrl = this._sContext + sUrl;
			}

			// bContainHost 파라미터에 따라 호스트 설정하여 리턴
			return bContainHost ? location.protocol + "//" + location.host + sUrl : sUrl;
		}
	},


	/**
	 * sAPICode 파라미터에 해당하는 API 주소를 리턴한다.
	 *
	 * @param {String} sAPICode 페이지 코드 (__ghtVariables.htAPI에 저장된 값)
	 * @return {String} API 주소 및 빈 문자열
	 * @example
	 * // 일반적인 방법
	 * var sAPI = nmp.getAPI("API0001");
	 */
	getAPI:function (sAPICode) {
		return this.getVariable("htAPI." + sAPICode) || "";
	},

	/**
	 * sMessageCode에 해당하는 메시지를 얼럿을 보여준다.
	 *
	 * @param {String} sMessageCode 메시지 코드 (__ghtVariables.htMessage에 저장된 값)
	 * @param {Array} [aParameter] 치환할 문자열이 있을 경우 배열로 전달 함 (배열 순서대로 치환 됨)
	 * @return {boolean} 얼럿 실행 여부
	 * @example
	 * // 일반적인 얼럿 메시지를 띄움
	 * nmp.alertMessage("M0010");
	 *
	 * // 메시지 코드의 문자열 중 일부를 치환하여 얼럿 메시지를 띄움
	 * nmp.alertMessage("M0010", ["수정"]);
	 */
	alertMessage:function (sMessageCode, aParameter) {
		var sMessage = this.getMessage(sMessageCode, aParameter);
		if (sMessage) {
			alert(sMessage);
			return true;
		} else {
			return false;
		}
	},

	alert:function (sMessage) {
		alert(sMessage)
	},
	/**
	 * sMessageCode에 해당하는 메시지를 얼럿으로 보여준다.
	 *
	 * @param {String} sMessageCode 메시지 코드 (__ghtVariables.htMessage에 저장된 값)
	 * @param {Array} [aParameter] 치환할 문자열이 있을 경우 배열로 전달 함 (배열 순서대로 치환 됨)
	 * @return {Boolean} 컨펌창에서 사용자의 선택 값
	 * @example
	 * // 일반적인 컨펌 메세지를 띄움
	 * if(nmp.confirmMessage("M0010")){
	 *	 alert("사용자가 확인 버튼 클릭");
	 * }
	 *
	 * // 메시지 코드의 문자열 중 일부를 치환하여 컨펌 메세지를 띄움
	 * if(nmp.confirmMessage("M0010", ["수정"])){
	 *	 alert("사용자가 확인 버튼 클릭");
	 * }
	 */
	confirmMessage:function (sMessageCode, aParameter) {
		var sMessage = this.getMessage(sMessageCode, aParameter);
		if (sMessage) {
			return confirm(sMessage);
		} else {
			return false;
		}
	},


	/***************************************************************************************************************************
	 * 레이어 관련 함수
	 **************************************************************************************************************************/

	/**
	 * 레이어를 Lazy 로딩 해주고 showLayer를 호출 해주는 함수
	 * @param {String} sTargetLayerURI 요청을 보낼 FTL 위치
	 * @param {HTMLElement} elBaseElement 레이어가 보여질 때, 기준이 될 엘리먼트
	 * @param {HashTable} [htLayerOption] 레이어가 정렬될 위치 관련 옵션 (상세 옵션은 아래의 문서를 참고)
	 * @param {Object} oContext 모듈 컨텍스트
	 * @link <a href="http://wiki.nhncorp.com/display/cec/LazyLoadingLayer">http://wiki.nhncorp.com/display/cec/LazyLoadingLayer</a>
	 */
	showLayerAfterLoad:function (sTargetLayerURI, elBaseElement, htLayerOption, oContext) {
		var sTargetLayerClass = sTargetLayerURI.replace(/(^.*\/)/, ""),
			elTargetLayer = jindo.$$.getSingle("._" + sTargetLayerClass);

		if (!elTargetLayer) {
			this.loadHTML(this.prependContext("/main/layers/" + sTargetLayerURI), document.body, jindo.$Fn(
				function (sTargetLayerClass, elBaseElement, htLayerOption, oContext) {
					var elTargetLayer = jindo.$$.getSingle("._" + sTargetLayerClass);

					if (!elTargetLayer) {
						throw new Error("nmp.showLayerAfterLoad : check class name");
					}

					// Load 후 콜백
					if (typeof(htLayerOption.fLoadCallback) == "function") {
						htLayerOption.fLoadCallback(elTargetLayer);
					}

					arguments[0] = elTargetLayer;
					this.showLayer.apply(this, arguments);
				}, this).bind(sTargetLayerClass, elBaseElement, htLayerOption, oContext), "append");
			return;
		}
		arguments[0] = elTargetLayer;
		this.showLayer.apply(this, arguments);
	},

	/**
	 * 레이어를 보여주고, 특정 엘리먼트를 기준으로 정렬시켜주는 함수
	 *
	 * @param {HTMLElement} elTargetLayer 보여질 레이어 엘리먼트
	 * @param {HTMLElement} elBaseElement 레이어가 보여질 때, 기준이 될 엘리먼트
	 * @param {HashTable} [htLayerOption] 레이어가 정렬될 위치 관련 옵션 (상세 옵션은 아래의 문서를 참고)
	 * @param {Object} oContext 모듈 컨텍스트
	 * @link <a href="http://jindo.nhncorp.com/docs/jindo-component/jsdoc/symbols/jindo.LayerPosition.html">http://jindo.nhncorp.com/docs/jindo-component/jsdoc/symbols/jindo.LayerPosition.html</a>
	 * @example
	 * // 기본 옵션을 이용하여 레이어를 띄우는 경우
	 * nmp.showLayer($("target_layer"), $("button"));
	 *
	 * // 옵션을 이용하여 위치를 변경하는 경우
	 * nmp.showLayer($("target_layer"), $("button"), {
	 *		 sPosition : "outside-right",
	 *		 vAlign : "top",
	 *		 nLeft : -30
	 * });
	 *
	 * // 레이어와 함께 딤드 레이어을 띄우는 경우
	 * nmp.showLayer($("target_layer"), $("button"), {"bShowDimmedLayer" : true});
	 *
	 * // 레이어 위치를 변경하지 않고, 보여주기만 하는 경우
	 * nmp.showLayer($("target_layer"), $("button"), {"bShowOnly" : true});
	 *
	 * // 레이어가 닫힐 때 콜백함수의 호출
	 * nmp.showLayer($("target_layer"), $("button"), {
	 *	 fHideCallback : function(){
	 *		 alert(1);
	 *	 }
	 * }
	 */
	showLayer:function (elTargetLayer, elBaseElement, htLayerOption, oContext) {
		this.checkClass("jindo.LayerPosition", "jindo.LayerManager", "jindo.Timer");

		var htOption = {
			sPosition:"outside-bottom",
			sAlign:"left",
			bAuto:true
		};
		if (htLayerOption) {
			for (var x in htLayerOption) {
				htOption[x] = htLayerOption[x];
			}
		}

		if (!this._htInstance["LayerPosition"] && !this._htInstance["LayerManager"]) {
			if (htOption.bShowOnly) {
				this._htInstance["LayerPosition"] = new jindo.LayerPosition();
			} else {
				this._htInstance["LayerPosition"] = new jindo.LayerPosition(elBaseElement, elTargetLayer, htOption);
			}
			this._htInstance["LayerManager"] = new jindo.LayerManager(elTargetLayer, {
				// FIXME 생성을 한번 밖에 안하기 때문에 이 코드는 사용하면 안됨 수정 필요(박종욱)
				sCheckEvent:((typeof htOption.sCheckEvent == "undefined") ? "click" : htOption.sCheckEvent),
				nHideDelay:0
			}).link(elTargetLayer, elBaseElement);
			this._htInstance["LayerManager"].attach("hide", jindo.$Fn(this.hideLayer, this).bind());
		} else {
			//if (!$Element(elTargetLayer).visible()) {
			this.hideLayer();
			if (!htOption.bShowOnly) {
				this._htInstance["LayerPosition"].setLayer(elTargetLayer).setElement(elBaseElement).option(htOption);
			}
			if (htOption.aLink) {
				this._htInstance["LayerManager"].setLinks(htOption.aLink);
			}

			this._htInstance["LayerManager"].setLayer(elTargetLayer).link(elTargetLayer, elBaseElement);
			//}
		}

		if (typeof(htOption.fHideCallback) == "function") {
			var wfCallbackHide = jindo.$Fn(
				function () {
					htOption.fHideCallback();
					this._htInstance["LayerManager"].detach("hide", wfCallbackHide);
				}, this).bind();
			this._htInstance["LayerManager"].attach("hide", wfCallbackHide);
		}

		if (typeof(htOption.fShowCallback) == "function") {
			var wfCallbackShow = jindo.$Fn(
				function () {
					htOption.fShowCallback(elTargetLayer);
					this._htInstance["LayerManager"].detach("show", wfCallbackShow);
				}, this).bind();
			this._htInstance["LayerManager"].attach("show", wfCallbackShow);
		}

		if (typeof(htOption.fBeforeShowCallback) == "function") {
			var wfCallbackBeforeShow = jindo.$Fn(
				function () {
					htOption.fBeforeShowCallback(elTargetLayer);
					this._htInstance["LayerManager"].detach("beforeShow", wfCallbackBeforeShow);
				}, this).bind();
			this._htInstance["LayerManager"].attach("beforeShow", wfCallbackBeforeShow);
		}

//		this._htInstance["LayerManager"].toggle();
		this._htInstance["LayerManager"].show();

		if (htOption.bShowDimmedLayer) {
			if (!this._htElement["dimmed_layer"]) {
				// 2011.10.14 성종민
				// 딤드 레이어 z-index 설정인해 상위 인덱스 추가 : 리펙토링 검토
				//2012.01.06 박정기
				// IE6을 지원 안하므로 iframe제거 및 일부 ie8에서 opacity문제인지 모르나 검게 나오는 문제로 인해 position:fixed로 변경
				this._htElement["dimmed_layer"] = jindo.$Element(elTargetLayer).before(jindo.$Element("<div style='position:fixed;z-index:9998;top:0px;left:0px;background:#000;opacity:0.3;filter:alpha(opacity=30)'></div>"));
			}
//			var htScrollSize = $Document().scrollSize();
			this._htElement["dimmed_layer"].show().css({"width":"100%", "height":"100%"});
//			this._htElement["dimmed_layer"].show().width(htScrollSize.width).height(htScrollSize.height);
//			if ($Agent().navigator().ie && $Agent().navigator().version == 6) {
//				$Element(this._htElement["dimmed_layer"].query("iframe")).width(htScrollSize.width).height(htScrollSize.height);
//			}
			this._htInstance["LayerManager"].link(this._htElement["dimmed_layer"]);
		}

		if (!htOption.bShowOnly) {
			this._htInstance["LayerPosition"].setPosition();
		}

		if (typeof htOption.nAfterHide == "number" && htOption.nAfterHide != 0) {
			clearTimeout(this._nLayerTimer);
			this._nLayerTimer = setTimeout(jindo.$Fn(function () {
				this.hideLayer();
			}, this).bind(), htOption.nAfterHide);
		}
		if (oContext) {
			this._htEventData["layer_click"] = this.event_delegator.attach(elTargetLayer, "click", oContext);
		}

		this._htElement["showed_layer"] = elTargetLayer;
		this._htElement["base_element"] = elBaseElement;

		// 2011.10.14 성종민
		// 딤드 레이어 z-index 설정인해 상위 인덱스 추가 : 리펙토링 검토
		if (htOption.bShowDimmedLayer) {
			jindo.$Element(this._htInstance["LayerManager"].getLayer()).css({
				"zIndex":"9999"
			});
		}
	},

	/**
	 * 보여진 레이어를 닫아주는 함수
	 * - 현재 보여지는 레이어가 있을 경우에만 닫아준다.
	 *
	 * @param {Number} nDelay 닫을 때, 지연 시간
	 * @example
	 * // 현재 열려있는 레이어를 닫을 때
	 * nmp.hideLayer();
	 *
	 * // 현재 열려있는 레이어를 1초 후에 닫을 때
	 * nmp.hideLayer(1000);
	 */
	hideLayer:function (nDelay) {
		if (this._htInstance["LayerManager"] && this._htInstance["LayerManager"].getVisible()) {
			this._htInstance["LayerManager"].hide(nDelay || 0);
			this._htInstance["LayerManager"].unlink(this._htElement["showed_layer"], this._htElement["base_element"]);
		}

		if (this._htElement["dimmed_layer"] && this._htElement["dimmed_layer"].visible()) {
			this._htElement["dimmed_layer"].hide();
		}

		if (this._htEventData["layer_click"]) {
			this._htEventData["layer_click"].detach(this._htElement["showed_layer"], "click");
			this._htEventData["layer_click"] = null;
		}
		if (nmp.layer) {
			nmp.layer.hide();
		}

	},

	/**
	 * 팝업 윈도우 닫기
	 */
	closeWindow:function () {
		nmp.utility.closeWindow();
	},
	/***************************************************************************************************************************
	 * 기타 기능 함수
	 **************************************************************************************************************************/

	/**
	 * sUrl로 현재 페이지를 이동 시킨다.
	 * - oWindow 객체를 전달할 경우, 해당 윈도우의 페이지를 이동 시킨다.
	 *
	 * @param {String} sUrl 이동할 페이지 주소
	 * @param {Object} [oWindow] 이동할 윈도우 객체 (생략 시에는, 현재 윈도우 객체)
	 * @example
	 * // 현재 페이지에서의 이동
	 * nmp.moveUrl('/artist.nhn?artistId=12342');
	 *
	 * // 다른 윈도우의 페이지 이동 (오프너 객체의 페이지를 이동)
	 * nmp.moveUrl('/artist.nhn?artistId=12342', opener);
	 */
	moveUrl:function (sUrl, oWindow) {
		if (sUrl) {
			(oWindow || window).location.href = sUrl;
		} else {
			this.alertMessage("MSG0004");
		}
	},

	/**
	 * 팝업 호출용 함수
	 * - 팝업창이 차단되어 있을 경우, 자동으로 안내 메세지를 얼럿으로 띄운다.
	 * - 팝업창 오픈 후 자동으로 포커스를 준다.
	 * - 팝업창 오픈시 로그인 체크를 할 수 있다.
	 * - POST나 GET 방식으로 파라미터를 전달 가능하다.
	 * @param {String} sPageUrl
	 * @param {Object} htOption
	 @example
	 nmp.openNewPopup("/main/test", {
	 sPopupName : "testPopup", // 팝업 이름
	 sPopupOption : "width=300px,height=400px", // 팝업 옵션
	 htParam : { // 전달할 파라미터
	 someValue1 : "test1",
	 someValue2 : "test2"
	 },
	 sMethod : "post", // 메소드 타입
	 bReload : true, // 리로드 여부
	 bNotUseAlert : true, // 안내 얼럿 사용 여부
	 bLoginCheck : true, // 로그인 체크 여부
	 sLoginCheckUrl : "/main/logincheck", // 로그인 체크 URL
	 bParentClose : false // 부모창이 닫힐때 팝업창도 닫고 싶을 경우
	 });
	 */
	openNewPopup:function (sPageUrl, htOption) {
		if (!sPageUrl) {
			this.alertMessage("MSG0009");	// 팝업창 주소가 올바르지 않습니다.
			return null;
		}

		var aArgument = jindo.$A(arguments).$value(),
			oPopup, welForm,
			htDefaultOption = {
				sPopupName : this._getRandomId(), // 팝업이름
				sPopupOption : "", // 팝업 옵션
				sMethod : "get", // 전송 메소드
				htParam : null, // 추가 파라미터
				bReload : true, // 팝업 새로고침 허용 여부
				bNotUseAlert : false, // 얼럿 안내 허용 여부
				bLoginCheck : false, // 로그인 체크 사용 여부
				sLoginCheckUrl : "/main/logincheck", // 로그인 체크 주소
				bParentClose : false // 부모창 닫힐때 팝업 닫기 여부
			};

		htOption = nmp.utility.extend(htDefaultOption, htOption || {});

		// 팝업 이름 길이도 추가 예정
		if (!/^[a-zA-Z0-9]+$/.test(htOption.sPopupName)) {
			this.alertMessage("MSG0036"); // 한글이나 특수문자는 팝업이름으로 사용할수 없습니다.(IE에서 스크립트 오류 발생)
			return null;
		}

		oPopup = this._htPopup[htOption.sPopupName];

		if (htOption.bReload || !(oPopup && !oPopup.closed)) {
			// 로그인 체크
			if (htOption.bLoginCheck) {
				this.requestAjax(this.prependContext(htOption.sLoginCheckUrl), {}, {
					async : false,
					onLoginSuccess : jindo.$Fn(function() {
						this.openNewPopup.apply(this, aArgument);
					}, this).bind(),
					onload : function(){
						aArgument = null;
					}
				});

				// 비로그인 상태이면 리턴
				if(aArgument) {
					return null;
				}
			}

			// 전달할 파라미터 존재시 처리
			if (htOption.htParam || htOption.sMethod == "post") {
				welForm = this._getForm(sPageUrl, htOption.sPopupName, htOption.sMethod, htOption.htParam);
				welForm.appendTo(document.body, true);
				sPageUrl = "about:blank";
			}

			oPopup = window.open(sPageUrl, htOption.sPopupName, htOption.sPopupOption);
			this._htPopup[htOption.sPopupName] = oPopup;

			// submit이 필요한 경우
			if (welForm) {
				if (oPopup) {
					welForm.$value().submit();
				}
				welForm.leave();
				welForm = null;
			}
		}

		// 팝업이 정상적으로 존재하는 경우
		if (oPopup) {
			// 부모창을 닫을때 팝업창도 함께 닫도록 등록
			if (htOption.bParentClose) {
				this._htClosePopup[htOption.sPopupName] = oPopup;
			} else {
				delete this._htClosePopup[htOption.sPopupName];
			}

			// 팝업창에 Focus 주기
			jindo.$Fn(function () {
				var oPopup = this._htPopup[htOption.sPopupName];
				if (oPopup && !oPopup.closed) {
					oPopup.focus();
				}
			}, this).delay(0);

			return oPopup;
			// 팝업이 정상적이지 않은 상태
		} else if (!htOption.bNotUseAlert) {
			this.alertMessage("MSG0001");	// 팝업창이 차단되어 있습니다.\n팝업창 설정을 변경해 주세요.
			return null;
		}
	},

	/**
	 * iframe여는 메소드
	 * @param {String} sPageUrl
	 * @param {HashTable} htOption
	 */
	openNewIframe:function (sPageUrl, htOption) {
		if (!sPageUrl) {
			this.alertMessage("MSG0011");	// IFRAME 주소가 올바르지 않습니다.
			return null;
		}

		var htDefaultOption = {
			sIframeName:this._getRandomId(), // 팝업이름
			sMethod:"get", // 전송 메소드
			htParam:null // 추가 파라미터
		},
			welIframe,
			welForm;

		htOption = nmp.utility.extend(htDefaultOption, htOption || {});

		// iframe 이름 길이도 추가 예정
		if (!/^[a-zA-Z0-9]+$/.test(htOption.sIframeName)) {
			this.alertMessage("MSG0036"); // 한글이나 특수문자는 이름으로 사용할수 없습니다.(IE에서 스크립트 오류 발생)
			return null;
		}

		if (htOption.htParam) {
			welForm = this._getForm(sPageUrl, htOption.sIframeName, htOption.sMethod, htOption.htParam);
			welForm.appendTo(document.body);
			sPageUrl = "";
		}

		welIframe = jindo.$Element(jindo.$$.getSingle("iframe[name=" + htOption.sIframeName + "]"));

		if (!welIframe) {
			welIframe = jindo.$Element(this._oTplIframe.process({sName:htOption.sIframeName}));
			welIframe.appendTo(document.body);
		}

		if (htOption.htParam && welForm) {
			welForm.$value().submit();
			welForm.leave();
		} else {
			welIframe.attr("src", sPageUrl);
		}

		return welIframe.$value();
	},

	/**
	 * 임시 Form객체 만드는 메소드
	 * @param {String} sPageUrl
	 * @param {String} sName
	 * @param {String} sMethod
	 * @param {HashTable} htParam
	 */
	_getForm:function (sPageUrl, sName, sMethod, htParam) {
		var aTemp = [];

		jindo.$H(htParam).forEach(function (vValue, sKey) {
			aTemp.push({sKey:sKey, vValue:vValue});
		}, this);

		return jindo.$Element(this._oTplForm.process({
			sMethod:sMethod,
			sPageUrl:sPageUrl,
			sName:sName,
			values:aTemp
		}));
	},


	/**
	 * 폼을 생성하여 htParameter을 폼에 적용 후, sUrl에 post 방식으로 요청한다.
	 *
	 * @param {String} sUrl 요청할 url
	 * @param {HashTable} htParameter 함께 전달할 파라미터 객체
	 * @example
	 * nmp.requestByPost("/order/cart", {
	 *     "userId" : "standard"
	 * });
	 */
	requestByPost : function(sUrl, htParameter){
		if(sUrl){
			htParameter = htParameter || {};
			var welForm = this._getForm(sUrl, "_self", "post", htParameter);
			welForm.appendTo(document.body, true);
			// [SELLBLOG-7601] IE bug fix : beforeunload event cancel 시 error 발생 방지용
			try {
				welForm.$value().submit();
			} catch (e) {}
		}
	},

	/**
	 * 팝업 호출용 함수
	 * - 팝업창이 차단되어 있을 경우, 자동으로 안내 메세지를 얼럿으로 띄운다.
	 *
	 * @param {String} sPageUrl 팝업창을 열 주소
	 * @param {Array} [aOption] 팝업창을 띄울 때 사용될 옵션 배열
	 * @param {String} [sPopupName] 팝업창을 구분하는 윈도우 이름, 생략할 경우 랜덤한 값으로 자동 지정됨
	 * @param {HashTable} [htPostParameter] 팝업창을 띄울 때 포스트 방식으로 팝업창에 보낼 데이터 객체
	 * @param {boolean} bReload 팝업창을 리로드 하는 경우
	 * @param {boolean} bNotUseAlert 팝업 차단이 된 경우에 보여지는 얼럿 메시지를 사용하지 않는 경우 true로 설정
	 * @return {Object} 팝업창 객체
	 * @example
	 * // 넓이 400, 높이 300의 팝업창을 띄우는 경우
	 * nmp.openPopup("/minishop/preview.nhn", ["width=400", "height=300"]);
	 *
	 * // 팝업창을 띄울 때 파라미터를 포스트 방식으로 전달하는 경우
	 * nmp.openPopup("/minishop/preview.nhn", ["width=400", "height=300"], "PreviewWindow", {
	 *		 "html" : "<div>preview html</div>",
	 *		 "type" : "preview"
	 * });
	 */
	openPopup : function (sPageUrl, aOption, sPopupName, htPostParameter, bReload, bNotUseAlert) {
		if (!sPageUrl) {
			this.alertMessage("MSG0009");	// 팝업창 주소가 올바르지 않습니다.
			return null;
		}
//		else {
//			if(sPageUrl.indexOf('?') < 0) {
//				sPageUrl = sPageUrl + '?pop';
//			} else {
//				sPageUrl = sPageUrl + '&pop';
//			}
//		}

		sPopupName = sPopupName || this._getRandomId();
		if (htPostParameter) {
			var welForm = this._getForm(sPageUrl, sPopupName, "post", htPostParameter);
			welForm.appendTo(document.body, true);
			sPageUrl = "";
		}

		if (bReload || !(this._htPopup[sPopupName] && !this._htPopup[sPopupName].closed)) {
			this._htPopup[sPopupName] = window.open(sPageUrl, sPopupName, (aOption || []).join(","));
			if (this._htPopup[sPopupName] && htPostParameter) {
				welForm.$value().submit();
				welForm.leave();
			}
		}

		if (this._htPopup[sPopupName]) {
			jindo.$Fn(
				function () {
					this._htPopup[sPopupName].focus();
				}, this).delay(0);

			return this._htPopup[sPopupName];
		} else if (!bNotUseAlert) {
			this.alertMessage("MSG0001");	// 팝업창이 차단되어 있습니다.\n팝업창 설정을 변경해 주세요.
			return null;
		}
	},

	/**
	 * 동적으로 iframe을 생성해서 처리하는 메소드
	 * @param {String} sPageUrl
	 * @param {String} sIframeName
	 * @param {HashTable} htPostParameter
	 * @param {Function} fOnloadCallback
	 * @return $Element 아이프레임 엘리먼트
	 */
	openIframe:function (sPageUrl, sIframeName, htPostParameter, fOnloadCallback) {
		if (!sPageUrl) {
			this.alertMessage("MSG0011");	// IFRAME 주소가 올바르지 않습니다.
			return null;
		}

		var welForm, welIframe;

		sIframeName = sIframeName || this._getRandomId();
		if (htPostParameter) {
			welForm = this._getForm(sPageUrl, sIframeName, "post", htPostParameter);
			welForm.appendTo(document.body, true);
			sPageUrl = "";
		}

		welIframe = jindo.$Element(jindo.$$.getSingle("iframe[name=" + sIframeName + "]"));
		if (!welIframe) {
			welIframe = jindo.$Element(this._oTplIframe.process({sName:sIframeName}));
			if (typeof fOnloadCallback == "function") {
				jindo.$Fn(function () {
					fOnloadCallback();
				}, this).attach(welIframe.$value(), "load");
			}
			welIframe.appendTo(document.body);
		}

		if (htPostParameter && welForm) {
			welForm.$value().submit();
			welForm.leave();
		}

		return welIframe.$value();
	},

	/**
	 * 외부 연동 팝업 페이지의 콜백 함수 (도메인이 다른 서비스의 팝업 페이지, 예:SMS인증, 미투데이인증 등)
	 * - 외부 팝업 페이지에서 작업이 완료되고 NMP쪽 콜백 페이지가 호출되면, 해당 페이지에서 이 함수를 호출한다.
	 * - 외부 팝업 페이지와 연동 시에 전달한 callbackFunctionName 값에 해당하는 함수를 자동으로 호출하며 파라미터를 전달한다.
	 * - 직접 호출할 일은 없으며, 외부 팝업과 연동 시에만 호출된다.
	 *
	 * @param {String} sParameter 콜백 페이지에서 받은 쿼리 스트링 문자열
	 */

	/**
	 * 팝업 페이지에서의 콜백 처리 함수
	 * - 여러 곳에서 공통적으로 사용되는 팝업 페이지가 부모창에 data를 전달할 때 사용하는 함수
	 * - 팝업 페이지에 전달한 callbackFunctionName 값에 해당하는 함수를 자동으로 호출하며 파라미터를 전달한다.
	 * - nmp.xxx.yyy.dd 식으로 풀 네임을 전달해야 한다.
	 * - 도메인이 다른 외부 팝업 페이지와의 연동 작업도 이 함수를 이용하여 처리한다. (SMS인증, 미투데이인증)
	 *
	 * @param {String} sFunctionName 팝업창으로 부터 받은 콜백함수 Full Name
	 * @param {HashTable} htData 팝업창으로 부터 받은 데이터 객체
	 */
	executeCallback:function (sFunctionName, htData) {
		if (sFunctionName) {
			var aFunction = sFunctionName.split(".");
			var oNamespace = this;
			for (var i = 1, nLength = aFunction.length - 1; i < nLength; i++) {
				oNamespace = oNamespace[aFunction[i]];
			}
			return oNamespace[aFunction[nLength]].call(oNamespace, nmp.utility.cloningObject(htData));
		}
	},

	/**
	 * 현재의 날짜 객체를 얻어온다.
	 * - 클라이언트의 날짜 및 시간보다는 서버측 날짜 및 시간이 정확하기에 서버 시간을 기준으로 클라이언트 시간을 계산하여 리턴한다.
	 * - 웹페이지 초기화 시에 클라이언트와 서버의 시간 차이(nDifferentTime)를 계산하여 가지고 있다가,
	 *   클라이언트에서 시간을 사용하는 시점에서 클라이언트의 시간을 보정하여 사용한다.
	 *
	 * @return {HashTable} 현재의 날짜 객체
	 * @example
	 * // 보정된 현재 시간을 얻어온다.
	 * var dDate = nmp.getDate();
	 */
	getDate:function (bDate) {
		var dNow = new Date((new Date()).getTime() - (this.getVariable("nDifferentTime") || 0));
		if (bDate) {
			return dNow;
		}
		return {
			"nYear":dNow.getFullYear(),
			"nMonth":dNow.getMonth() + 1,
			"nDate":dNow.getDate(),
			"nHour":dNow.getHours(),
			"nMinute":dNow.getMinutes(),
			"nSecond":dNow.getSeconds(),
			"nMonthtype":0
		};
	},

	/**
	 * 동적으로 외부에서 마크업을 가져와서 컨테이너에 추가한다.
	 *
	 * @param {String} sURL 동적으로 불러올 마크업의 경로
	 * @param {String} elContainer 불러온 마크업을 추가할 엘리먼트
	 * @param {String} fCallback 엘리먼트를 컨테이너에 추가한 후, 호출할 콜백함수
	 * @param {String} sType 불러온 엘리먼트를 컨테이너에 추가하는 방법 (append or html)
	 * @link <a href="http://wiki.nhncorp.com/display/cec/LazyLoadingHTML">http://wiki.nhncorp.com/display/cec/LazyLoadingHTML</a>
	 */
	loadHTML:function (sURL, elContainer, fCallback, sType) {
		sType = sType || "html";
		this.requestAjax(sURL, {}, {
			onload:function (htResult) {
				if (htResult.bSuccess) {
					var sOriginalText = htResult.htReturnValue.text || "";
					var sText = nmp.utility.stripScript(sOriginalText);
					var welContainer = jindo.$Element(elContainer);

					if (sType == "html") {
						welContainer.html(sText);
					} else if (sType == "append") {
						var vTarget = jindo.$(sText);
						if (vTarget.length) {
							jindo.$A(vTarget).forEach(function (elChild) {
								welContainer.append(elChild);
							});
						} else {
							welContainer.append(vTarget);
						}
					}

					nmp.utility.evaluateScript(sOriginalText);
					if (fCallback) {
						fCallback(welContainer);
					}
				}
			},
			bNotUseErrorAlert:false,
			sResultType:"text",
			method:"get"
		});
	},

	/**
	 * 스크립트 파일을 동적으로 로딩하여 실행한다.
	 * - loadHTML을 이용하여 마크업을 불러오는 경우, 마크업내에 있는 스크립트 태그에서 호출한다.
	 * - 사용을 위해서는 jindo.LazyLoading 클래스가 필요하다.
	 *
	 * @require jindo.LazyLoading
	 * @param {String} sScriptUrl 스크립트 파일을 불러올 경로
	 * @param {String} sModuleName 불러오는 스크립트 파일 내에 정의된 서비스 모듈의 이름
	 * @param {HashTable} htOption 서비스 모듈 초기화 시에 전달할 옵션 객체
	 * @example
	 * nmp.loadScript("/static/js/service/seller_admin/sellershop/list.js", "nmp.seller_admin.sellershop.list", {});
	 * nmp.loadScript("./list.js", "nmp.seller_admin.sellershop.list", {
	 *	 "sType" : "standard"
	 * });
	 */
	loadScript:function (sScriptUrl, sModuleName, htOption) {
		this.checkClass("jindo.LazyLoading");

		jindo.LazyLoading.load(sScriptUrl, function () {
			var oModule = eval(sModuleName);
			if (oModule) {
				oModule.destroy();
				oModule.initialize(htOption);
			} else {
				nmp.alertMessage("MSG0018");
			}
		});
	},

	/**
	 * @deprecated
	 * @description nmp.extend() 메서드는 곧 폐기될 예정이니, nmp.createModule() 메서드로 교체 바랍니다.
	 * @param {Object} oSource
	 * @param {Object} oDestination
	 */
	extend:function (oSource, oDestination) {
		alert("nmp.extend() 메서드는 곧 폐기될 예정이니, nmp.createModule() 메서드로 교체 바랍니다.");
		var oBase = nmp.utility.cloningObject(oSource);
		for (var x in oDestination) {
			if (x == "initialize") {
				oBase["__initialize"] = oDestination[x];
				delete oDestination[x];
			} else if (x == "destroy") {
				oBase["__destroy"] = oDestination[x];
				delete oDestination[x];
			} else {
				oBase[x] = oDestination[x];
			}
		}
		return oBase;
	},

	/**
	 * 모듈생성메소드
	 * @param {String} sModuleName
	 * @param {Object} htBody
	 * @param {boolean} bNotUseSelector
	 */
	createModule:function (sModuleName, htBody, bNotUseSelector) {
		var oBase = nmp.utility.cloningObject(nmp.base);
		var aList = sModuleName.split(".");
		var aModuleList = [];
		var oModule = window;
		for (var i = 0; i < aList.length; i++) {
			if (oModule[aList[i]]) {
				oModule = oModule[aList[i]];
			} else {
				oModule = oModule[aList[i]] = {};
			}
			aModuleList.push(oModule);

			if (aModuleList[i - 1]) {
				oModule["_oParent"] = aModuleList[i - 1];
			}
		}

		for (var x in oBase) {
			oModule[x] = oBase[x];
		}

		for (var x in htBody) {
			if (typeof(htBody[x]) == "function") {
				htBody[x].__name = (sModuleName ? sModuleName + "." : "") + x;
			}

			if (x == "initialize") {
				oModule["__initialize"] = htBody[x];
			} else if (x == "destroy") {
				oModule["__destroy"] = htBody[x];
			} else {

				oModule[x] = htBody[x];
			}
		}
		oModule["name"] = sModuleName || "";
		oModule["__bNotUseSelector"] = bNotUseSelector;
		oModule.attach = function () {
			oModule["__htCustomEventData"]["attach"].push(arguments);
		};
		oModule.detach = function () {
			oModule["__htCustomEventData"]["detach"].push(arguments);
		};
		oModule.detachAll = function () {
			oModule["__htCustomEventData"]["detachAll"].push(arguments);
		};

		return oModule;
	},

	checkClass:function () {
		var aList = [];
		for (var i = 0; i < arguments.length; i++) {
			if (!eval(arguments[i])) {
				aList.push(arguments[i]);
			}
		}
		if (aList.length) {
			this.alertMessage("MSG0012", [aList.join(", ")]);
		}
	},

	_detachEvent:function () {
		// 이벤트 딜리게이터 등록된 이벤트 해제
		nmp.event_delegator.detachAll();
	},

	_destroy:function () {
		this._detachEvent();
		var aInitializeModuleList = this._aInitializeModuleList;
		for (var i = 0, nLen = aInitializeModuleList.length; i < nLen; i++) {
			var htModule = aInitializeModuleList[i];
			if (htModule.oContext.destroy && typeof(htModule.oContext.destroy) == "function") {
				htModule.oContext.destroy();
			}
		}

		for (var sPopupName in this._htClosePopup) {
			var oPopup = this._htClosePopup[sPopupName];
			if (oPopup && !oPopup.closed) {
				oPopup.close();
			}
		}
	},

	getUnique:function () {
		return new Date().getTime();
	},

	error:function (sErrorMessage) {
		alert(sErrorMessage);
		throw Error(sErrorMessage);
	},

	/**
	 * 로그인 체크 후 다음 액션 수행 메소드
	 * @param htOption // nmp.requestAjax 메소드에서 옵션에 해당하는 객체
	 * // 추가 옵션
	 * onHideLayer // 레이어드 로그인 레이어가 닫힐때 호출되는 콜백
	 * onShowLayer // 레이어드 로그인 레이어가 열릴때 호출되는 콜백
	 * onLoginError // 레이어드 로그인 실패시 호출되는 콜백
	 * onLoginSuccess // 레이어드 로그인 성공시 호출되는 콜백
	 * @example
	 nmp.requestLoginCheck({
	 onLoginSuccess : $Fn(function(){...}, this).bind(), // 로그인 성공시(보통 재귀 호출)
	 onLoginError : $Fn(function(){...}, this).bind(), // 로그인 실패시
	 onHideLayer : $Fn(function(){...}, this).bind(), // 레이어드 로그인 레이어를 닫을 경우
	 onShowLayer : $Fn(function(){...}, this).bind(), // 레이어드 로그인 레이어를 열릴 경우
	 onload : $Fn(function(){...}, this).bind() // 로그인이 정상적인 경우 원래 호출하고자 하는 경우
	 });
	 */
	requestLoginCheck : function(htOption){
		htOption = nmp.utility.extend({async : false}, htOption || {});
		this.requestAjax(this.prependContext("/main/logincheck"), null, htOption);
	},

	historyBack : function(){
		history.back();
	}
};
/**
 * @namespace nmp component 네임스페이스
 */
nmp.component = {};
if (window.top == window) {
	jindo.$Fn(nmp.initialize, nmp).attach(document, "domready");
} else {
	jindo.$Fn(nmp.initialize, nmp).attach(window, "load");
}