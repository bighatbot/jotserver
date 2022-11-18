/**
 * @fileOverview ExtendGrid
 * @author 박종욱
 */
nmp.component.ExtendGrid = jindo.$Class(/** @lends nmp.component.ExtendGrid.prototype */{
	ASC : "ASC",
	DESC : "DESC",
	_htDefaultSortModel : null,

	/**
	 * @class ExtendGrid(Grid에 서버 연동 추가,페이징,정렬, AjaxHistory)
	 * @author 박종욱
	 * @constructs
	 * @param htOption
	 * @require nmp.component.Grid
	 */
	$init : function(htOption){
		this.option({
			"sTitleHtml" : '<span class="sort"><a href="#" class="_stopDefault">{=TITLE}</a> {=DIRECTION}</span>',
			"sAscHtml" : "<span class='direction up'></span>",
			"sDescHtml" : "<span class='direction down'></span>",
			"bFlatten" : false,
			"htDataRequester" : null,
            "bSort" : true
		});
		this.option(htOption||{});

		this._createDataRequester();
		this._extractSortModel(this.option("aColumnModel"));
		this.resetSortHeader();
	},

	_extractSortModel : function(aColumnModel){
        if (!this.option("bSort")) {
            return;
        }
		var htSortModel = {};
		for (var i = 0, nLen = aColumnModel.length; i < nLen; i++) {
			var htColumnModel = aColumnModel[i];
			// FIXME IE8  > aColumnModel 마지막값이 undefined로 나옴
			if(htColumnModel && htColumnModel.htSort){
				htSortModel[htColumnModel["sColumnName"]] = {
					"sRequestName" : htColumnModel.htSort["sRequestName"],
					"sDirection" : htColumnModel.htSort["sDirection"],
					"sTitle" : htColumnModel["sTitle"],
					"bDefault" : htColumnModel.htSort["bDefault"]
				};
			}
		}
		this._htDefaultSortModel = htSortModel;
	},

	/**
	 * DataRequester 생성
	 */
	_createDataRequester : function(){
		nmp.checkClass("nmp.component.DataRequester");
		var htDataRequester = this.option("htDataRequester");
		if(!htDataRequester){
			alert("DataRequester Option이 누락되었습니다.");
			return;
		}
		if(htDataRequester["fRenderer"]){
			alert("ExtendGrid 내부에서는 DataRequester fRenderer 옵션을 사용하지 않습니다.");
			return;
		}
		htDataRequester["fRenderer"] = jindo.$Fn(this._renderRowList, this).bind();
		this._htInstance["data_requester"] = new nmp.component.DataRequester(htDataRequester).attach({
			"beforeRender" : jindo.$Fn(this._onBeforeRender, this).bind(),
			"beforeRequest" : jindo.$Fn(this._onBeforeRequest, this).bind(),
			"responseFail" : jindo.$Fn(this._onResponseFail, this).bind(),
			"responseSuccess" : jindo.$Fn(this._onCustomEvent, this).bind(),
			"beforeMove" : jindo.$Fn(this._onCustomEvent, this).bind(),
			"afterRender" : jindo.$Fn(this._onCustomEvent, this).bind(),
			"cancelRequest" : jindo.$Fn(this.hideLoadingLayer, this).bind()
		});

		nmp.utility.mergeComponentMethod(this, this._htInstance["data_requester"]);
	},

	/**
	 * 커스톰 이벤트 전달
	 * @param oCustomEvent
	 */
	_onCustomEvent : function(oCustomEvent){
		if(!this.fireEvent(oCustomEvent.sType, oCustomEvent)){oCustomEvent.stop();}
	},

	_onBeforeRequest : function(weBeforeRequest){
		if(!this.fireEvent(weBeforeRequest.sType, weBeforeRequest)){
			weBeforeRequest.stop();
		}else{
			this.showLoadingLayer();
		}
	},

	_onResponseFail : function(weResponseFail){
		if(!this.fireEvent(weResponseFail.sType, weResponseFail)){
			weResponseFail.stop();
		}else{
			this.hideLoadingLayer();
		}
	},

	/**
	 * Sort Header 기본값으로 변경
	 * @param htSort
	 */
	_resetSortHeader : function(htSortModel, bDefault){
		for(var sColumnName in htSortModel){
			var htSort = htSortModel[sColumnName],
				sNewTitle = bDefault && htSort["bDefault"] ? this._getHeaderTitle(htSort["sTitle"], htSort["sDirection"]) : this._getHeaderTitle(htSort["sTitle"]);
			this.setHeaderColumnTitle(sColumnName, sNewTitle);
		}
	},

	/**
	 * Sort가 아닌 렌더링인 경우 SortHeader 초기화
	 * @param oCustomEvent
	 */
	_onBeforeRender : function(oCustomEvent){
		this._onCustomEvent(oCustomEvent);
		 // Sort가 아닌 요청 결과 렌더링의 경우

		if(!this._htInstance["data_requester"].isLastRequestWithSort()){
			this.resetSortHeader();
		}
	},

	/**
	 * 클릭 이벤트 처리
	 * - 헤더영역클릭 후 리퀘스트 전달
	 * @overide
	 * @param we
	 */
	_onClick : function(we){
		this.$super._onClick(we);
		var wel = jindo.$Element(jindo.$Element(we.element).query("!th"));
		if(!wel){return;} // header 영역만 클릭 되면 예외 처리 한다.
		var sColumnName = wel.attr("columnname"),
			htSort = this._htSortModel[sColumnName];
		if(!htSort){return;}
		htSort["sDirection"] = this._getReverseDirection(htSort["sDirection"]);
		this._resetSortHeader(this._htSortModel);
		this.setHeaderColumnTitle(sColumnName, this._getHeaderTitle(htSort["sTitle"], htSort["sDirection"]));
		this._htInstance["data_requester"].requestWithSort(htSort["sDirection"], htSort["sRequestName"]);
	},

	/**
	 * 헤더타이틀 반환
	 * @param sTitle
	 * @param sDirection
	 */
	_getHeaderTitle : function(sTitle, sDirection){
		if(typeof sDirection == "string"){
			sDirection = this.ASC == sDirection ? this.option("sAscHtml") : this.option("sDescHtml");
		}else{
			sDirection = "";
		}
		return jindo.$Template(this.option("sTitleHtml")).process({
			"TITLE" : sTitle,
			"DIRECTION" : sDirection
		});
	},

	/**
	 * 정렬 방향 변경
	 * @param sDirection
	 */
	_getReverseDirection : function(sDirection){
		return sDirection==this.ASC ? this.DESC : this.ASC;
	},

	/**
	 * DataRequester에 렌더링 콜백 메소드
	 * @param aRowList
	 */
	_renderRowList : function(aRowList){
		this.setRowList(aRowList, this.option("bFlatten"));
		this.setScrollBarPosition(0, 0);
	},

	/**
	 * 리드로우시 소팅 관련 초기화 추가
	 * @overide
	 */
	reDraw : function(aColumnModel, aRowList, bFlatten) {
		this.$super.reDraw(aColumnModel, aRowList, bFlatten);
		this._extractSortModel(aColumnModel);
		this.resetSortHeader();
	},

	/**
	 * 소팅헤더를 초기화한다.
	 */
	resetSortHeader : function(){
		if(!this._htDefaultSortModel){return this;}
		this._htSortModel = nmp.utility.cloningObject(this._htDefaultSortModel);
		this._resetSortHeader(this._htSortModel, true);
	}
}).extend(nmp.component.Grid);