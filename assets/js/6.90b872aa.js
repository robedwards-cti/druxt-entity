(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{300:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return o}))},301:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},302:function(t,e,n){var r=n(20),i="["+n(301)+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},303:function(t,e,n){var r=n(5),i=n(152);t.exports=function(t,e,n){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},304:function(t,e,n){"use strict";var r=n(7),i=n(3),o=n(91),a=n(15),u=n(6),c=n(22),s=n(303),p=n(43),f=n(4),l=n(44),b=n(61).f,d=n(21).f,g=n(8).f,v=n(302).trim,m=i.Number,y=m.prototype,h="Number"==c(l(y)),O=function(t){var e,n,r,i,o,a,u,c,s=p(t,!1);if("string"==typeof s&&s.length>2)if(43===(e=(s=v(s)).charCodeAt(0))||45===e){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+s}for(a=(o=s.slice(2)).length,u=0;u<a;u++)if((c=o.charCodeAt(u))<48||c>i)return NaN;return parseInt(o,r)}return+s};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var N,j=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof j&&(h?f((function(){y.valueOf.call(n)})):"Number"!=c(n))?s(new m(O(e)),n,j):O(e)},x=r?b(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;x.length>_;_++)u(m,N=x[_])&&!u(j,N)&&g(j,N,d(m,N));j.prototype=y,y.constructor=j,a(i,"Number",j)}},305:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(304);var r=n(300),i={mixins:[{props:{context:{type:Object,default:function(){return Object(r.a)({},this.$parent.context)}}}}],props:{errors:{type:Array,default:function(){return[]}},inner:{type:Object,default:function(){return{component:"div",props:{}}}},items:{type:[Array,Boolean],required:!0},relationship:{type:Boolean,default:!1},schema:{type:Object,required:!0},value:{type:[Array,Boolean,Number,String,Object],default:void 0},wrapper:{type:Object,default:function(){return{component:"div",props:{}}}}},data:function(t){return{model:t.value}}}},317:function(t,e,n){"use strict";var r=n(1),i=n(318);r({target:"String",proto:!0,forced:n(319)("link")},{link:function(t){return i(this,"a","href",t)}})},318:function(t,e,n){var r=n(20),i=/"/g;t.exports=function(t,e,n,o){var a=String(r(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),u+">"+a+"</"+e+">"}},319:function(t,e,n){var r=n(4);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},321:function(t,e,n){"use strict";var r=n(1),i=n(29).find,o=n(96),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},427:function(t,e,n){"use strict";n.r(e);var r=n(300),i=n(45),o=(n(92),n(321),n(93),n(155),n(317),n(23),n(24),n(305)),a=n(307),u={name:"DruxtFieldEntityReferenceLabel",mixins:[o.a],fetch:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(t.items);case 1:if((e.t1=e.t0()).done){e.next=12;break}return n=e.t1.value,r=t.items[n],e.next=6,t.getResource({id:r.uuid,type:r.type});case 6:i=e.sent,t.entities||(t.entities=[]),t.entities[n]={props:!1,text:i.data.attributes[Object.keys(i.data.attributes).find((function(t){return["name","title"].includes(t)}))]},((t.schema.settings||{}).display||{}).link&&i.data.attributes.path.alias&&(t.component="nuxt-link",t.entities[n].props={to:i.data.attributes.path.alias}),e.next=1;break;case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{component:"span",entities:!1,loading:!1}},methods:Object(r.a)({},Object(a.a)({getResource:"druxt/getResource"}))},c=n(42),s=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?t._e():n(t.wrapper.component,t._b({tag:"component"},"component",t.wrapper.props,!1),[t.$slots["label-above"]?n("div",[t._t("label-above")],2):t._e(),t._v(" "),t.$slots["label-inline"]?t._t("label-inline"):t._e(),t._v(" "),t._l(t.entities,(function(e,r){return n(t.component,t._b({key:r,tag:"component"},"component",e.props||!1,!1),[t._v("\n    "+t._s(e.text)+"\n  ")])}))],2)}),[],!1,null,null,null);e.default=s.exports}}]);