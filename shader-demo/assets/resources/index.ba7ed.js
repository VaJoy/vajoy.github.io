System.register("chunks:///_virtual/BackBtnComp.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,e,c,r,s;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,c=t.Node,r=t.director,s=t.Component}],execute:function(){var i;o._RF.push({},"f308at8CpZAj44L0Y2qzb4S","BackBtnComp",void 0);var p=e.ccclass;e.property,t("BackBtnComp",p("BackBtnComp")(i=function(t){function o(){return t.apply(this,arguments)||this}return n(o,t),o.prototype.start=function(){this.node.on(c.EventType.TOUCH_END,(function(){r.loadScene("db://assets/home")}),this)},o}(s))||i);o._RF.pop()}}}));

System.register("chunks:///_virtual/config.ts",["cc"],(function(e){var s;return{setters:[function(e){s=e.cclegacy}],execute:function(){s._RF.push({},"b987ckOLdlDN45YtX9tUpvi","config",void 0);e("version","1.0.0"),e("demoList",[{scene:"assets/demo/1-dye/scene.scene",desc:"节点染色"},{scene:"assets/demo/2-texture-sampling/1-mix/scene-mix.scene",desc:"纹理采样与染色"},{scene:"assets/demo/2-texture-sampling/2-flash/scene-flash.scene",desc:"角色受击闪白"},{scene:"assets/demo/3-chromakey/scene.scene",desc:"抠除绿幕背景"},{scene:"assets/demo/4-filters/scene.scene",desc:"滤镜"},{scene:"assets/demo/5-mix-blend-mode/scene.scene",desc:"15种图层混合样式"},{scene:"assets/demo/6-glow/scene.scene",desc:"描边和发光"}]);s._RF.pop()}}}));

System.register("chunks:///_virtual/DemoComp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./util.ts"],(function(e){var t,o,n,r,i,s,c,p,u,a;return{setters:[function(e){t=e.inheritsLoose},function(e){o=e.cclegacy,n=e._decorator,r=e.Label,i=e.Sprite,s=e.resources,c=e.SpriteFrame,p=e.Node,u=e.Component},function(e){a=e.toggleScene}],execute:function(){var m;o._RF.push({},"f227fmhf99CUKQtAVJHRAZ/","DemoComp",void 0);var l=n.ccclass;n.property,e("DemoComp",l("DemoComp")(m=function(e){function o(){return e.apply(this,arguments)||this}t(o,e);var n=o.prototype;return n.start=function(){},n.init=function(e){this.node.getChildByName("Title").getComponent(r).string=e.desc;var t=this.node.getChildByName("Cover").getComponent(i);s.load(e.coverPath+"/spriteFrame",c,(function(e,o){e?console.error(e):t.spriteFrame=o})),this.node.on(p.EventType.TOUCH_END,(function(){a(e)}),this)},o}(u))||m);o._RF.pop()}}}));

System.register("chunks:///_virtual/HomeComp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./util.ts","./config.ts","./DemoComp.ts"],(function(t){var e,n,o,i,r,a,s,c,l,u,p,f,v,m,h,y,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Prefab,c=t.find,l=t.Label,u=t.Node,p=t.instantiate,f=t.Component},function(t){v=t.getConfigList,m=t.toggleScene},function(t){h=t.version,y=t.demoList},function(t){d=t.DemoComp}],execute:function(){var C,g,L,b,B;r._RF.push({},"a7cc8LWO6JPLaUb6sAEZBo2","HomeComp",void 0);var T=a.ccclass,P=a.property;t("HomeComp",(C=T("HomeComp"),g=P({type:s}),C((B=e((b=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,o(e,"demoPrefab",B,i(e)),e.layout=null,e.revBtn=null,e.sortType=0,e}n(e,t);var r=e.prototype;return r.start=function(){this.layout=c("Canvas/ScrollView/view/Layout"),this.revBtn=c("Canvas/RevBtn"),c("Canvas/Title").getComponent(l).string="选择案例（v"+h+"，共"+y.length+"个）：",this.initList(),this.initRevBtn(),this.preloadScene()},r.initRevBtn=function(){var t=this;this.revBtn.on(u.EventType.TOUCH_END,(function(){t.sortType=0===t.sortType?1:0,t.revBtn.getChildByName("Label").getComponent(l).string=0===t.sortType?"倒序":"正序",t.initList()}))},r.initList=function(){var t=this,e=v().concat();1===this.sortType&&e.reverse(),this.layout.removeAllChildren(),e.forEach((function(e){var n=p(t.demoPrefab);n.getComponent(d).init(e),t.layout.addChild(n)}))},r.preloadScene=function(){v().concat().forEach((function(t){m(t,!0)}))},e}(f)).prototype,"demoPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=b))||L));r._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./BackBtnComp.ts","./DemoComp.ts","./HomeComp.ts","./config.ts","./util.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/util.ts",["cc","./config.ts"],(function(e){var n,t,c,r;return{setters:[function(e){n=e.cclegacy,t=e.assetManager,c=e.director},function(e){r=e.demoList}],execute:function(){n._RF.push({},"18c32H+ArlFopsdpmPGZqvW","util",void 0);e("getConfigList",(function(){var e=[];return r.forEach((function(n,t){var c=n.scene.match(/assets\/(.*?)\/(.*)\.scene/);e.push({coverPath:"img/covers/"+(t+1),bundle:c[1],scenePath:c[2],dirPath:c[1]+"/"+c[2],desc:n.desc})})),e})),e("toggleScene",(function(e,n){void 0===n&&(n=!1),t.loadBundle(e.bundle,(function(t,r){if(t)return console.error(t);r.loadScene(e.scenePath,(function(e,t){if(e)return console.error(e);n||c.runScene(t)}))}))}));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
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