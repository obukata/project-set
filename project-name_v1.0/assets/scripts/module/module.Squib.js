'use strict';

!function(){
	window.Squib = Squib;

	function Squib(obj){
		var keys = Object.keys(obj);
		if(!keys.length) return "";

		return "?" + keys.map(function(key){
			return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
		}).join("&");
	}
}();
