(function(){"use strict";var n={1741:function(n,t,e){var o=e(6848),r=function(){var n=this,t=n._self._c;return t("div",{attrs:{id:"app"}},[t("HelloWorld")],1)},i=[],u=function(){var n=this,t=n._self._c;return t("div",[t("div",{ref:"webgl",attrs:{id:"webgl"}})])},c=[],a=e(8776),f=e(890),l=e(2951),s={mounted(){const n=new a.Z58;n.background=new a.Q1f("#FFC0CB");const t=new a.iNn(100,100,100),o=new a.Tap,r=o.load(e(8067)),i=new a.fTw(300,25,17476,17476),u=new a.V9B({map:r,side:a.$EB});n.add(i);const c=new a.eaF(t,u);n.add(c);const s=new f.cL;s.close(),s.add(c.rotation,"x",0,180),s.add(c.rotation,"y",0,180),s.add(c.rotation,"z",0,180);const d=new a.IzY(50);c.add(d);const p=window.innerWidth,w=window.innerHeight,v=new a.ubm(30,p/w,1,3e3);v.position.set(292,223,185),v.lookAt(0,0,0);const h=new a.JeP({antialias:!0});h.setSize(p,w),this.$refs.webgl.appendChild(h.domElement);const b=new l.N(v,h.domElement);function m(){v.lookAt(c.position),h.render(n,v),b.update(),requestAnimationFrame(m)}b.enableDamping=!0,m()}},d=s,p=e(1656),w=(0,p.A)(d,u,c,!1,null,"27cc4083",null),v=w.exports,h={name:"App",components:{HelloWorld:v}},b=h,m=(0,p.A)(b,r,i,!1,null,null,null),g=m.exports;o.Ay.config.productionTip=!1,new o.Ay({render:n=>n(g)}).$mount("#app")},8067:function(n,t,e){n.exports=e.p+"img/456.cdcabe01.jpg"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var u=1/0;for(l=0;l<n.length;l++){o=n[l][0],r=n[l][1],i=n[l][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[a])}))?o.splice(a--,1):(c=!1,i<u&&(u=i));if(c){n.splice(l--,1);var f=r();void 0!==f&&(t=f)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[o,r,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.p=""}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,u=o[0],c=o[1],a=o[2],f=0;if(u.some((function(t){return 0!==n[t]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(a)var l=a(e)}for(t&&t(o);f<u.length;f++)i=u[f],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(l)},o=self["webpackChunkshop"]=self["webpackChunkshop"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(1741)}));o=e.O(o)})();
//# sourceMappingURL=app.b468d638.js.map