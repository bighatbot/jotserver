if(typeof layout == 'undefined'){
	layout = {};
}

layout.gnb = {
	initialize : function() {
		$Fn(layout.gnb.gnbLayerClose).attach(document, 'click');		
	},
	
	gnbLayerClose : function(e) {
		var target = $Element(e.$value().srcElement ? e.$value().srcElement : e.$value().target);
		
		if ($Element('gnb_service_lyr').visible() || $Element('gnb_notice_lyr').visible() || $Element('gnb_my_lyr').visible()) {
			if (target && !target.isChildOf('gnb')) {
				gnbAllLayerClose();
			}
		}
	}	
	
};

layout.gnb.initialize();

getGNB('gnb_area');