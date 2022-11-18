nmp.createModule("nmp.front.order.ui", {
	_aSelectBoxContainer : [],
	initialize : function(){
	},
	_htEventHandler : {},
	initializeDatePicker : function(aDatePickerElement) {
		if (!aDatePickerElement || !aDatePickerElement[0]) {
			aDatePickerElement = [aDatePickerElement];
		}
		var aResult = $A(aDatePickerElement).map(function(elDatePicker) {
			return new jindo.DateRangePicker({
				"elStartDate": elDatePicker,
				"sCalendarText": "",
				"vToday": nmp.getDate()
			});
		});
		
		return aResult.$value();
	},
	initializeDateRange : function(aDateRangeElement, addOption){
		var aResult = $A(aDateRangeElement).map(function(elDateRange) {
			var today = nmp.getDate();
			var welDateRange = $Element(elDateRange);
			var elQuick = welDateRange.query("._quick");
			var elStartDate = welDateRange.query("._startDate");
			var elEndDate = welDateRange.query("._endDate");
			var vStartDate = $Element(elStartDate).query("input[type=text]").value;
			var vEndDate = $Element(elEndDate).query("input[type=text]").value;
				
			var htOption = {
					"elQuick" : elQuick,
					"elStartDate": elStartDate,
					"elEndDate": elEndDate,
					"vToday": today,
					"vQuickBaseDate": today,
					"vQuickBaseDate": today,
					"vStartDate" : vStartDate,
					"vEndDate" : vEndDate,
					"sCalendarText": ""
			};
			
			if(addOption != undefined){
				$H(addOption).forEach(function(v,k,o){
					htOption = $H(htOption).add(k,v).$value();
				});
			}
			
			return new jindo.DateRangePicker(htOption);
		});
		
		return aResult.$value();
	},
	initializeEventDeligator : function(elRoot, oThis) {
		
		if ( oThis._htEventHandler == null ) {
			oThis._htEventHandler = {};
		}
		oThis._htEventHandlers = [];
		
		var fClickHandler = nmp.event_delegator.attach(elRoot, "click", oThis);
		
		oThis._htEventHandlers.push({
			"wel" : elRoot,
			"sEventType" : "click",
			"fHandler" : fClickHandler 
		});
		
		var fMouseOverHandler = nmp.event_delegator.attach(elRoot, "mouseover", oThis);
		
		oThis._htEventHandlers.push({
			"wel" : elRoot,
			"sEventType" : "mouseover",
			"fHandler" : fMouseOverHandler 
		});
		
		var fMouseOutHandler = nmp.event_delegator.attach(elRoot, "mouseout", oThis);
		
		oThis._htEventHandlers.push({
			"wel" : elRoot,
			"sEventType" : "mouseout",
			"fHandler" : fMouseOutHandler 
		});
		
		var fKeyUpHandler = nmp.event_delegator.attach(elRoot, "keyup", oThis);
		
		oThis._htEventHandlers.push({
			"wel" : elRoot,
			"sEventType" : "keyup",
			"fHandler" : fKeyUpHandler 
		});
		
		var welRoot = $Element(elRoot);
		
		$A(welRoot.queryAll("input[type=radio],select")).forEach(function(el){
			var fHandler = nmp.event_delegator.attach(el, "change", this);
			
			this._htEventHandlers.push({
				"wel" : elRoot,
				"sEventType" : "change",
				"fHandler" : fHandler 
			});
			
		}, oThis);
		
		var welRoot = $Element(elRoot);
		
		$A(welRoot.queryAll("input[type=text]")).forEach(function(el){
			var fHandler = nmp.event_delegator.attach(el, "blur", this);
			
			this._htEventHandlers.push({
				"wel" : elRoot,
				"sEventType" : "blur",
				"fHandler" : fHandler 
			});
			
		}, oThis);

		$A(welRoot.queryAll("input[type=text]")).forEach(function(el){
			var fHandler = nmp.event_delegator.attach(el, "focus", this);

			this._htEventHandlers.push({
				"wel" : elRoot,
				"sEventType" : "focus",
				"fHandler" : fHandler
			});

		}, oThis);
		

		$A(welRoot.queryAll("form")).forEach(function(el){
			var fHandler = nmp.event_delegator.attach(el, "submit", this);
			
			this._htEventHandlers.push({
				"wel" : elRoot,
				"sEventType" : "submit",
				"fHandler" : fHandler 
			});
		}, oThis);
	},
	destroyEventDeligator : function(elRoot, oThis ) {
		$A(oThis._htEventHandlers).forEach($Fn(function(htEventHandler) {
			htEventHandler.fHandler.detach(htEventHandler.wel, htEventHandler.sEventType);
		}, this).bind());
	},
	detachEventDeligator : function(elRoot, oThis ) {
		$A(oThis._htEventHandlers).forEach($Fn(function(htEventHandler) {
			nmp.event_delegator.detach(htEventHandler.wel, htEventHandler.sEventType, this);
			
			var welRoot = $Element(elRoot);
			$A(welRoot.queryAll("input[type=radio],select")).forEach($Fn(function(el){
				nmp.event_delegator.detach(el, htEventHandler.sEventType, this);
			}, this).bind());
			
			$A(welRoot.queryAll("input[type=text]")).forEach($Fn(function(el){
				nmp.event_delegator.detach(el, htEventHandler.sEventType, this);
			}, this).bind());
			
			$A(welRoot.queryAll("form")).forEach($Fn(function(el){
				nmp.event_delegator.detach(el, htEventHandler.sEventType, this);
			}, this).bind());
		}, oThis).bind());
	},
	initializeFormHelper : function(elRoot, fSuccessHandler, fBeforeSubmitHandler) {
		var formHeleper = new nmp.component.FormHelper({
			"elRoot" : elRoot
		});
		if ( fSuccessHandler ) {
			formHeleper.attach("success", fSuccessHandler);
		}
		
		if ( fBeforeSubmitHandler ) {
			formHeleper.attach("beforeSubmit", fBeforeSubmitHandler);
		}
		
		return formHeleper;
	},
	enableFields : function (elRootElement, bEnable) {
		var inputFields = $Element(elRootElement).queryAll("select,input,textarea");
		$ElementList(inputFields).attr("disabled", !bEnable);
	},
	setThousandComma : function(num) {
		 var returnVal = String(num);

		 while(returnVal.match(/^(-?\d+)(\d{3})/))	{
			 returnVal = returnVal.replace(/^(-?\d+)(\d{3})/, '$1,$2');
		 }
		 
		 return returnVal;
	},
	/**
	 * 폼헬퍼 내의 입력요소(textarea, input(text,passwd))에 입력시 스타일 추가
	 * @param oFormHelper 
	 * @param bNotLeavingStyle true:입력이후 색상남기지 않음, 그외(기본값):입력이후 색상 남김
	 * @param bNotFocusingStyle true:입력시 테두리 표시하지 않음, 그외(기본값):입력시 테두리 표시
	 */
	AttachCommonInteractionToFormHelper : function(oFormHelper, bNotLeavingStyle, bNotFocusingStyle) {
		if (bNotLeavingStyle !== true) {
			bNotLeavingStyle = false;
		}
		if (bNotFocusingStyle !== true) {
			bNotFocusingStyle = false;
		}
		if (oFormHelper) {
			if (!bNotFocusingStyle) {
				oFormHelper.setHighlight("inp_sel");
			}
			if (!bNotLeavingStyle) {
				this._attachLeavingStyle(oFormHelper);
			}
		}
	},
	_attachLeavingStyle : function(oFormHelper){
		if (oFormHelper) {
			var aElements = oFormHelper.getFormElementList();
			var fnFocusEvent = function(weEvent){
				if (weEvent && weEvent.elInput) {
					$Element(weEvent.elInput).addClass("inp_sel2");
				}
			};
			var aList = [];
			for(var i = 0, j = 0; i < aElements.length; i++){
	            if(aElements[i].name && !aElements[i].readOnly && (aElements[i].tagName == "TEXTAREA" || (aElements[i].tagName == "INPUT" && (aElements[i].type == "text" || aElements[i].type == "password")))){
	            	aList[j] = {};
	        		aList[j].sName = aElements[i].name;
	        		aList[j].htEvent = {"focus" : fnFocusEvent};
	        		j++;
	            }
			}
			if (aList && aList.length > 0) {
				oFormHelper.setEventHandler(aList);
			}
		}
    },
	initializeUnloadEvent : function() {
		this.enableUnloadCheck();
	},
	enableUnloadCheck : function(){
		this.disableUnloadCheck();
		this._htEventHandler["beforeunload"] = this._attachEventHandler(window, "beforeunload", $Fn(this._onBeforeUnload, this).bind());
	},
	disableUnloadCheck : function(){
		if(this._htEventHandler["beforeunload"]) {
			this._detachEventHandler(this._htEventHandler["beforeunload"]);
		}
	},
	_onBeforeUnload : function(weBeforeUnload){
		weBeforeUnload.$value().returnValue = "";
		return "";
    },
	getPanelInfoByIndex : function(oTabControl, nIndex) {
		var oResult = {};
		var elPanel = oTabControl.getPanel(nIndex);
		var sClassName = elPanel.className || "";
		
		var matchResult = /_panel_(\S+)/.exec(sClassName);
		
		oResult["nIndex"] = nIndex;
		oResult["elPanel"] = elPanel;
		if ( matchResult && matchResult.length > 1 ) {
			oResult["sName"] = matchResult[1];
		}
		
		return oResult;
	},
	getPanelInfoByName : function(oTabControl, panelName) {
		var oResult = {};
		$A(oTabControl.getPanels()).forEach(function(elPanel, nIndex){
			var sClassName = elPanel.className || "";
			var aClass = sClassName.split(/\s+/);
			for(var i = aClass.length ; i-- ;){
				if ( "_panel_"+panelName == aClass[i] ) {
					oResult["nIndex"] = nIndex;
					oResult["elPanel"] = elPanel;
					oResult["sName"] = panelName;
					$A.Break();
					return;
				}
			}
		});
		return oResult;
	},
	getPanelInfo : function(oTabControl, oParameter) {
		if ( typeof oParameter == "number" ) {
			return this.getPanelInfoByIndex(oTabControl, oParameter);
		} else {
			return this.getPanelInfoByName(oTabControl, oParameter);
		}
	},
	/**
	 * 라디오버튼의 하이라이트 처리
	 * 
	 * @param welBase 검색할 최상위 $Element, 이 $Element를 대상으로 query를 함
	 * @param htOptions 옵션
	 * 
	 * @author 남중
	 */
	initializeRadioHighlight : function(welBase, htOptions) {
		var htDefaultOptions = {
			"sRadioSelector" : "._radioHighlight",
			"sRadioEvent" : "click",
			"sHighlightClass" : "sel",
			"sHighlightTargetType" : "parent", /* self, parent, child */
			"sHighlightTargetClass" : "_radioHighlightTarget",
			"nSearchLimit" : 3 
		};
		htOptions = htDefaultOptions;
		
		var aRadio = welBase.queryAll(htOptions["sRadioSelector"]);
		if (!aRadio || aRadio.lengh <= 1) {
			return;
		}
		var fFindTarget = null;
		
		if (htOptions["sHighlightTargetType"] == "parent") {
			fFindTarget = function(wel) {
				var aWel = wel.parent(function(v){
	                return v.hasClass(htOptions["sHighlightTargetClass"]);
	            }, htOptions["nSearchLimit"]);
				
				if (aWel) {
					return aWel[0] || aWel;
				}
				return null;
			};
		} else if (htOptions["sHighlightTargetType"] == "child") {
			fFindTarget = function(wel) {
				var aWel = wel.child(function(v){
	                return v.hasClass(htOptions["sHighlightTargetClass"]);
	            }, htOptions["nSearchLimit"]);
				
				if (aWel) {
					return aWel[0] || aWel;
				}
				return null;
			};
		} else {
			fFindTarget = function(wel) {
				return wel;
			};
		} 
		
		
		var aTarget = [];
		var target = null;
		var ii = 0;
		for (var i in aRadio) {
			target = fFindTarget($Element(aRadio[i]));
			if (target) {
				aTarget[ii++] = target;
			}
		}
		
		var fTurnOff = function(wel) {
			wel.removeClass(htOptions["sHighlightClass"]);
		};
		
		var fAllTurnOff = function() {
			for (var j in aTarget) {
				fTurnOff(aTarget[j]);
			}
		};
		
		var fTurnOn = function(wel) {
			wel.addClass(htOptions["sHighlightClass"]);
		};
		
		var fRadioClick = function(htEvent) {
			if (!htEvent || !htEvent.element) {
				return;
			}
			fAllTurnOff();
			var welParent = fFindTarget($Element(htEvent.element));
			if (welParent) {
				fTurnOn(welParent);
			}
		};
		
		for (var k in aRadio) {
			$Fn(fRadioClick, this).attach($Element(aRadio[k]),htOptions["sRadioEvent"]);
		}
	},
	isElementVisible : function(el) {
		return el.offsetWidth > 0 && el.offsetHeight > 0;
	},
	isElement : function(el) {
		return (el != undefined && el.constructor == $Element);
	},
	toggleInstallmentComponent : function(welSelectBox, bEnable, bNeedInitialization) {
		if (welSelectBox == undefined) {
			return;
		}
		
		if (bEnable) {
			this.isElement(welSelectBox) ? this._toggleInstallmentBox(welSelectBox, true, true) : this._initInstallmentBox(welSelectBox).enable();
		} else {
			this.isElement(welSelectBox) ? this._toggleInstallmentBox(welSelectBox, false, bNeedInitialization) : this._initInstallmentBox(welSelectBox).disable();
		}
	},
	_toggleInstallmentBox : function(welSelectBox, bIsActivate, bNeedInitialization) {
		welSelectBox.attr("disabled", !bIsActivate);
		bIsActivate ? $Element(welSelectBox.parent().parent().query(".npay_selectbox")).removeClass("disabled") : $Element(welSelectBox.parent().parent().query(".npay_selectbox")).addClass("disabled");

		if (bNeedInitialization != undefined && bNeedInitialization) {
			welSelectBox.attr("value", "01");
			$Element(welSelectBox.parent().query("._installmentText")).html("일시불");
		}
	},
	_initInstallmentBox : function(oSelectBox) {
		oSelectBox.setValue("01");
		return oSelectBox;
	},
	formatCardNumber : function(sCardNumber) {
		if (sCardNumber == undefined || sCardNumber == "") {
			return sCardNumber;
		}

		var aSplittedCardNumbers = [];
		var sCleanedCardNumber = sCardNumber.replace(/[-_\s]/g, "");
		for (var i = 0; i < (sCleanedCardNumber.length / 4); i++) {
			aSplittedCardNumbers.push(sCleanedCardNumber.substring(i * 4, Math.min(sCleanedCardNumber.length, (i + 1) * 4)));
		}
		return aSplittedCardNumbers;
	},
	"":""
}, true);