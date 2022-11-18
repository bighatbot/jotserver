nmp.createModule("nmp.message", {
    _fnSet : {},
    _defaultFn : null,
    _isExceptTopicMessage : true,
    initialize : function () {
        this._ready();
    },

    _ready : function () {
        var that = this;
        var listener = function (event) {
            var domainRegex = /.*\.naver\.com/;
            if (!domainRegex.test(event.origin)) {
                return;
            }
            if (event.data && event.data.type && that._fnSet[event.data.type]) {
                that._fnSet[event.data.type](event);
            } else if (that._isExceptTopicMessage && that._defaultFn) {
                that._defaultFn(event);
            }
            if (!that._isExceptTopicMessage && that._defaultFn) {
                that._defaultFn(event);
            }
        }
        window.addEventListener("message", listener);
    },

    /**
     * @param param.windowTarget
     * @param param.type
     * @param param.content
     * @param param.targetOrigin
     * @param param.isSuccess
     */
    send : function (param) {
        if (!param || !param.windowTarget || !param.type || !param.content) {
            return;
        }
        param.targetOrigin = param.targetOrigin || "*";
        param.targetOrigin = Array.isArray(param.targetOrigin) ? param.targetOrigin : [param.targetOrigin];

        if (param.windowTarget.postMessage) {
            param.targetOrigin.map(function (targetOrigin) {
                param.windowTarget.postMessage({
                    "type": param.type,
                    "content": param.content,
                    "isSuccess": param.isSuccess || true
                }, targetOrigin)
            })
        }
    },

    receive : function (topic, fn) {
        if (typeof fn != "function") {
            throw Error('두 번째 인자가 함수가 아닙니다.');
        }
        if (!this._fnSet[topic]) {
            this._fnSet[topic] = fn;
        } else {
            throw Error(topic + '은 이미 정의가 완료된 topic 입니다.');
        }
    },

    /**
     * 토픽으로 나눠서 받는 메세지 외에 전체 메세지를 받고 싶은 경우 사용한다.
     * @param fn
     * @param isExceptTopicMessage
     */
    listener : function (fn, isExceptTopicMessage) {
        if (this._defaultFn) {
            throw Error('listener는 이미 정의가 완료되었습니다.');
        }
        if (this._isBoolean(isExceptTopicMessage)) {
            this._isExceptTopicMessage = isExceptTopicMessage;
        }
        this._defaultFn = fn;
    },
    _isBoolean : function (val) {
        return val === false || val === true;
    },
    "" : ""
}, {
    "bNotUseElementSelector" : true,
    "bAutoInitialize" : true
});