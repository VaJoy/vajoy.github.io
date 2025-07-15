System.register("chunks:///_virtual/BlendComp.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,n,r,s;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,r=t.Sprite,s=t.Component}],execute:function(){var i;o._RF.push({},"0173ez3r71CJphqfh/z42RZ","BlendComp",void 0);var p=n.ccclass;n.property,t("BlendComp",p("BlendComp")(i=function(t){function o(){return t.apply(this,arguments)||this}return e(o,t),o.prototype.start=function(){var t=this.node.getComponent(r).material,e=this.node.worldPosition;console.log(e),t.setProperty("offsetX",e.x-96),t.setProperty("offsetY",720-e.y-96)},o}(s))||i);o._RF.pop()}}}));

System.register("chunks:///_virtual/BtnCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,a,r,s,i,c,h;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,a=t._decorator,r=t.find,s=t.Sprite,i=t.sp,c=t.Node,h=t.Component}],execute:function(){var o;n._RF.push({},"d5570h1bQxNva3EHE0SHyr7","BtnCtrl",void 0);var l=a.ccclass,u=(a.property,function(t){return t[t.none=0]="none",t[t.fadeIn=1]="fadeIn",t[t.fadeOut=2]="fadeOut",t}(u||{}));t("BtnCtrl",l("BtnCtrl")(o=function(t){function n(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).spriteMaterial=null,e.skeletonComp=null,e.flashAnimateState=u.none,e.curFlashPercent=0,e}e(n,t);var a=n.prototype;return a.start=function(){this.spriteMaterial=r("Canvas/SpriteNode").getComponent(s).sharedMaterial,this.skeletonComp=r("Canvas/SpineNode").getComponent(i.Skeleton)},a.update=function(t){this.flashAnimateState===u.fadeIn?this.curFlashPercent>=1?(this.flashAnimateState=u.fadeOut,this.curFlashPercent=1):(this.curFlashPercent=Math.min(this.curFlashPercent+5*t,1),this.changeFlashPercent(this.curFlashPercent)):this.flashAnimateState===u.fadeOut&&(this.curFlashPercent<=0?(this.flashAnimateState=u.none,this.curFlashPercent=0):(this.curFlashPercent=Math.max(this.curFlashPercent-5*t,0),this.changeFlashPercent(this.curFlashPercent)))},a.onLoad=function(){this.node.on(c.EventType.TOUCH_START,this.startAttack,this)},a.startAttack=function(){this.changeFlashPercent(0),this.flashAnimateState=u.fadeIn},a.changeFlashPercent=function(t){this.spriteMaterial.setProperty("mixPercent",t);var e=this.skeletonComp._materialCache;for(var n in e)e[n].setProperty("mixPercent",t)},n}(h))||o);n._RF.pop()}}}));

System.register("chunks:///_virtual/CanvasEntry.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,a,s;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,a=t._decorator,s=t.Component}],execute:function(){var o;e._RF.push({},"2f3f1s443JJmKPRJM7RLmM0","CanvasEntry",void 0);var r=a.ccclass;a.property,t("CanvasEntry",r("CanvasEntry")(o=function(t){function e(){for(var n,e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];return(n=t.call.apply(t,[this].concat(a))||this).BG=null,n.zoomState=0,n}n(e,t);var a=e.prototype;return a.start=function(){this.BG=this.node.getChildByName("BG")},a.update=function(t){var n=this.BG.scale.x;0===this.zoomState?n<2.5?this.scaleBG(n+.005):this.zoomState=1:n>2?this.scaleBG(n-.005):this.zoomState=0},a.scaleBG=function(t){this.BG.setScale(t,t)},e}(s))||o);e._RF.pop()}}}));

System.register("chunks:///_virtual/demo",["./BtnCtrl.ts","./BlendComp.ts","./CanvasEntry.ts","./DissolveComp.ts"],(function(){return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/DissolveComp.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(s){var e,o,t,i,r,l;return{setters:[function(s){e=s.inheritsLoose},function(s){o=s.cclegacy,t=s._decorator,i=s.Sprite,r=s.sp,l=s.Component}],execute:function(){var h;o._RF.push({},"07831zaAKNBAq/qUh1i4Lmw","DissolveComp",void 0);var n=t.ccclass;t.property,s("DissolveComp",n("DissolveComp")(h=function(s){function o(){for(var e,o=arguments.length,t=new Array(o),i=0;i<o;i++)t[i]=arguments[i];return(e=s.call.apply(s,[this].concat(t))||this).dissolveThreshold=0,e.spriteComp=void 0,e.spineComp=void 0,e}e(o,s);var t=o.prototype;return t.start=function(){this.spriteComp=this.getComponent(i),this.spineComp=this.getComponent(r.Skeleton)},t.update=function(s){var e;if(1!==this.dissolveThreshold)if(this.dissolveThreshold+=s/5,this.dissolveThreshold>1&&(this.dissolveThreshold=1),null!=(e=this.spriteComp)&&e.material)this.spriteComp.material.setProperty("dissolveThreshold",this.dissolveThreshold);else{var o=this.spineComp._materialCache;for(var t in o)o[t].setProperty("dissolveThreshold",this.dissolveThreshold)}},o}(l))||h);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/demo', 'chunks:///_virtual/demo'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});