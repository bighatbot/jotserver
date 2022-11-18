/**
 * @fileOverview DataRequester
 * @author 박종욱
 */
nmp.component.DataRequester = jindo.$Class(/** @lends nmp.component.DataRequester.prototype */{
	_htInstance : null,
	_htPrevParam : null,
	_htEventHandler : null,
	SORTING : "SORTING",
	PAGING : "PAGING",
	SIZE : "SIZE",
	REFRESH : "REFRESH",

	/**
	 * @class 데이터 리퀘스터
	 * @constructs
	 * @param htOption
	 */
	$init : function(htOption){
		this.option({
			"bLoginCheck" : false,
			"htPagination" : null,
			"htPrevNext" : null,
			"fRenderer" : null,
			"elForm" : null,
			"sApiUrl" : null,
			"sRequestMethod" : null,
			"bInitialRequest" : true, // 첫 페이지는 ajax호출 안 되게
			"htFieldName" : {
				"requestSortField" : "page.sort",
				"requestSortDirection" : "page.sort.dir",
				"requestPage" : "page.page",
				"requestItemCount" : "page.size",
				"responseItemCount" : "size",
				"responseTotalCount" : "totalElements",
				"responsePage" : "number",
				"responseData" : "content"
			}
		});
		this.option(htOption||{});
		this._htInstance = {};

		this.setForm(this.option("elForm"));
		this._createAjaxHistory();
		this._createPagination();
		this._createPrevNext();
		this.setRenderer(this.option("fRenderer"));

		this._htPrevParam = this.option("htInitParam") || this._getDataRequesterData() || {};
	},

	_createAjaxHistory : function(){
		if(this.option("htAjaxHistory")){
			nmp.checkClass("jindo.AjaxHistory");
			this._htInstance["ajax_history"] = new jindo.AjaxHistory({
				"sIFrameUrl" : this.option("htAjaxHistory").sIFrameUrl
			}).attach({
				"load" : jindo.$Fn(this._onLoadPage, this).bind(),
				"change" : jindo.$Fn(this._onLocationChange, this).bind()
			}).initialize();
		}
	},

	_onLoadPage : function(weLoad){
		var bResult = true;
		if(this.option("htAjaxHistory").fLoadCallback){
			bResult = this.option("htAjaxHistory").fLoadCallback();
			bResult = typeof(bResult) == "boolean" && bResult === false ? false : true;
		}

		if(bResult && this.option("htAjaxHistory").bAutoRequest && this.option("bInitialRequest")){
			this.request();
		}
		if(this.option("htAjaxHistory") && !this.option("bInitialRequest")) {
			this._htInstance["ajax_history"].addHistory(this._htPrevParam);
		}
	},

	_onLocationChange : function(weChange){
		var bResult = true;
		if(this.option("htAjaxHistory").fChangeCallback){
			bResult = this.option("htAjaxHistory").fChangeCallback(weChange.htHistoryData);
			bResult = typeof(bResult) == "boolean" && bResult === false ? false : true;
		}

		if(bResult && this.option("htAjaxHistory").bAutoRequest){
			if(jindo.$H(weChange.htHistoryData).length()){
				this.request(weChange.htHistoryData, "", true);
			}else{
				history.back();
			}
		}
	},

	/**
	 * 서브밋 이벤트 핸들러
	 * @param weSubmit
	 */
	_onSubmit : function(weSubmit){
		if(weSubmit){weSubmit.stop();}
		this.request();
	},

	/**
	 * Data 반환
	 */
	_getDataRequesterData : function(){
		var elForm = this.option("elForm"),
			htFieldName = this.option("htFieldName"),
			htParam = {};

		if(elForm){ // Form 데이터 추가
			htParam = jindo.$S(jindo.$Form(elForm).serialize()).parseString();
		}

		if(this._htInstance["pagination"]){ // Pagination 데이터 추가
			htParam[htFieldName["requestPage"]] = htParam[htFieldName["requestPage"]] || 1;
			htParam[htFieldName["requestItemCount"]] = htParam[htFieldName["requestItemCount"]] || this.getItemPerPage();
		} else if (this.option("htPrevNext")) {
			htParam[htFieldName["requestPage"]] = this.option("htPrevNext").nPage || 1;
			htParam[htFieldName["requestItemCount"]] = htParam[htFieldName["requestItemCount"]] || this.option("htPrevNext").nItemPerPage;
		}
		return htParam;
	},

	/**
	 * Pagination 컴포넌트 생성
	 */
	_createPagination : function(){
		var htPagination = this.option("htPagination");

		if(!htPagination){return;}
		nmp.checkClass("jindo.Pagination");

		htPagination = nmp.utility.extend({
			"sInsertTextNode" : " ",
            "sClassPrefix" : "page-"
		}, htPagination);

		this._htInstance["pagination"] = new jindo.Pagination(htPagination["elRoot"], htPagination).attach({
			"beforeMove" : jindo.$Fn(this._onBeforeMove, this).bind()
		});

		nmp.utility.mergeComponentMethod(this, this._htInstance["pagination"]);
	},

	/**
	 * 이전/다음 버튼 생성
	 */
	_createPrevNext : function() {
		var htPrevNext = this.option("htPrevNext");
		if (!htPrevNext) {return;}
		htPrevNext.nLastPage = parseInt((htPrevNext.nItem / htPrevNext.nItemPerPage), 10) + 1;

		var sPrev = "<a href='#' title='이전' class='frst'><span class='blind'>이전</span></a>";
		var sNext = "<a href='#' title='다음' class='next'><span class='blind'>다음</span></a>";

		var welPrevNext = jindo.$Element(htPrevNext.elRoot)
		var welPrev = jindo.$Element(sPrev);
		var welNext = jindo.$Element(sNext);

		welPrevNext.append(welPrev);
		welPrevNext.append(welNext);

		jindo.$Fn(function(event) {
			htPrevNext.nPage -= 1;
			if (htPrevNext.nPage == 0) {
				htPrevNext.nPage = htPrevNext.nLastPage;
			}

			this._requestWithPageAndSize(htPrevNext.nPage, htPrevNext.nItemPerPage);
			event.stop();
		}, this).attach(welPrev, "click");
		jindo.$Fn(function(event) {
			htPrevNext.nPage += 1;
			if (htPrevNext.nPage > htPrevNext.nLastPage) {
				htPrevNext.nPage = 1;
			}

			this._requestWithPageAndSize(htPrevNext.nPage, htPrevNext.nItemPerPage);
			event.stop();
		}, this).attach(welNext, "click");
	},

	_requestWithPageAndSize : function(nPage, nItemPerPage) {
		var htFieldName = this.option("htFieldName"),
			htParam = this._htPrevParam;

		htParam[htFieldName["requestPage"]] = nPage;
		htParam[htFieldName["requestItemCount"]] = nItemPerPage;

		this.request(htParam, this.PAGING);
	},

	/**
	 * 페이지 이동전 처리
	 * @param oCustomEvent
	 */
	_onBeforeMove : function(oCustomEvent) {
		if(this.option("bLoginCheck")) {
			oCustomEvent.stop();
		}

		if(!this.fireEvent("beforeMove", oCustomEvent)){
			oCustomEvent.stop();
			return;
		}

		var htFieldName = this.option("htFieldName"),
			htParam = this._htPrevParam;

		htParam[htFieldName["requestPage"]] = oCustomEvent.nPage;
		htParam[htFieldName["requestItemCount"]] = this.getItemPerPage();

		if(!this.request(htParam, this.PAGING)) {
			oCustomEvent.stop();
		}
	},

	/**
	 * 리퀘스트 응답 핸들러
	 * @param htResult
	 */
	_onRespose : function(sRequestType, htResult){
		if (!htResult.bSuccess) {
			this.fireEvent("responseFail", htResult);
			return;
		}
		if(!this.fireEvent("responseSuccess", htResult)){return;}
		this.renderPagedResult((htResult.htReturnValue.pagedResult || htResult.htReturnValue), sRequestType);
	},

	/**
	 * 리퀘스트주소 반환
	 */
	_getRequestUrl : function(){
		return this.option("sApiUrl") || this.option("elForm")["action"];
	},

	setApiUrl : function(sApiUrl){
		this.option("sApiUrl", sApiUrl);
		return this;
	},

	/**
	 * 리퀘스트메소드반환
	 */
	_getRequestMethod : function(){
		return this.option("sRequestMethod") || this.option("elForm")["method"] || "post";
	},

	/**
	 * 리퀘스트 요청
	 * @param {HashTable} htParam
	 * @param {String} sRequestType
	 */
	request : function(htParam, sRequestType){
		var htParameter = htParam || this._getDataRequesterData() || {},
			oCustomEvent = {
				htParameter : htParameter,
				sRequestType : sRequestType
			};

		if(!this.fireEvent("beforeRequest", oCustomEvent)){
			return false;
		}

		if(this.option("bLoginCheck")) {
			nmp.requestLoginCheck({
				"onLoginSuccess" : jindo.$Fn(this.request, this).bind(htParam, sRequestType),
				"onShowLayer" : jindo.$Fn(this.fireEvent, this).bind("cancelRequest"),
				"onload" : jindo.$Fn(this._requestAjax, this).bind(oCustomEvent)
			});
		} else {
			this._requestAjax(oCustomEvent);
		}

		return true;
	},

	_requestAjax : function(oCustomEvent) {
		nmp.requestAjax(this._getRequestUrl(), oCustomEvent.htParameter, {
			method : this._getRequestMethod(),
			onload : jindo.$Fn(this._onRespose, this).bind(oCustomEvent.sRequestType),
			bNotUseErrorAlert : this.option("bNotUseErrorAlert") || false
		});
		this._htPrevParam = oCustomEvent.htParameter;
	},

	/**
	 * 요청 했던 파라미터 객체를 반환한다.
	 * @returns {HashTable}
	 */
	getRequestedParameter : function(){
		return nmp.utility.cloningObject(this._htPrevParam) || {};
	},

	/**
	 * 페이지 결과 렌더링한다.
	 * @param {HashTable} htPagedResult
	 * @param {boolean} sRequestType
	 */
	renderPagedResult : function(htPagedResult, sRequestType){
		if(!this.fireEvent("beforeRender", {
			"htPagedResult" : htPagedResult,
			"sRequestType" : sRequestType
		})){return;}

		this.renderPagination(htPagedResult);
		this.renderPrevNext(htPagedResult);
		if(typeof this._fRenderCallback == "function"){
			this._fRenderCallback(htPagedResult[this.option("htFieldName")["responseData"]]);
			this.fireEvent("afterRender", htPagedResult[this.option("htFieldName")["responseData"]]);
		}

        if(this.option("htAjaxHistory")){
			this._htInstance["ajax_history"].addHistory(this._htPrevParam);
		}
    },

	/**
	 * 페이지 영역을 렌더링한다.
	 * @param {HashTable} htPagedResult
	 */
	renderPagination : function(htPagedResult){
		if(!this._htInstance["pagination"]){return;}

		var htFieldName = this.option("htFieldName");

		this.setItemPerPage(htPagedResult[htFieldName["responseItemCount"]]);
		this.setItemCount(htPagedResult[htFieldName["responseTotalCount"]]);
		this.movePageTo(htPagedResult[htFieldName["responsePage"]], false);
	},

	/**
	 * 이전/다음 버튼 사용시 페이지 정보 업데이트
	 * @param {HashTable} htPagedResult
	 */
	renderPrevNext : function(htPagedResult){
		var htPrevNext = this.option("htPrevNext");
		if (!htPrevNext) {return;}

		var htFieldName = this.option("htFieldName");

		htPrevNext.nItemPerPage = (htPagedResult[htFieldName["responseItemCount"]]);
		htPrevNext.nItem = (htPagedResult[htFieldName["responseTotalCount"]]);
		htPrevNext.nPage = htPagedResult[htFieldName["responsePage"]];
		htPrevNext.nLastPage = parseInt((htPrevNext.nItem / htPrevNext.nItemPerPage), 10) + 1;
	},

	/**
	 * Form Element를 설정한다.
	 * @param {HTMLElement} elForm
	 */
	setForm : function(elForm){
		if(!elForm){return this;}

		if(this._htEventHandler["submit"]){this._detachEventHandler(this._htEventHandler["submit"]);}
		this._htEventHandler["submit"] = this._attachEventHandler(elForm, "submit", jindo.$Fn(this._onSubmit, this).bind());

		nmp.utility.createSubmitButton(elForm);

		this.option("elForm", elForm);

		return this;
	},

	/**
	 * Form Element 반환한다.
	 * @return {HTMLElement}
	 */
	getForm : function(){
		return this.option("elForm");
	},

	/**
	 * Renderer를 설정한다.
	 * @param {Function} fRenderCallback 렌더링 콜백
	 */
	setRenderer : function(fRenderCallback){
		if(typeof fRenderCallback != "function"){return;}
		this._fRenderCallback = fRenderCallback;
	},

	/**
	 * 정렬 조건으로 리퀘스트한다.
	 * @param {String} sDirection 정렬방향
	 * @param {String} sFieldName 정렬필드명
	 */
	requestWithSort : function(sDirection, sFieldName){
		var htParam = this._htPrevParam,
			htFieldName = this.option("htFieldName");

		htParam[htFieldName["requestSortDirection"]] = sDirection;
		htParam[htFieldName["requestSortField"]] = sFieldName;

		this.request(htParam, this.SORTING);
	},

	isLastRequestWithSort : function(){
		var htParam = this._htPrevParam,
			htFieldName = this.option("htFieldName");

		return (htParam[htFieldName["requestSortDirection"]] && htParam[htFieldName["requestSortField"]]);
	},

	/**
	 * 마지막 파라미터로 새로 고침
	 */
	refresh : function(){
		this.request(this._htPrevParam, this.REFRESH);
	},

	/**
	 * 페이징 사이즈 변경후 리퀘스트한다.
	 * @param {Number} nSize 페이징 사이즈
	 */
	changePagingSizeAndRequest : function(nSize){
		var htFieldName = this.option("htFieldName"),
			htParam = this._htPrevParam;

		htParam[htFieldName["requestPage"]] = 1;
		htParam[htFieldName["requestItemCount"]] = nSize;

		this.request(htParam, this.SIZE);
	},

    getDataRequesterData : function(){
        return this._getDataRequesterData();
    }
}).extend(nmp.component.Base);