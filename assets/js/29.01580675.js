(window.webpackJsonp=window.webpackJsonp||[]).push([[29,33],{311:function(e,t,r){"use strict";r.r(t);var n=r(65),a=r(28),s=r(316),i=r(300),o=r(45),u=(r(92),r(95),r(27),r(62),r(154),r(153),r(312),r(308),r(313)),c=r.n(u),d=r(314),p=r(310),m=r(307),f={name:"DruxtEntity",extends:p.c,props:{mode:{type:String,default:"default"},type:{type:String,required:!0},uuid:{type:[Boolean,String],default:!1},schemaType:{type:String,default:void 0}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,a,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSchema({resourceType:e.type,mode:e.mode,schemaType:e.schemaType||"view"});case 2:return e.schema=t.sent,r=e.getModuleComponents(),n={is:((r.filter((function(e){return e.global}))||[])[0]||{}).name||"DruxtWrapper",options:r.map((function(e){return e.name}))||[]},t.next=7,e.getWrapperData(n.is);case 7:if(a=t.sent,n.settings=c()((e.$druxtEntity||{}).options||{},a.druxt||{},{arrayMerge:function(e,t){return t}}),!e.uuid){t.next=15;break}return s=e.getQuery(n.settings),t.next=13,e.getResource({type:e.type,id:e.uuid,query:s});case 13:e.entity=t.sent.data,e.model=JSON.parse(JSON.stringify(e.entity||{}));case 15:n=Object(i.a)(Object(i.a)({},n),e.getModulePropsData(a.props)),e.component=n;case 17:case"end":return t.stop()}}),t)})))()},data:function(e){var t=e.type,r=e.value;return{entity:Object(i.a)({attributes:{},relationships:{},type:t},r),model:Object(i.a)({attributes:{},relationships:{},type:t},r),schema:null}},computed:{fields:function(){var e=this;if(!this.schema)return!1;var t,r=Object(i.a)(Object(i.a)({},this.model.attributes||{}),this.model.relationships||{}),n={},a=Object(s.a)(this.schema.fields);try{var o=function(){var a=t.value;if("form"!==e.schemaType&&e.isEmpty(r[a.id]))return"continue";n[a.id]={id:a.id,data:r[a.id],errors:(e.errors||[]).filter((function(e){return((e.source||{}).pointer||"").startsWith("/data/attributes/".concat(a.id))})),relationship:!!((a.settings||{}).storage||{}).target_type||!!(e.model.relationships||{})[a.id],schema:Object(i.a)({config:e.schema.config},a),value:r[a.id]}};for(a.s();!(t=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}return n}},methods:Object(i.a)({getQuery:function(e){var t=new d.DrupalJsonApiParams,r=(e.query||{}).schema?[].concat(Object(a.a)(this.schema.fields.map((function(e){return e.id}))),Object(a.a)((e.query||{}).fields||[])):(e.query||{}).fields||[];return!!r.length&&(t.addFields(this.type,r),t)},getScopedSlots:function(){var e=this,t={};return Object.entries(this.fields).map((function(r){var a=Object(n.a)(r,2),s=a[0],i=a[1];t[s]=function(t){return e.$createElement("DruxtField",{attrs:t,key:s,props:i,on:{input:function(t){var r=i.relationship?"relationships":"attributes";e.model[r][s]=t,e.$emit("input",e.model)}},ref:s})}})),t.default=function(r){return Object.entries(e.fields).map((function(e){var a=Object(n.a)(e,1)[0];return t[a](r)}))},t},isEmpty:function(e){return void 0===e||(!e||(!(!Array.isArray(e.data)||e.data.length)||void 0!==e.data&&!e.data))}},Object(m.a)({getResource:"druxt/getResource",getSchema:"druxtSchema/get"})),druxt:{componentOptions:function(e){var t=e.schema;return[[t.resourceType,t.config.mode,t.config.schemaType],[t.config.mode]]},propsData:function(e){var t=e.entity,r=e.fields,n=e.model;return{entity:t,fields:r,schema:e.schema,value:n}}}},l=r(42),h=Object(l.a)(f,void 0,void 0,!1,null,null,null);t.default=h.exports},466:function(e,t,r){"use strict";r.r(t);var n=r(45),a=r(65),s=r(28),i=(r(92),r(153),r(62),r(312),r(156),r(93),r(311)),o={name:"DruxtEntityForm",extends:i.default,props:{schemaType:{type:String,default:"form"}},data:function(){return{response:void 0,submitting:!1}},computed:{errors:function(e){return(e.response||{}).errors}},methods:{getScopedSlots:function(){var e=this,t=i.default.methods.getScopedSlots.call(this);return t.buttons=function(t){return e.$createElement("DruxtEntityFormButtons",{attrs:t,on:{reset:e.onReset,submit:e.onSubmit},props:{schema:e.schema||{}},ref:"buttons"})},t.default=function(r){return[].concat(Object(s.a)(Object.entries(e.fields).map((function(e){var n=Object(a.a)(e,1)[0];return t[n](r)}))),[t.buttons(r)])},t},onReset:function(){this.model=JSON.parse(JSON.stringify(this.entity)),this.response=void 0,this.$emit("reset")},onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,a,s,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.submitting){t.next=2;break}return t.abrupt("return",!1);case 2:return e.submitting=!0,r=e.schema.config.href,n="post",e.entity.id&&(r=[r,e.entity.id].join("/"),n="patch"),t.prev=6,t.next=9,e.$druxt.axios[n](r,{data:e.model},{headers:{"Content-Type":"application/vnd.api+json"}});case 9:e.response=t.sent,a=e.response.data.data,s=a.type,i=a.id,Object.keys((e.$store.state.druxt.resources[s]||{})[i]||{}).map((function(t){return e.$store.commit("druxt/addResource",{resource:a,hash:t})})),e.$emit("submit",a),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(6),e.response=(t.t0.response||{}).data||t.t0.message,e.$emit("error",e.response);case 20:e.submitting=!1;case 21:case"end":return t.stop()}}),t,null,[[6,16]])})))()}}},u=r(42),c=Object(u.a)(o,void 0,void 0,!1,null,null,null);t.default=c.exports}}]);