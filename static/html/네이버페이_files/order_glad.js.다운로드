nmp.createModule("nmp.front.order.order_glad", {
    _htInstance : {},
    _htElementSelector : {
        "root" : "body"
    },
    initialize : function(){
        this._htInstance["spwp"] = this._getOption("spwp");
        this._initializeGlad(this._getOption("gfdUrl"), this._getOption("divId"), this._getOption("unitId"));
    },
    _initializeGlad : function(gfdUrl, divId, unitId) {
        if (divId && unitId) {
            // gfd(구매자프로파일) 정보연동
            if (gfdUrl) {
                nmp.requestAjax(gfdUrl, {}, {
                    method : "get",
                    withCredentials : true, /* withCredentials : true 인증을 위해 cookie를 포함하여 전송 */
                    onload : $Fn(function(htResult, htResponse) {
                        if (htResult && htResult.data) {
                            this._showGlad(divId, unitId, htResult.data);
                        } else {
                            this._showGlad(divId, unitId);
                        }
                    }, this).bind(),
                    onerror : $Fn(function() {
                        this._showGlad(divId, unitId);
                    }, this).bind()
                });
            } else {
                this._showGlad(divId, unitId);
            }
        }
    },
    _showGlad : function(divId, unitId, mediaParams) {
        /* 광고관련 코드 시작 */
        var spwp = this._htInstance["spwp"];

        if (spwp) {
            if (spwp && spwp.polyfill && spwp.polyfill.support()) {
                spwp.polyfill.load();
            }
            spwp = spwp || {};
            spwp.cmd = spwp.cmd || [];
            spwp.cmd.push(function () {
                spwp.setConfig({
                    enablePersistAd: false
                });
                var adUnits = [];

                if (typeof unitId === "string") {
                    adUnits = [{
                        unitId: unitId,
                        divId: divId
                    }];
                    if (mediaParams) {
                        var extraOption = {
                            "mediaParams" : mediaParams
                        };
                        adUnits[0]["extraOption"] = extraOption;
                    }
                } else {
                    var waAdUnits = $A();
                    var extraOption = {
                        "mediaParams" : mediaParams
                    };
                    $A(unitId).forEach(function(v, i, o) {
                        if (mediaParams) {
                            waAdUnits.push({"unitId": unitId[i], "divId": divId[i], "extraOption": extraOption});
                        } else {
                            waAdUnits.push({"unitId": unitId[i], "divId": divId[i]});
                        }
                    });
                    adUnits = waAdUnits.$value();
                }

                var eventList = {};
                // 광고 로드 이벤트 핸들러
                eventList[spwp.GfpAdEvent.Type.AD_LOAD] = function (adEvent) {

                };
                // 광고 로드 실패 이벤트 핸들러
                var aPayPcUnitIds = ["p_pay_dicon_point", "p_pay_main", "p_pay_top", "p_pay_detail"];
                eventList[spwp.GfpAdErrorEvent.Type.AD_LOAD_FAILED] = function (adErrorEvent) {
                    var elTarget = document.getElementById(adErrorEvent.divId);
                    if(elTarget && aPayPcUnitIds.indexOf(adErrorEvent.unitId) > -1) {
                        elTarget.parentElement.style.display = "none";
                    }
                };

                spwp.addAdUnits(adUnits);
                spwp.setAdListener({ eventList: eventList });
                spwp.requestAds({ adUnitIds: (typeof unitId === "string" ? [unitId] : unitId) });
            });
            spwp.cmd.push(function () {
                if (typeof unitId === "string") {
                    spwp.renderAd(divId);
                } else {
                    var aDivIds = {"divIds": divId};
                    spwp.renderAds(aDivIds);
                }
            });
        }
        /* 광고관련 코드 끝 */
    },
    "":""
});
