// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/html dojo/query dojo/on dojo/keys dojo/_base/array jimu/utils".split(" "),function(f,c,d,g,h,e,b){return{a11y_initGalleryNodesAttrs:function(){var a=d(".esriBasemapGalleryNode",this.domNode);a.length&&(e.forEach(a,function(a){var b=d("a",a)[0];c.setAttr(b,"tabindex","-1");var e=d("span",a)[0];c.setAttr(a,"aria-label",e.innerHTML);c.setAttr(a,"tabindex","0");c.setAttr(a,"role","link");g(a,"keydown",f.hitch(this,function(a){a.keyCode===h.ENTER&&b.click()}))}),b.initFirstFocusNode(this.domNode,
a[0]),b.initLastFocusNode(this.domNode,a[a.length-1]),this.openAtStartAysn=!0,b.isAutoFocusFirstNodeWidget(this)&&a[0].focus())}}});