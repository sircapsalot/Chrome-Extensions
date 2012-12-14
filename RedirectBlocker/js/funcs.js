var sca = sca || {
	init : function() {
		$(sca.links).each(function() {
			sca.replaceHref(this);
		});
		return this;
	},

	links : "a",
	
	getHref : function(link) {
		return $(link).attr("href");
	},

	getText : function(link) {
		return $(link).text();
	},

	replaceHref : function(link) {
		var text = sca.getText(link);

		if (text.substring(0, 7) == ("http://"))
			$(link).attr("href", text);
	}
};

window.sca = sca.init();