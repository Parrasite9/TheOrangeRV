;/*FB_PKG_DELIM*/

__d("CometExternalShareTracking",["isSSR"],(function(a,b,c,d,e,f,g){"use strict";var h="https://wa.me",i="text";function a(a){if(a!=null&&!c("isSSR")){var b=new URL(h);b.searchParams.append(i,a);return b.toString()}}g.getWhatsAppShareURL=a}),98);
__d("StoriesArchiveBucketDataContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={archiveBucketData:{lowerBoundTime:"",nextDay:"",previousDay:"",storyArchiveID:"story_archive_ID",upperBoundTime:""},initialBucketID:"",setArchiveBucketData:c("emptyFunction")};e=a.createContext(b);g["default"]=e}),98);
__d("StoriesArchiveConstants",[],(function(a,b,c,d,e,f){"use strict";a={CONNECTION_NAME:"StoriesArchiveContentPaneRoot_archived_cards"};b={INITIAL_NEXTDAY:"initial_next_day",INITIAL_PREVIOUSDAY:"initial_previous_day"};f.ARCHIVE=a;f.BucketData=b}),66);
__d("useUnifiedShareSheetLogger",["CometSharingSessionIDUtil","CometTrackingCodeContext","getVideoShareDownstreamSignalTracking","react","requireDeferred","useMinifiedProductAttribution"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useContext,k=b.useMemo,l=c("requireDeferred")("FbSharingEventFalcoEvent").__setRef("useUnifiedShareSheetLogger"),m=c("requireDeferred")("FbSharingSendFalcoEvent").__setRef("useUnifiedShareSheetLogger");function a(){var a=c("useMinifiedProductAttribution")(),b=j(c("CometTrackingCodeContext")),e=k(function(){var a;return(a=d("getVideoShareDownstreamSignalTracking").getVideoShareDownstreamSignalTracking())!=null?a:{}},[]),f=i(function(d){var f=babelHelpers["extends"]({},d);l.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"impression",feed_tracking:f.feed_tracking!=null?f.feed_tracking:b.encrypted_tracking,navigation_chain:a||"",shareable_entity_audience:"unknown",sharing_component_name:"facebook_sharesheet",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},f,e)})})},[a,b.encrypted_tracking,e]),g=function(){},h=i(function(d){var f=babelHelpers["extends"]({},d);l.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"impression",feed_tracking:f.feed_tracking!=null?f.feed_tracking:b.encrypted_tracking,navigation_chain:a||"",shareable_entity_audience:"private",sharing_component_name:"facebook_broadcast_flow",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},f,e)})})},[a,b.encrypted_tracking,e]),n=i(function(d){var f=d.is_anything_shared_in_current_session;f=f===void 0?!0:f;var g=babelHelpers.objectWithoutPropertiesLoose(d,["is_anything_shared_in_current_session"]);f&&c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);l.onReady(function(d){return d.log(function(){var d;return babelHelpers["extends"]({event_type:"tap",feed_tracking:g.feed_tracking!=null?g.feed_tracking:b.encrypted_tracking,navigation_chain:a||"",shareable_entity_audience:(d=g.shareable_entity_audience)!=null?d:"unknown",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},g,e)})})},[a,b.encrypted_tracking,e]),o=i(function(d){var f=d.receiver_types,g=f===void 0?["one_to_one"]:f,h=babelHelpers.objectWithoutPropertiesLoose(d,["receiver_types"]);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);l.onReady(function(d){return d.log(function(){var d;return babelHelpers["extends"]({event_type:"tap",feed_tracking:h.feed_tracking!=null?h.feed_tracking:b.encrypted_tracking,navigation_chain:a||"",receiver_types:g,shareable_entity_audience:(d=h.shareable_entity_audience)!=null?d:"unknown",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},h,e)})})},[a,b.encrypted_tracking,e]),p=i(function(d){var f=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);l.onReady(function(d){return d.log(function(){var d;return babelHelpers["extends"]({event_type:"share_successful",feed_tracking:f.feed_tracking!=null?f.feed_tracking:b.encrypted_tracking,navigation_chain:a||"",shareable_entity_audience:(d=f.shareable_entity_audience)!=null?d:"unknown",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},f,e)})})},[a,b.encrypted_tracking,e]),q=i(function(d){var f=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);l.onReady(function(d){return d.log(function(){var d;return babelHelpers["extends"]({event_type:"sharing_session_end",feed_tracking:f.feed_tracking!=null?f.feed_tracking:b.encrypted_tracking,navigation_chain:a||"",receiver_count:f.receiver_count,shareable_entity_audience:(d=f.shareable_entity_audience)!=null?d:"unknown",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},f,e)})})},[a,b.encrypted_tracking,e]),r=i(function(d){var f=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);l.onReady(function(d){return d.log(function(){var d;return babelHelpers["extends"]({event_type:"share_failed",feed_tracking:f.feed_tracking!=null?f.feed_tracking:b.encrypted_tracking,navigation_chain:a||"",shareable_entity_audience:(d=f.shareable_entity_audience)!=null?d:"unknown",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},f,e)})})},[a,b.encrypted_tracking,e]),s=function(){},t=i(function(d){var f=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").getIsAnythingSharedInCurrentSession()||l.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_abandoned",feed_tracking:f.feed_tracking!=null?f.feed_tracking:b.encrypted_tracking,navigation_chain:a||"",shareable_entity_audience:"unknown",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},f,e)})})},[a,b.encrypted_tracking,e]),u=i(function(d){var f=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").getIsAnythingSharedInCurrentSession()||l.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_abandoned",feed_tracking:f.feed_tracking!=null?f.feed_tracking:b.encrypted_tracking,navigation_chain:a||"",receiver_count:f.receiver_count,shareable_entity_audience:"private",shareable_entity_fbid:null,sharing_component_name:"facebook_broadcast_flow",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},f,e)})})},[a,b.encrypted_tracking,e]),v=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_as_message_successful",feed_tracking:e.feed_tracking!=null?e.feed_tracking:b.encrypted_tracking.toString(),navigation_chain:a||"",shareable_entity_audience:"private",shareable_entity_fbid:null,sharing_component_name:"facebook_broadcast_flow",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},e)})})},[a,b.encrypted_tracking]),w=function(){},x=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_as_message_failed",feed_tracking:e.feed_tracking!=null?e.feed_tracking:b.encrypted_tracking.toString(),navigation_chain:a||"",shareable_entity_audience:"private",shareable_entity_fbid:null,sharing_component_name:"facebook_broadcast_flow",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},e)})})},[a,b.encrypted_tracking]),y=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_as_message_failed",feed_tracking:e.feed_tracking!=null?e.feed_tracking:b.encrypted_tracking.toString(),navigation_chain:a||"",shareable_entity_audience:"private",shareable_entity_fbid:null,sharing_component_name:"hscroll_multiselect_suggested_recipient",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},e)})})},[a,b.encrypted_tracking]),z=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_as_message_attempt",feed_tracking:e.feed_tracking!=null?e.feed_tracking:b.encrypted_tracking.toString(),navigation_chain:a||"",shareable_entity_audience:"private",shareable_entity_fbid:null,sharing_component_name:"facebook_broadcast_flow",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},e)})})},[a,b.encrypted_tracking]),A=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_as_message_attempt",feed_tracking:e.feed_tracking!=null?e.feed_tracking:b.encrypted_tracking.toString(),navigation_chain:a||"",shareable_entity_audience:"private",shareable_entity_fbid:null,sharing_component_name:"hscroll_multiselect_suggested_recipient",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},e)})})},[a,b.encrypted_tracking]),B=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_as_message_successful",feed_tracking:e.feed_tracking!=null?e.feed_tracking:b.encrypted_tracking.toString(),navigation_chain:a||"",shareable_entity_audience:"private",shareable_entity_fbid:null,sharing_component_name:"hscroll_multiselect_suggested_recipient",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},e)})})},[a,b.encrypted_tracking]),C=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_as_message_attempt",feed_tracking:e.feed_tracking!=null?e.feed_tracking:b.encrypted_tracking.toString(),navigation_chain:a||"",shareable_entity_audience:"private",shareable_entity_fbid:null,sharing_component_name:"facebook_broadcast_flow",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},e)})})},[a,b.encrypted_tracking]),D=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_as_message_undo",feed_tracking:e.feed_tracking!=null?e.feed_tracking:b.encrypted_tracking.toString(),navigation_chain:a||"",shareable_entity_audience:"private",shareable_entity_fbid:null,sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},e)})})},[a,b.encrypted_tracking]),E=i(function(d){var f=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").getIsAnythingSharedInCurrentSession()||l.onReady(function(d){return d.log(function(){return babelHelpers["extends"]({event_type:"share_abandoned",feed_tracking:f.feed_tracking!=null?f.feed_tracking:b.encrypted_tracking,navigation_chain:a||"",receiver_count:f.receiver_count,shareable_entity_audience:"unknown",sharing_component_variant:"unified_share_sheet",sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},f,e)})})},[a,b.encrypted_tracking,e]),F=function(){},G=function(){},H=i(function(d){var f=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").genNext();l.onReady(function(d){d.log(function(){var d;return babelHelpers["extends"]({event_type:"tap",feed_tracking:(d=f.feed_tracking)!=null?d:b.encrypted_tracking,navigation_chain:(d=a)!=null?d:"",shareable_entity_audience:"private",sharing_component_name:f.sharing_component_name,sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()},e)})})},[a,b.encrypted_tracking,e]),I=i(function(d){var e=babelHelpers["extends"]({},d);l.onReady(function(d){d.log(function(){var d;return{event_type:"impression",feed_tracking:(d=e.feed_tracking)!=null?d:b.encrypted_tracking,navigation_chain:(d=a)!=null?d:"",shareable_entity_audience:"private",sharing_component_name:e.sharing_component_name,sharing_session_id:c("CometSharingSessionIDUtil").getSharingSessionID()}})})},[a,b.encrypted_tracking]),J=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").getIsAnythingSharedInCurrentSession()&&c("CometSharingSessionIDUtil").genNext();c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(c){c.log(function(){var c;return{event_type:"share_as_message_attempt",feed_tracking:(c=e.feed_tracking)!=null?c:b.encrypted_tracking.toString(),navigation_chain:(c=a)!=null?c:"",shareable_entity_audience:"private",sharing_component_name:e.sharing_component_name}})})},[a,b.encrypted_tracking]),K=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(c){c.log(function(){var c;return{event_type:"share_as_message_failed",feed_tracking:(c=e.feed_tracking)!=null?c:b.encrypted_tracking.toString(),navigation_chain:(c=a)!=null?c:"",shareable_entity_audience:"private",sharing_component_name:e.sharing_component_name}})})},[a,b.encrypted_tracking]),L=i(function(d){var e=babelHelpers["extends"]({},d);c("CometSharingSessionIDUtil").setIsAnythingSharedInCurrentSession(!0);m.onReady(function(c){c.log(function(){var c;return{event_type:"share_as_message_successful",feed_tracking:(c=e.feed_tracking)!=null?c:b.encrypted_tracking.toString(),navigation_chain:(c=a)!=null?c:"",shareable_entity_audience:"private",sharing_component_name:e.sharing_component_name}})})},[a,b.encrypted_tracking]);return{onBCFImpression:g,onCloseBCFDialogLog:u,onCloseDropdownMenu:t,onMessengerBCFImpression:h,onMessengerReshareOptionSelected:o,onReplyToAuthorComposerImpression:I,onReplyToAuthorMessageSentAttempt:J,onReplyToAuthorMessageSentFailure:K,onReplyToAuthorMessageSentSuccessful:L,onReplyToAuthorUFIButtonClicked:H,onSeeChatButtonClicked:F,onSendMessageButtonAttempted:z,onSendMessageButtonInMessengerBCFAttempted:C,onSendMessageButtonInUSSAttempted:A,onSendMessageFailed:w,onSendMessageInMessengerBCFFailed:x,onSendMessageInMessengerBCFSuccessful:v,onSendMessageInMessengerSuccessful:q,onSendMessageInMessengerUSSFailed:y,onSendMessageInMessengerUSSSuccessful:B,onSendMessageSuccessful:s,onShareFailed:r,onShareOptionSelected:n,onSharesheetImpression:f,onShareSuccessful:p,onStickyUFIImpression:G,onUndoMessageSendButtonInMessengerBCF:D,onUSSAbandon:E}}g["default"]=a}),98);