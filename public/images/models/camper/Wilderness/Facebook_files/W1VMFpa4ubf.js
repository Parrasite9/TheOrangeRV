;/*FB_PKG_DELIM*/

__d("BaseFixedGrid.react",["Locale","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.children,c=a.columns,e=a.gap;a=i.Children.toArray(b).filter(Boolean);b=i.Children.count(a);if(b===0)return null;var f=d("Locale").isRTL()?"marginRight":"marginLeft";return i.jsx("div",{className:"x78zum5 x1q0g3np x1a02dak xh8yej3",children:i.Children.map(a,function(a,b){var d,g=b%c;b=b<c;g=g===0;g=(d={},d[f]=g?0:e,d.marginTop=b?0:e,d.width="calc( (100% - "+(c-1)*e+"px) / "+c+")",d);return i.jsx("div",{style:g,children:a})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometDirectionalDockingView.react",["cr:1619204"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1619204")}),98);
__d("CometDirectionalDockingView.sticky.react",["$InternalEnum","BaseScrollableAreaContext","BaseViewportMarginsContext","ReactDOMComet","react","stylex","useMergeRefs","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useCallback,l=e.useContext,m=e.useEffect,n=e.useRef,o=e.useState,p={main:{position:"x7wzq59",$$css:!0}},q=b("$InternalEnum")({Down:0,Up:1}),r=Object.freeze({});function a(a){var b=a.bottomStickyAdjustment_DO_NOT_USE,e=b===void 0?0:b;b=a.top;b=b===void 0?16:b;var f=a.bottom;f=f===void 0?b:f;var g=a.children,i=a.tagName;i=i===void 0?"div":i;a=a.xstyle;var s=l(c("BaseScrollableAreaContext")),t=l(c("BaseViewportMarginsContext")),u=b+t.top,v=f+t.bottom;b=o(0);f=b[0];var w=b[1];t=o(r);b=t[0];var x=t[1],y=k(function(){return s.length>0?s[s.length-1].getDOMNode():window},[s]),z=k(function(){var a=y();if(a==null)return null;if(window.HTMLElement!=null){return a instanceof HTMLElement?a.getBoundingClientRect().height:(a=a.innerHeight)!=null?a:null}return null},[y]),A=n(null),B=n(z());t=k(function(a){a=a.height;A.current=a},[]);t=c("useResizeObserver")(t);var C=n(0),D=n(null),E=n(null),F=n(null);t=c("useMergeRefs")(t,E);var G=k(function(a){a=a.top;var b=C.current,c=D.current;b=a>b?q.Down:q.Up;var f=E.current,g=F.current;if(f==null||g==null)return;C.current=a;D.current=b;if(b===c)return;c=(a=B.current)!=null?a:z();if(c==null)return;a=f.getBoundingClientRect();f=g.getBoundingClientRect();g=a.height;var h=a.top-f.top,i;if(g<c-u-v)h=0,i={top:u};else switch(b){case q.Down:a=Math.round(Math.min(u,c-v-g));i={top:a};break;case q.Up:f=Math.round(Math.min(v,c-u-g));i={bottom:f+e}}d("ReactDOMComet").flushSync(function(){x(function(a){if(i.top!=null&&a.top!=null&&i.top===a.top)return a;return i.bottom!=null&&a.bottom!=null&&i.bottom===a.bottom?a:(a=i)!=null?a:r}),w(h)})},[v,u,z]),H=k(function(){var a=y();return a==null?{left:0,top:0}:a instanceof HTMLElement?{left:a.scrollLeft,top:a.scrollTop}:{left:a.scrollY,top:a.scrollY}},[y]);m(function(){var a=y();if(a!=null){var b=function(){G(H())};a.addEventListener("scroll",b);return function(){a.removeEventListener("scroll",b)}}},[y,H,G]);m(function(){var a=function(){B.current=z();var a=D.current;D.current=null;var b=H();G({left:b.left,top:b.top+(a===q.Up?-1:1)})};window.addEventListener("resize",a);return function(){window.removeEventListener("resize",a)}},[H,G,z]);return j.jsxs(j.Fragment,{children:[j.jsx("div",{ref:F,style:{height:f}}),j.jsx(i,{className:(h||(h=c("stylex")))(a,p.main),ref:t,style:b,children:g})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHeaderContentArea.react",["CometEntityHeaderScrollToContext","CometRouteRenderType","CometRouterFocusRegion.react","CometSection.react","CometVisualCompletion","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useCallback,l=e.useMemo,m=e.useRef,n={content:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",$$css:!0},content_DEPRECATED:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"xdt5ytf",maxWidth:"x193iq5w",$$css:!0}};function b(b){var e=b.children,f=b.header,g=b.scrollKey;b=b.useDeprecatedStyles;b=b===void 0?!1:b;var i=d("CometRouteRenderType").useIsPushView(),o=m(null),p=m(null),q=k(function(b,d){var e=p.current;p.current=g;if(g!=null&&g===e)return;if(o.current==null)return;if(o.current.offsetWidth<940)return;if(b.current!=null&&((e=o.current)==null?void 0:e.contains(b.current))){e=i?-60:0;b=b.current;while(b!=null&&o.current.contains(b))e+=b.offsetTop,b=b.offsetParent;e+=(b=d)!=null?b:0;try{a.scrollTo({behavior:"auto",left:a.pageXOffset,top:e})}catch(b){a.scrollTo(a.pageXOffset,e)}c("CometVisualCompletion").setInitialScrollY(e)}},[i,g]),r=l(function(){return{scrollToTop:q}},[q]);return j.jsxs(c("CometSection.react"),{className:"x78zum5 xdt5ytf x1t2pt76 x1n2onr6",ref:o,role:"main",testid:void 0,children:[j.jsx(c("CometEntityHeaderScrollToContext").Provider,{value:r,children:f}),j.jsx("div",{className:(h||(h=c("stylex")))(b?n.content_DEPRECATED:n.content),"data-testid":void 0,children:j.jsx(c("CometRouterFocusRegion.react"),{children:e})})]})}b.displayName=b.name+" [from "+f.id+"]";g["default"]=b}),98);
__d("CometStickyHeaderContentArea.react",["BaseStickyHeader.react","BaseViewportMarginsAddonContextProvider.react","CometAppNavigationConstants","CometAppNavigationTabBarContainer.react","CometHeaderContentArea.react","CometRouteRenderType","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={tabBar:{zIndex:"xhtitgo",$$css:!0}};function a(a){var b=a.headerHeight;b=b===void 0?60:b;var e=a.showTabContainerOnPushView;e=e===void 0?!1:e;a=babelHelpers.objectWithoutPropertiesLoose(a,["headerHeight","showTabContainerOnPushView"]);var f=d("CometRouteRenderType").useIsPushView();b=i.jsx(c("CometHeaderContentArea.react"),babelHelpers["extends"]({},a,{children:i.jsx(c("BaseViewportMarginsAddonContextProvider.react"),{addon:b,children:a.children})}));return e&&f?i.jsxs(i.Fragment,{children:[i.jsx(c("BaseStickyHeader.react"),{xstyle:j.tabBar,children:i.jsx(c("CometAppNavigationTabBarContainer.react"),{})}),i.jsx(c("BaseViewportMarginsAddonContextProvider.react"),{addon:d("CometAppNavigationConstants").HEADER_HEIGHT,children:b})]}):b}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSFixedGrid.react",["BaseFixedGrid.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("BaseFixedGrid.react"),babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometEntityConvergenceHeaderGlimmer.react",["CometEntityHeaderBottomRow.react","CometEntityHeaderCoverPhotoRow.react","CometEntityPageHeader.react","CometFeedWidthStyles","FDSAspectRatioContainer.react","FDSGlimmer.react","ProfileCometEntityConvergenceHeaderTopRow.react","ProfileCometProfilePictureGlimmer.react","ProfileCometTabsGlimmer.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={coverPhoto:{borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",marginTop:"xdj266r",marginEnd:"xkrivgy",marginBottom:"xat24cr",marginStart:"x1gryazu",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"xh8yej3",$$css:!0},coverPhotoGlimmer:{height:"x5yr21d",width:"xh8yej3",$$css:!0},name:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xxk0z11",marginBottom:"x1yztbdb",width:"xfp4ol3",$$css:!0}},l=d("CometFeedWidthStyles").getEntityHeaderWidthStyles();function a(){var a=j.jsx(c("FDSGlimmer.react"),{index:3,xstyle:k.name});a=j.jsx(c("ProfileCometEntityConvergenceHeaderTopRow.react"),{actor:j.jsx(c("ProfileCometProfilePictureGlimmer.react"),{size:168}),actorPicSize:"large",titleBlock:a});var b=j.jsx(c("CometEntityHeaderBottomRow.react"),{buttonGroup:null,tabs:j.jsx(c("ProfileCometTabsGlimmer.react"),{})});return j.jsx(c("CometEntityPageHeader.react"),{bottomRow:b,coverPhotoRow:j.jsx(c("CometEntityHeaderCoverPhotoRow.react"),{coverPhoto:j.jsx("div",{className:(h||(h=c("stylex")))(k.coverPhoto,l.coverMediaContainer),children:j.jsx(c("FDSAspectRatioContainer.react"),{aspectRatio:940/348,children:j.jsx(c("FDSGlimmer.react"),{index:1,xstyle:k.coverPhotoGlimmer})})})}),testid:void 0,topRow:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometTileSectionGlimmer.react",["BaseLoadingStateElement.react","CometCard.react","FDSAspectRatioContainer.react","FDSFixedGrid.react","FDSGlimmer.react","getRoundedCorners","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={borderBottomEndRadius:{borderBottomEndRadius:"x30kzoy",$$css:!0},borderBottomStartRadius:{borderBottomStartRadius:"x9jhf4c",$$css:!0},borderTopEndRadius:{borderTopEndRadius:"xgqcy7u",$$css:!0},borderTopStartRadius:{borderTopStartRadius:"x1lq5wgf",$$css:!0},item:{height:"x5yr21d",$$css:!0},title:{borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",height:"xmix8c7",marginBottom:"x1yztbdb",width:"x2pejg6",$$css:!0}},k=9,l=3;function a(a,b){var d=c("getRoundedCorners")(k,l);return i.jsx(c("BaseLoadingStateElement.react"),{ref:b,children:i.jsx("div",{className:"x1yztbdb","data-testid":void 0,children:i.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:i.jsxs("div",{className:"xyamay9 x1pi30zi x1l90r2v x1swvt13",children:[i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.title}),i.jsx("div",{className:"x19um543 x1m6msm",children:i.jsx(c("FDSFixedGrid.react"),{columns:3,gap:4,children:Array.from(new Array(k),function(a,b){return i.jsx(c("FDSAspectRatioContainer.react"),{aspectRatio:1,children:i.jsx(c("FDSGlimmer.react"),{index:b%l,xstyle:[j.item,c("getRoundedCorners").hasCorner((a=d[b])!=null?a:0,c("getRoundedCorners").CORNERS.TOP_START)&&j.borderTopStartRadius,c("getRoundedCorners").hasCorner((a=d[b])!=null?a:0,c("getRoundedCorners").CORNERS.TOP_END)&&j.borderTopEndRadius,c("getRoundedCorners").hasCorner((a=d[b])!=null?a:0,c("getRoundedCorners").CORNERS.BOTTOM_START)&&j.borderBottomStartRadius,c("getRoundedCorners").hasCorner((a=d[b])!=null?a:0,c("getRoundedCorners").CORNERS.BOTTOM_END)&&j.borderBottomEndRadius]},b)},b)})})})]})})})})}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("ProfileCometTimelineTwoColumnLayout.react",["CometResponsiveColumns.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={overflowAnchor:{overflowAnchor:"x1xzczws",$$css:!0},timelineContainer:{marginTop:"xw7yly9",$$css:!0}};function a(a){var b=a.aboveContent,c=a.auxColumn,e=a.contentColumn;a=a.reversed;a=a===void 0?!1:a;c=i.jsx(d("CometResponsiveColumns.react").Column,{columnType:"SECONDARY",xstyle:j.overflowAnchor,children:c});e=i.jsx(d("CometResponsiveColumns.react").Column,{columnType:"FEED",children:e});return i.jsxs(i.Fragment,{children:[i.jsx(d("CometResponsiveColumns.react").Container,{containerWidth:"DEFAULT",children:i.jsx(d("CometResponsiveColumns.react").Column,{columnType:"FULL",children:b})}),i.jsxs(d("CometResponsiveColumns.react").Container,{containerWidth:"DEFAULT",xstyle:j.timelineContainer,children:[a?e:c,a?c:e]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);