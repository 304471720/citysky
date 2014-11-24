define(function(require, exports, module) {
	
    /**
     * 字符串转DOM对象
     */
    exports.parseDom = function(str) {
		var obj = document.createElement("div");
		obj.innerHTML = str;
		return obj.childNodes;
	};
});



