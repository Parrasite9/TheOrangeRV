;/*FB_PKG_DELIM*/

__d("CometAIProductTagSuggestionsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6585238521599481"}),null);
__d("CometAIProductTagSuggestionsQuery.graphql",["CometAIProductTagSuggestionsQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"max_suggestions_per_photo"},c={defaultValue:null,kind:"LocalArgument",name:"media_ids"},d=[{kind:"Variable",name:"max_suggestions_per_photo",variableName:"max_suggestions_per_photo"},{kind:"Variable",name:"media_ids",variableName:"media_ids"}],e={alias:null,args:null,kind:"ScalarField",name:"media_id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"top_left",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"bottom_right",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"center_x",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"center_y",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},m={alias:null,args:[{kind:"Literal",name:"height",value:64},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:64}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:'image(height:64,sizing:"cover-fill-cropped",width:64)'},n={alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"listing_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"formatted_amount",storageKey:null}],storageKey:null},o={alias:null,args:null,concreteType:"CatalogItemUnitPrice",kind:"LinkedField",name:"per_unit_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"formatted_text",storageKey:null}],storageKey:null},p={alias:null,args:null,concreteType:"XFBCommerceProductTagTimeRange",kind:"LinkedField",name:"time_range",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"start",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end",storageKey:null}],storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"confidence",storageKey:null};return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"CometAIProductTagSuggestionsQuery",selections:[{alias:null,args:d,concreteType:"ProductTagAISuggestionInfo",kind:"LinkedField",name:"product_tag_suggestions",plural:!0,selections:[e,{alias:null,args:null,concreteType:"ProductTagProductBox",kind:"LinkedField",name:"suggestions",plural:!0,selections:[f,g,h,i,j,{alias:null,args:null,concreteType:"ProductTagSuggestedProduct",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[k,l,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[m],storageKey:null},n,o],storageKey:null},j,p],storageKey:null},q],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"CometAIProductTagSuggestionsQuery",selections:[{alias:null,args:d,concreteType:"ProductTagAISuggestionInfo",kind:"LinkedField",name:"product_tag_suggestions",plural:!0,selections:[e,{alias:null,args:null,concreteType:"ProductTagProductBox",kind:"LinkedField",name:"suggestions",plural:!0,selections:[f,g,h,i,j,{alias:null,args:null,concreteType:"ProductTagSuggestedProduct",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[k,l,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m,k],storageKey:null},n,o],storageKey:null},j,p],storageKey:null},q],storageKey:null}],storageKey:null}]},params:{id:b("CometAIProductTagSuggestionsQuery_facebookRelayOperation"),metadata:{},name:"CometAIProductTagSuggestionsQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometAIProductTagSuggestionsQuery.react",["CometAIProductTagSuggestionsQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h!==void 0?h:h=b("CometAIProductTagSuggestionsQuery.graphql");g["default"]=a}),98);
__d("CometAIProductTagSuggestionsUtil_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"CometAIProductTagSuggestionsUtil_photo"};e.exports=a}),null);
__d("ProductTagConfidence",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["HIGH","LOW","VERY_HIGH","VERY_LOW"]);c=a;f["default"]=c}),66);
__d("ProductTagConfidenceUtils.facebook",["$InternalEnumUtils","ProductTagConfidence"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("ProductTagConfidence"));b=d("$InternalEnumUtils").createFromJSEnum(c("ProductTagConfidence"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("SharedAIProductTagUtils",["ProductTagConfidenceUtils.facebook"],(function(a,b,c,d,e,f,g){"use strict";var h=5;function a(a){var b=new Map();a.product_tag_suggestions.map(function(a){var c=a.media_id;a=a.suggestions;if(c==null||a==null)return;var e=[],f=[];a.map(function(a){a=(a=a)!=null?a:{};var b=a.bottom_right,c=a.center_x,g=a.center_y,h=a.confidence,i=a.products,j=a.score;a=a.top_left;if(c==null||g==null||j==null)return;c=c*100;g=g*100;i=i==null?void 0:i[0];var k=i==null?void 0:i.score;h=d("ProductTagConfidenceUtils.facebook").toJSEnum(h);var l=i==null?void 0:i.time_range;i=(i=i==null?void 0:i.product_item)!=null?i:{};var m=i.id,n=i.listing_price,o=i.name,p=i.per_unit_price;i=i.primary_listing_photo;b={boundingBoxJSON:JSON.stringify({bottomRight:b,topLeft:a}),boxScore:j,confidence:h,productID:m,productScore:k,timeRange:l};if((h==="VERY_HIGH"||h==="HIGH")&&e.length===0){if(m==null||o==null)return null;j={id:m,image_uri:i==null?void 0:(a=i.image)==null?void 0:a.uri,metadata:{product_tag_type:"AI_HIGH_CONFIDENCE"},name:o,product_per_unit_price:p==null?void 0:p.formatted_text,product_price:n==null?void 0:n.formatted_amount};k=babelHelpers["extends"]({},b,{source:"AI_suggested",taggee:j,x:c,y:g});e.push(k)}else l==null&&h==="LOW"&&f.push(babelHelpers["extends"]({},b,{x:c,y:g}))});b.set(c,{knownSuggestions:e,unknownSuggestions:f})});return b}function b(a,b,c,d){return a>=c-h&&a<=c+h&&b>=d-h&&b<=d+h}g.USER_TAGGING_TOLERANCE=h;g.processAIProductTagSuggestionsQueryResponse=a;g.isPointNearbyPoint=b}),98);
__d("CometAIProductTagSuggestionsUtil.react",["CometAIProductTagSuggestionsUtil_photo.graphql","CometRelay","SharedAIProductTagUtils"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometAIProductTagSuggestionsUtil_photo.graphql");function j(a,b){return a.productID===b.productID||d("SharedAIProductTagUtils").isPointNearbyPoint(a.x,a.y,b.x,b.y)}function k(a){return(a=a==null?void 0:(a=a.photo_product_tags)==null?void 0:a.map(function(a){var b;b=(b=a.listing)==null?void 0:b.id;a=a.xy_location;var c=a==null?void 0:a.x;a=a==null?void 0:a.y;return c==null||a===void 0||a===null||b===null||b===void 0?null:{productID:b,x:c,y:a}}).filter(Boolean))!=null?a:[]}function a(a,b){a=d("CometRelay").readInlineData(i,a);b=b==null?void 0:b.get((b=a==null?void 0:a.id)!=null?b:"");var c=k(a);return!b?[]:b==null?void 0:b.filter(function(a){var b=(c==null?void 0:c.filter(function(b){return j({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b})}function c(a,b){a=d("CometRelay").readInlineData(i,a);b=b==null?void 0:b.get((b=a==null?void 0:a.id)!=null?b:"");var c=k(a);return!b?[]:b==null?void 0:b.filter(function(a){var b=(c==null?void 0:c.filter(function(b){return j({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b})}function e(a){return!a}g.getUntaggedKnownTags=a;g.getUntaggedUnknownTags=c;g.canUsePretagExperience=e}),98);
__d("CometNewsfeedKeyCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f,g){"use strict";a=c("createKeyCommandWidget")();g["default"]=a}),98);
__d("CommerceViewProductTagFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743420");b=d("FalcoLoggerInternal").create("commerce_view_product_tag",a);e=b;g["default"]=e}),98);
__d("LWIBoostedComponentFalcoEvenUtils",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("logBoostedComponentCometFalcoEvent").__setRef("LWIBoostedComponentFalcoEvenUtils");function a(a){return a==null?null:String(a)}function i(a){var b=parseInt(a);return isNaN(b)?null:String(a)}function b(a,b,c){return{action:c.action,ad_account_id:i(c.ad_account_id),ad_status:c.ad_status,ads_lwi_goal:c.ads_lwi_goal,audience_id:i(c.audience_id),audience_size:i(c.audience_size),bid_amount:c.bid_amount,billing_event:c.billing_event,bison_estimate:i(c.bison_estimate),budget_in_local:i(c.budget_in_local),budget_type:c.budget_type,call_to_action_options:null,call_to_action_options2:c.call_to_action_options2,call_to_action_type:c.call_to_action_type,call_to_action_value:c.call_to_action_value,campaign_group_id:i(c.campaign_group_id),codebase:c.codebase,connection_quality_class:c.connection_quality_class,context:c.context,coupon_offer_id:i(c.coupon_offer_id),creation_platform_id:c.creation_platform_id,creative_spec:c.creative_spec,currency:c.currency,default_audience_id:i(c.default_audience_id),default_budget_in_local:i(c.default_budget_in_local),default_call_to_action:c.default_call_to_action,default_duration_in_days:i(c.default_duration_in_days),default_targeting_spec:c.default_targeting_spec,draft_id:i(c.draft_id),duration_in_days:i(c.duration_in_days),eligibility_rule:c.eligibility_rule,ending_value:c.ending_value,entry_point:c.entry_point,entry_point_details_override:c.entry_point_details_override,error:c.error,error_domain:c.error_domain,estimate_type:c.estimate_type,event:a,event_category:c.event_category,execution_time:i(c.execution_time),extra_data:j(c.extra_data),feedback_message:c.feedback_message,final_step:c.final_step,flow:c.flow,flow_component:c.flow_component,flow_id:c.flow_id,flow_option:c.flow_option,group_id:i(c.group_id),group_privacy:i(c.group_privacy),group_size:i(c.group_size),has_auto_open:c.has_auto_open,has_dayparting:c.has_dayparting,has_nax:c.has_nax,image_type:c.image_type,is_async:c.is_async,link:c.link,lower_estimate:i(c.lower_estimate),menu_option_name:c.menu_option_name,monthly_budget_in_local:i(c.monthly_budget_in_local),multiple_adgroup_specs:c.multiple_adgroup_specs,number_of_bulk_boost_products:i(c.number_of_bulk_boost_products),objective_override:c.objective_override,override_error_message:c.override_error_message,override_error_trace:c.override_error_trace,page_id:i(c.page_id),pixel_id:i(c.pixel_id),post_id:i(c.post_id),product:b,product_flow_type:c.product_flow_type,regulated_categories:null,rejection_reason:c.rejection_reason,rendered_message_type:c.rendered_message_type,saved_audience_id:i(c.saved_audience_id),selected_adgroup_index:i(c.selected_adgroup_index),side:c.side,star_rating:i(c.star_rating),start_time:i(c.start_time),starting_value:c.starting_value,step_breadcrumbs:c.step_breadcrumbs,step_counter:i(c.step_counter),step_name:c.step_name,step_order_number:i(c.step_order_number),stop_time:i(c.stop_time),success:c.success,targeting_ca_id:i(c.targeting_ca_id),targeting_lal_id:i(c.targeting_lal_id),targeting_spec:c.targeting_spec,upper_estimate:i(c.upper_estimate)}}function j(a){var b={};for(var c in a)b[c]=String(a[c]);return b}function d(a){var b=a.entryPoint,c=a.newAd,d=a.pageID,e=a.productType,f=a.targetID;return function(a,g){var i=c!=null?c?"create":"edit":null;h.onReady(function(c){c.logBoostedComponentCometFalcoEvent({action:"enter",context:"flow",eligibility_rule:a,entry_point:b,event:"enter_flow_click",extra_data:j(g),flow:i,page_id:d,post_id:f,product:e,side:"user_action"})})}}function e(a){var b=a.entryPoint,c=a.newAd,d=a.pageID,e=a.productType,f=a.targetID;return function(a,g){var i=c!=null?c?"create":"edit":null;h.onReady(function(c){c.logBoostedComponentCometFalcoEvent({action:"hover",context:"button",eligibility_rule:a,entry_point:b,event:"enter_flow_hover",extra_data:j(g),flow:i,page_id:d,post_id:f,product:e,side:"user_action"})})}}g.safeStringConversionLWIFalco=a;g.safeNumConversionLWIFalco=i;g.getFalcoDataFromLiteLoggerData=b;g.getFalcoExtraData=j;g.getLogEnterFlowClick=d;g.getLogEnterFlowHover=e}),98);
__d("ProductTaggingAiEvaluationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744233");b=d("FalcoLoggerInternal").create("product_tagging_ai_evaluation",a);e=b;g["default"]=e}),98);