sap.ui.jsview("samsung.testview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf samsung.testview
	*/ 
	getControllerName : function() {
		return "samsung.testview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf samsung.testview
	*/ 
	createContent : function(oController) {
		
		if (!Array.prototype.filter1) {
			  Array.prototype.filter1 = function(fun/*, thisArg*/) {
			    'use strict';

			    if (this === void 0 || this === null) {
			      throw new TypeError();
			    }

			    var t = Object(this);
			    var len = t.length >>> 0;
			    if (typeof fun !== 'function') {
			      throw new TypeError();
			    }

			    var res = [];
			    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			    for (var i = 0; i < len; i++) {
			      if (i in t) {
			        var val = t[i];

			        // NOTE: Technically this should Object.defineProperty at
			        //       the next index, as push can be affected by
			        //       properties on Object.prototype and Array.prototype.
			        //       But that method's new, and collisions should be
			        //       rare, so use the more-compatible alternative.
			        if (fun.call(thisArg, val, i, t)) {
			          res.push(val);
			        }
			      }
			    }

			    return res;
			  };
			}
		
		
		var tf = new sap.ui.commons.TextArea({
			value : "FFFF",
			width : "300px",
			rows : 10,
		});
		
		var oModel = [
		     {"a" : "aaa1", "b" : "aaa2", "c" : "ccc3"},
		     {"a" : "aaa1", "b" : "bbb2", "c" : "ccc3"},
		     {"a" : "ccc1", "b" : "bbb2", "c" : "ccc3"}
		];
		
		console.log(oModel);
		
		var aaa = "aaa1";
		var bbb = "bbb2";
		var ccc = "ccc3";
		
		var mArr = oModel.filter1(function (el) {
			console.log(el);
			if(aaa == "all"){
				
			}	
			return el.a == aaa && el.b == bbb && el.c == ccc;
		});
		
		console.log("mArr",mArr);
		
		tf.setValue(mArr);
		
		
		return tf;
	}

});
