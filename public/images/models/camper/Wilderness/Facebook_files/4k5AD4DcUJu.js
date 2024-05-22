;/*FB_PKG_DELIM*/

__d("CixAccountStatusVpvdFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743357");b=d("FalcoLoggerInternal").create("cix_account_status_vpvd",a);e=b;g["default"]=e}),98);
__d("ProfileCometAccountStatusNotice_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAccountStatusNotice_data",selections:[{alias:null,args:null,concreteType:"IXAccountStatusProfileEntrypointModel",kind:"LinkedField",name:"profile_entrypoint",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status_value",storageKey:null}],storageKey:null}],type:"IXAccountStatus",abstractKey:null};e.exports=a}),null);
__d("XCometAccountStatusRootControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/account_status/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("ProfileCometAccountStatusNotice.react",["fbt","ix","CixAccountStatusVpvdFalcoEvent","CometCard.react","CometLink.react","CometRelay","CometRow.react","CometRowItem.react","FDSTextPairing.react","Locale","ProfileCometAccountStatusNotice_data.graphql","TetraIcon.react","XCometAccountStatusRootControllerRouteBuilder","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l,m=l||(l=d("react"));e=l;var n=e.useEffect,o=e.useRef,p=d("fbicon")._(i("492539"),24),q=d("fbicon")._(i("492491"),24),r={redirectLink:{":hover_textDecoration":"x1lku1pv",$$css:!0},restrictedBackground:{backgroundColor:"x1py5hnd",$$css:!0},statusIndicator:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",display:"x78zum5",paddingTop:"x1y1aw1k",paddingEnd:"x1sxyh0",paddingBottom:"xwib8y2",paddingStart:"xurb0ha",width:"x1kky2od",$$css:!0},warningBackground:{backgroundColor:"x1rfik1p",$$css:!0}};function s(a){if(a===null)return null;var b,e;switch(a){case"WARNING":b=m.jsx(c("TetraIcon.react"),{icon:d("fbicon")._(i("502061"),16),size:16});e=r.warningBackground;break;default:b=m.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("538075"),16),size:16}),e=r.restrictedBackground}return m.jsx("div",{className:(k||(k=c("stylex")))(r.statusIndicator,e),children:b})}s.displayName=s.name+" [from "+f.id+"]";function a(a){a=a.data;a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometAccountStatusNotice_data.graphql"),a);var e=o(null);n(function(){if(e.current===!0)return;if(g!=="WARNING"&&g!=="RESTRICTED")return;e.current=!0;c("CixAccountStatusVpvdFalcoEvent").log(function(){return{event:"render",location:"profile_self",poi:"EP_PROFILE"}})});a=a==null?void 0:a.profile_entrypoint;if(a===null)return null;var f=a==null?void 0:a.status,g=a==null?void 0:a.status_value;if(g!=="WARNING"&&g!=="RESTRICTED")return null;a=s(g);var i=d("Locale").isRTL();return m.jsx("div",{className:"x1yztbdb",children:m.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:m.jsx("div",{className:"x10d93hz",children:m.jsx(c("CometLink.react"),{href:c("XCometAccountStatusRootControllerRouteBuilder").buildURL({location:"profile_self"}),onClick:function(){c("CixAccountStatusVpvdFalcoEvent").log(function(){return{event:"click",location:"profile_self",poi:"EP_PROFILE"}})},target:"_blank",xstyle:r.redirectLink,children:m.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:16,paddingTop:16,paddingVertical:16,children:[m.jsx(c("CometRowItem.react"),{children:a}),m.jsx(c("CometRowItem.react"),{expanding:!0,children:m.jsx(c("FDSTextPairing.react"),{headline:f,level:4,meta:h._("__JHASH__XDODsVB6EzW__JHASH__")})}),m.jsx(c("CometRowItem.react"),{children:m.jsx("div",{className:"x1gslohp",children:m.jsx(c("TetraIcon.react"),{"aria-label":h._("__JHASH__ojPYlPQM0eh__JHASH__"),color:"disabled",icon:i?q:p,size:24})})})]})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("ProfileCometAccountStatusNotice_data$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"ProfileCometAccountStatusNotice_data$normalization",selections:[{alias:null,args:null,concreteType:"IXAccountStatusProfileEntrypointModel",kind:"LinkedField",name:"profile_entrypoint",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status_value",storageKey:null}],storageKey:null}]};e.exports=a}),null);