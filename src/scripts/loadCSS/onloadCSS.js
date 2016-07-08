/**
 *  onloadCSS.js
 *  ============
 *  Adds onload support for asynchronous stylesheets loaded with loadCSS.
 *
 */

(function(){
  'use strict';

  module.exports = function onloadCSS(n, a) {
    function t() {
      !d && a && (d = !0, a.call(n));
    }
    var d;
    n.addEventListener && n.addEventListener("load", t), n.attachEvent && n.attachEvent("onload", t), "isApplicationInstalled" in navigator && "onloadcssdefined" in n && n.onloadcssdefined(t);
  };

})();
