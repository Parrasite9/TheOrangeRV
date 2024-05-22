;/*FB_PKG_DELIM*/

__d("CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9700288483378668"}),null);
__d("CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation.graphql",["CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"DeviceBasedLoginTurnOnNonceResponsePayload",kind:"LinkedField",name:"device_based_login_turn_on_nonce",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"DeviceBasedLoginDetailedNonceInfosConnection",kind:"LinkedField",name:"device_based_login_nonce_infos",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation",selections:c},params:{id:b("CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation_facebookRelayOperation"),metadata:{},name:"CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],b=[{alias:null,args:null,kind:"ScalarField",name:"title_text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion",selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"qp_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"promotion",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_logging_data",storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionCreative",kind:"LinkedField",name:"creatives",plural:!0,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"content",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionAction",kind:"LinkedField",name:"primary_action",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionAction",kind:"LinkedField",name:"secondary_action",plural:!1,selections:b,storageKey:null},{args:null,kind:"FragmentSpread",name:"CometQuickPromotionSocialContext_quickPromotionCreative"}],storageKey:null}],storageKey:null}],type:"CometMegaphoneWWWDeviceBasedLoginRendererStrategy",abstractKey:null}}();e.exports=a}),null);
__d("CometQuickPromotionSocialContext_quickPromotionCreative.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometQuickPromotionSocialContext_quickPromotionCreative",selections:[{alias:null,args:null,concreteType:"QPCounterSocialContext",kind:"LinkedField",name:"counter_social_context",plural:!1,selections:[{args:null,documentName:"CometQuickPromotionSocialContext_quickPromotionCreative",fragmentName:"CometQuickPromotionCounterSocialContext_quickPromotionCounterSocialContext",fragmentPropName:"quickPromotionCounterSocialContext",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"social_context_images",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"secondary_footer",plural:!1,selections:a,storageKey:null}],type:"QuickPromotionCreative",abstractKey:null}}();e.exports=a}),null);
__d("CometQuickPromotionSocialContext.react",["CometBoldedEntityRenderer","CometColumn.react","CometColumnItem.react","CometMetaLinkedEntityRenderer","CometOverlappingFacepile.react","CometQuickPromotionSocialContext_quickPromotionCreative.graphql","CometRelay","CometTextWithEntitiesRelay.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||d("react"),l={text:{display:"x78zum5",flexBasis:"x1r8uery",flexDirection:"x1q0g3np",flexGrow:"x1iyjqo2",paddingEnd:"xn6708d",paddingStart:"x1swvt13",paddingTop:"xyamay9",$$css:!0}},m={center:{justifyContent:"xl56j7k",$$css:!0},end:{justifyContent:"x13a6bvl",$$css:!0},start:{justifyContent:"x1nhvcw1",$$css:!0}};function a(a){var e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometQuickPromotionSocialContext_quickPromotionCreative.graphql"),a.creative);if(e==null)return null;var f=e.counter_social_context,g=e.secondary_footer,j=e.social_context;e=e.social_context_images;if(f!=null){var n=a.counterDigits,o=a.dismissQP,p=a.isRTL,q=a.metaText,r=a.socialContextButtonText,s=a.socialContextDisclaimerText,t=a.socialContextDisclaimerTextWithEntities;return k.jsx(d("CometRelay").MatchContainer,{match:f,props:{counterDigits:n,dismissQP:o,isRTL:p,metaText:q,socialContextButtonText:r,socialContextDisclaimerText:s,socialContextDisclaimerTextWithEntities:t}})}if(g!=null){n=a.socialContextSecondaryFooter;return n!=null?k.jsx(d("CometRelay").MatchContainer,{match:f,props:{socialContextSecondaryFooter:n}}):k.jsx("div",{className:(i||(i=c("stylex")))(l.text,m[(o=a.textAlign)!=null?o:"start"]),children:k.jsx(c("TetraText.react"),{color:"secondary",type:"meta3",children:k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{"*":[c("CometBoldedEntityRenderer"),c("CometMetaLinkedEntityRenderer")]},textWithEntities:g})})})}if(j==null)return null;if(e==null||e.length===0){return k.jsx("div",{className:(i||(i=c("stylex")))(l.text,m[(p=a.textAlign)!=null?p:"start"]),children:k.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{User:[c("CometBoldedEntityRenderer")]},textWithEntities:j})})})}var u=[];e.forEach(function(a){a=a.uri;if(a==null)return;u.push({source:{uri:a}})});q={count:e.length,isTextInline:!0,items:u,size:24,text:k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{User:[c("CometBoldedEntityRenderer")]},textWithEntities:j})};if(a.textAlign!==null)return k.jsx(c("CometColumn.react"),{align:a.textAlign,children:k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("CometOverlappingFacepile.react"),babelHelpers["extends"]({},q,{withWrapper:!0}))})});else return a.unstyled===!0?k.jsx(c("CometOverlappingFacepile.react"),babelHelpers["extends"]({},q)):k.jsx(c("CometOverlappingFacepile.react"),babelHelpers["extends"]({},q,{withWrapper:!0}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMegaphoneWWWDeviceBasedLoginRendererStrategy.react",["CometBoldedEntityRenderer","CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation.graphql","CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion.graphql","CometQuickPromotionComponent.react","CometQuickPromotionSocialContext.react","CometRelay","CometTextWithEntitiesRelay.react","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react")),l=j.useState;function a(a){a=a.quickPromotion;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion.graphql"),a);var e=d("CometRelay").useMutation(i!==void 0?i:i=b("CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation.graphql")),f=e[0];e=function(){f({variables:{input:{}}})};var g=l(!1),j=g[0];g=g[1];if(j)return null;j=a.promotion;var m=a.qp_image;if(j==null)throw c("unrecoverableViolation")("promotion data cannot be null","comet_qp");var n=j.creatives;j=j.id;n=n!=null?n[0]:null;if(n==null||j==null)throw c("unrecoverableViolation")("creatives/promotion id data cannot be null","comet_qp");var o=n.content,p=n.primary_action,q=n.secondary_action,r=n.title;if(r==null||o==null)return null;m=m==null?void 0:m.uri;m=m!=null?{header:{imageUri:m,type:"center"}}:null;var s={footer:{}};p!=null&&(s.footer.primary={label:p.title_text,onPress:e});q!=null&&(s.footer.secondary={label:q.title_text,onPress:g});s.footer.dismissOnClick={primary:!0,secondary:!0};return k.jsx(c("CometQuickPromotionComponent.react"),babelHelpers["extends"]({},m,{context:{socialContext:k.jsx(c("CometQuickPromotionSocialContext.react"),{creative:n}),subtitle:k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{User:[c("CometBoldedEntityRenderer")]},textWithEntities:o}),title:k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{User:[c("CometBoldedEntityRenderer")]},textWithEntities:r})}},s,{loggingData:{instance_log_data:a==null?void 0:(p=a.promotion)==null?void 0:p.encrypted_logging_data,promotion_id:j}}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion$normalization.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],e=[{alias:null,args:null,kind:"ScalarField",name:"title_text",storageKey:null}];return{kind:"SplitOperation",metadata:{},name:"CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion$normalization",selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"qp_image",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"promotion",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"encrypted_logging_data",storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionCreative",kind:"LinkedField",name:"creatives",plural:!0,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"content",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionAction",kind:"LinkedField",name:"primary_action",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionAction",kind:"LinkedField",name:"secondary_action",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"QPCounterSocialContext",kind:"LinkedField",name:"counter_social_context",plural:!1,selections:[{args:null,documentName:"CometQuickPromotionSocialContext_quickPromotionCreative",fragmentName:"CometQuickPromotionCounterSocialContext_quickPromotionCounterSocialContext",fragmentPropName:"quickPromotionCounterSocialContext",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"social_context_images",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"secondary_footer",plural:!1,selections:d,storageKey:null},c],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);