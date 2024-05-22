;/*FB_PKG_DELIM*/

__d("CometHoverCardActionBarWrapper.react",["CometRow.react","CometRowItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a=a.children;return i.jsx(c("CometRow.react"),{children:i.jsx(c("CometRowItem.react"),{expanding:!0,children:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHovercardContainer.react",["fbt","CometColumn.react","CometColumnItem.react","CometDangerouslySuppressInteractiveElementsContext","CometRow.react","CometRowItem.react","gkx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");b={border:{borderTop:"x1j7a9zf",borderEnd:"xajpodt",borderBottom:"x17i6pzl",borderStart:"x1tkm39q",$$css:!0},container:{backgroundColor:"x1jx94hy",borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",boxShadow:"x1l55gj2",maxWidth:"x1j9u4d2",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"xn9wirt",$$css:!0},large:{maxWidth:"x1lr1uin",$$css:!0},removeContextRowsPadding:{marginBottom:"x1oo3vh0",$$css:!0}};e={border:{borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopColor:"x1d4wt55",borderEndColor:"x1ffyrng",borderBottomColor:"x1n79urc",borderStartColor:"xt4m4oe",$$css:!0}};var k=c("gkx")("22874")?babelHelpers["extends"]({},b,e):b;function a(a){var b=a.actionBar,d=a.avatar,e=a.border;e=e===void 0?"solid":e;var f=a.children,g=a.contextRows,i=a.hasContextRowsPadding;i=i===void 0?!1:i;var l=a.headerRowPadding,m=a.heading,n=a.padding;n=n===void 0?16:n;a=a.size;a=a===void 0?"small":a;return j.jsx(c("CometDangerouslySuppressInteractiveElementsContext").Provider,{value:!1,children:j.jsxs(c("CometColumn.react"),{"aria-label":h._("__JHASH__5lE57X9gCAo__JHASH__"),"aria-modal":!0,paddingHorizontal:n,paddingVertical:n,role:"dialog",spacing:8,xstyle:[k.container,e==="solid"?k.border:void 0,a==="large"?k.large:void 0],children:[(d!=null||m!=null||g!=null)&&j.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:(n=l)!=null?n:12,paddingVertical:(e=l)!=null?e:0,spacing:0,verticalAlign:"center",children:[d!=null&&j.jsx(c("CometRowItem.react"),{verticalAlign:"top",children:d}),(m!=null||g!=null)&&j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsxs(c("CometColumn.react"),{spacing:16,children:[m!=null&&j.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:4,children:m}),g!=null&&j.jsx(c("CometColumnItem.react"),{children:j.jsx("div",{xstyle:i?k.removeContextRowsPadding:void 0,children:g})})]})})]}),b,f!=null&&j.jsx(c("CometRow.react"),{children:j.jsx(c("CometRowItem.react"),{expanding:!0,children:f})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometHovercardContextRows.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a=a.children;return i.jsx(i.Fragment,{children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSContextRowContent.react",["CometIcon.react","CometRow.react","CometRowItem.react","FDSTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.addOn,d=a.body,e=a.bodyColor;e=e===void 0?"primary":e;var f=a.bodyLineLimit,g=a.icon,h=a.iconColor,j=a.level;j=j===void 0?3:j;var k=a.meta,l=a.metaLineLimit,m=a.paddingHorizontal;m=m===void 0?16:m;a=a.verticalAlignment;a=a===void 0?"top":a;return i.jsxs("div",{className:"x78zum5 xdt5ytf xwib8y2 x1y1aw1k",children:[i.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:m,paddingTop:0,verticalAlign:a,children:[i.jsx(c("CometRowItem.react"),{children:i.jsx(c("CometIcon.react"),{color:(m=h)!=null?m:"tertiary",icon:g,size:20})}),i.jsx(c("CometRowItem.react"),{expanding:!0,verticalAlign:"center",children:i.jsx(c("FDSTextPairing.react"),{body:d,bodyColor:e,bodyLineLimit:f,level:j,meta:k,metaColor:"secondary",metaLineLimit:l})})]}),b&&i.jsx("div",{className:"x1pi30zi x8aayfw xyamay9",children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSContextRow.react",["FDSContextRowContent.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.testid;b=babelHelpers.objectWithoutPropertiesLoose(a,["testid"]);return i.jsx("div",{className:"xjyslct xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1rg5ohu xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 xh8yej3","data-testid":void 0,role:"listitem",children:i.jsx(c("FDSContextRowContent.react"),babelHelpers["extends"]({},b))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);