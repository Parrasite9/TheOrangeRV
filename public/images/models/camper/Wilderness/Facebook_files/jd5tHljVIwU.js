;/*FB_PKG_DELIM*/

__d("CometTahoeRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8505125576180518"}),null);
__d("FBUnifiedStoriesTrayType",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["AUTOPLAY_NOTIFICATION_TRAY","FEED_PROFILE_TRAY","FEED_TAB_STORIES_SURFACE","FEED_UNITS_PAGINATION","GROUPS_STORIES_TRAY","MONTAGE","MONTAGE_WITH_MUTED_BUCKETS","ONE_BY_ONE_AUTOPLAY","PERMALINK","PORTAL_TRAY","SHOP_TAB_STORY_TRAY","SUGGESTED_STORIES","SUGGESTED_STORIES_FOR_HYBRID_TRAY","TOP_OF_FEED_TRAY","TOP_OF_FEED_TRAY_SHUFFLE","WEARABLE_STORIES_FACE_TRAY"]);c=a;f["default"]=c}),66);
__d("FBUnifiedStoriesTrayTypeUtils.facebook",["$InternalEnumUtils","FBUnifiedStoriesTrayType"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("FBUnifiedStoriesTrayType"));b=d("$InternalEnumUtils").createFromJSEnum(c("FBUnifiedStoriesTrayType"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("StoriesGatingEntrypoint.entrypointutils",["WebPixelRatio","qex"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b,e;b=(b=c("qex")._("1598"))!=null?b:!1;e=(e=c("qex")._("68"))!=null?e:!1;return{blur:d("WebPixelRatio").get()*10,bucketID:a||"",feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",focusCommentID:null,initialBucketID:a||"",initialLoad:!0,isStoriesArchive:!1,scale:d("WebPixelRatio").get(),shouldDeferLoad:!1,shouldEnableArmadilloStoryReply:e,shouldEnableLiveInStories:b}}g.getContentPaneParams=a}),98);
__d("StoriesIsShareToStoryEnabled.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){var a;return(a=c("qex")._("381"))!=null?a:!1}};g["default"]=a}),98);
__d("StoriesLWRVariant.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("qex")._("1276")===!0?"www_new_reactions":"www"}};g["default"]=a}),98);
__d("StoriesSuspenseContentPaneRootWithEntryPointQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7535551759869349"}),null);
__d("StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters",["CometUFIReactionsEnableShortName.relayprovider","StoriesIsShareToStoryEnabled.relayprovider","StoriesLWRVariant.relayprovider","StoriesRing.relayprovider","StoriesSuspenseContentPaneRootWithEntryPointQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("StoriesSuspenseContentPaneRootWithEntryPointQuery_facebookRelayOperation"),metadata:{},name:"StoriesSuspenseContentPaneRootWithEntryPointQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__StoriesIsShareToStoryEnabledrelayprovider:b("StoriesIsShareToStoryEnabled.relayprovider"),__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider"),__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:b("CometUFIReactionsEnableShortName.relayprovider"),__relay_internal__pv__StoriesLWRVariantrelayprovider:b("StoriesLWRVariant.relayprovider")}}};e.exports=a}),null);
__d("StoriesSuspenseNavigationPaneRootWithEntryPointQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7294581103902801"}),null);
__d("StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters",["StoriesSuspenseNavigationPaneRootWithEntryPointQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("StoriesSuspenseNavigationPaneRootWithEntryPointQuery_facebookRelayOperation"),metadata:{},name:"StoriesSuspenseNavigationPaneRootWithEntryPointQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("StoriesCometSuspenseRoot.entrypoint",["FBUnifiedStoriesTrayTypeUtils.facebook","JSResourceForInteraction","StoriesGatingEntrypoint.entrypointutils","StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters","StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.passthroughProps,e=a.routeParams;a=a.routeProps;var f=e.bucket_id,g=a.bucket_id_from_card_id;a=a.buckets_count;e=(e==null?void 0:e.source)==="story_tray";c=d("FBUnifiedStoriesTrayTypeUtils.facebook").fromJSEnum((c=c==null?void 0:c.storiesTrayType)!=null?c:"TOP_OF_FEED_TRAY");e={bucketsCount:(a=a)!=null?a:9,extendedViewerInitialBucketID:(a=f)!=null?a:"",includeInitialBucket:f!==""&&f!==null&&!e,pinnedIDs:[(a=f)!=null?a:""],scale:d("WebPixelRatio").get(),storiesTrayType:c};c=d("StoriesGatingEntrypoint.entrypointutils").getContentPaneParams((a=f)!=null?a:g);return{queries:{storiesSuspenseContentPaneRootReference:{parameters:b("StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters"),variables:c},storiesSuspenseNavigationPaneRootReference:{parameters:b("StoriesSuspenseNavigationPaneRootWithEntryPointQuery$Parameters"),variables:e}}}},root:c("JSResourceForInteraction")("StoriesCometSuspenseRoot.react").__setRef("StoriesCometSuspenseRoot.entrypoint")};g["default"]=a}),98);
__d("StoriesCometSuspenseSingleBucketRootWithEntryPoint.entrypoint",["JSResourceForInteraction","StoriesGatingEntrypoint.entrypointutils","StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.routeParams.bucket_id;a=a.routeProps.bucket_id_from_card_id;c=d("StoriesGatingEntrypoint.entrypointutils").getContentPaneParams((c=c)!=null?c:a);return{queries:{storiesSuspenseContentPaneRootReference:{parameters:b("StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters"),variables:c}}}},root:c("JSResourceForInteraction")("StoriesCometSuspenseSingleBucketRootWithEntryPoint.react").__setRef("StoriesCometSuspenseSingleBucketRootWithEntryPoint.entrypoint")};g["default"]=a}),98);
__d("StoriesCreateQuery$Parameters",["StoriesCreateQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("StoriesCreateQuery_facebookRelayOperation"),metadata:{},name:"StoriesCreateQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("StoriesCreateRoot.entrypoint",["JSResourceForInteraction","StoriesCreateQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{storiesCreateQueryReference:{parameters:b("StoriesCreateQuery$Parameters"),variables:{satpScale:d("WebPixelRatio").get()+1,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("StoriesCreateRoot.react").__setRef("StoriesCreateRoot.entrypoint")};g["default"]=a}),98);