;/*FB_PKG_DELIM*/

__d("LSSetLoadingAfterOnMessageRanges",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.sortBy(b.db.table(13).fetch([[[a[0]]]]),[["maxTimestampMs","DESC"]]).next().then(function(a,c){var d=a.done;a=a.value;return d?0:(c=a.item,b.forEach(b.filter(b.db.table(13).fetch([[[c.threadKey,c.minTimestampMs,c.minMessageId]]]),function(a){return b.i64.eq(a.threadKey,c.threadKey)&&b.i64.eq(b.i64.cast([0,0]),b.i64.cast([0,0]))&&b.i64.eq(a.minTimestampMs,c.minTimestampMs)&&a.minMessageId===c.minMessageId}),function(a){var b=a.update;a.item;return b({isLoadingAfter:!0})}))})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSReportThreadViewOpen",["LSIssueNewTaskWithExtraOperations","LSSetLoadingAfterOnMessageRanges"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(b){return c.db.table(9).fetch([[[a[0]]]]).next().then(function(a,b){var c=a.done;a=a.value;return c?(c=[void 0,void 0],d[0]=c[0],d[1]=c[1],c):(b=a.item,c=[b.syncGroup,b.threadType],d[0]=c[0],d[1]=c[1],c)})},function(a){return c.i64.neq(d[0],void 0)?c.sequence([function(a){return c.db.table(1).fetch([[[d[0]]]]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[14]=void 0:(b=a.item,d[14]=b.syncParams)})},function(a){return d[3]=d[14]}]):c.resolve(d[3]=void 0)},function(b){return c.islc(c.filter(c.db.table(12).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.eq(b.authorityLevel,c.i64.cast([0,80]))}),0,c.i64.to_float(c.i64.cast([0,1]))).next().then(function(a,b){var c=a.done;a=a.value;return c?d[4]=void 0:(b=a.item,d[4]=b.timestampMs)})},function(b){return c.db.table(294).fetch([[[a[0]]]]).next().then(function(a,b){var e=a.done;a=a.value;return e?(e=[!1,c.i64.cast([0,0]),void 0],d[6]=e[0],d[7]=e[1],d[8]=e[2],e):(b=a.item,e=[b.isStale,b.threadQueueSequenceId,b.lastSelectiveSyncTimestampMs],d[6]=e[0],d[7]=e[1],d[8]=e[2],e)})},function(a){return d[6]?d[10]=!0:d[10]=!1,c.i64.neq(d[8],void 0)?(c.i64.eq(d[1],c.i64.cast([0,152]))?d[14]=c.i64.cast([0,0]):d[14]=c.i64.cast([0,0]),d[15]=c.i64.of_float(Date.now()),c.resolve()):c.resolve()},function(e){return d[11]=new c.Map(),d[11].set("thread_key",a[0]),d[11].set("is_stale",d[10]),d[11].set("client_seq_id",d[7]),d[11].set("sync_params_encoded",d[3]),d[11].set("client_last_sync_timestamp_ms",d[8]),d[11].set("sync_group",d[0]),d[11].set("last_message_timestamp_ms",d[4]),d[12]=d[11].get("thread_key"),d[11],d[13]=c.toJSON(d[11]),c.storedProcedure(b("LSIssueNewTaskWithExtraOperations"),["report_thread_view_open","_",c.i64.to_string(d[12])].join(""),c.i64.cast([0,605]),d[13],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),void 0,c.i64.cast([0,0]))}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSReportThreadViewOpenStoredProcedure",["LSReportThreadViewOpen","cr:8709"],(function(a,b,c,d,e,f,g){function a(a,b){var d=[];d[0]=b.threadKey;return c("LSReportThreadViewOpen").apply(void 0,d.concat([a]))}g["default"]=a}),98);
__d("LSThreadPointQueryTTRCStatus",[],(function(a,b,c,d,e,f){a=Object.freeze({COMPLETED:1,SKIPPED:2});f["default"]=a}),66);
__d("MWCMInboxHeaderCommunityGroupName.react",["fbt","CometPageletWithDiv.react","I64","MWCMThreadTypes.react","PresenceStatusContext","Promise","cr:8940","react","useCommunityFolder"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=j||(j=d("react")),m=j.useContext;function n(a){return a}function o(a){var e,f=a.renderWrapper;a=a.thread;f=f!=null?f:n;var g=c("useCommunityFolder")(a),j=m(c("PresenceStatusContext"));e=(e=b("cr:8940")==null?void 0:b("cr:8940")(a.threadKey))!=null?e:(k||(k=d("I64"))).neg_one;if(g==null)throw(i||(i=b("Promise"))).resolve();var o=a.cannotReplyReason==="broadcast_chat_read_only",p=d("MWCMThreadTypes.react").isBroadcastThread(a.threadType)&&!o?h._("__JHASH__2Tijp2ORsFi__JHASH__"):d("MWCMThreadTypes.react").isPrivateThread(a.threadType)?h._("__JHASH__AR0EXhdbXqJ__JHASH__"):null;return f((k||(k=d("I64"))).gt(e,(k||(k=d("I64"))).zero)&&j.getChatVisibility()?l.jsx(l.Fragment,{children:h._("__JHASH__zBhIvI5rTRs__JHASH__",[h._plural((k||(k=d("I64"))).to_int32(e),"number")])}):d("MWCMThreadTypes.react").isBroadcastThread(a.threadType)&&!o?l.jsxs(l.Fragment,{children:[p," ",p!=null?"\u2022":null," ",g.name]}):l.jsxs(l.Fragment,{children:[g.name," ",p!=null?"\u2022":null," ",p]}))}o.displayName=o.name+" [from "+f.id+"]";function a(a){return l.jsx(d("CometPageletWithDiv.react").Placeholder,{className:"x193iq5w",fallback:null,name:"MWCMInboxHeaderCommunityGroupName",children:l.jsx(o,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("MWCMSelectiveSyncTTRCQPLLoggingUtils",["I64","QPLUserFlow","ReQL","ReQLSuspense","qpl","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=c("qpl")._(25310806,"1365");function a(a){var b,e=(i||(i=c("useReStore")))();b=(b=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableAscending(e.tables.messages.index("messageDisplayOrder")).getKeyRange(a).take(20)},[e,a],f.id+":35"))!=null?b:[];return b}function b(a){var b=(i||(i=c("useReStore")))(),e=d("ReQLSuspense").useFirst(function(){return d("ReQL").fromTableAscending(b.tables.thread_point_query_ttrc).getKeyRange(a)},[b,a],f.id+":48");if(e!=null)return e}function e(a,b,d){c("QPLUserFlow").endSuccess(j,{annotations:{string:{hasMessageDataChanged:b,status:"completed"}},instanceKey:a,timestamp:(b=d)!=null?b:void 0})}function k(a,b,e,f){c("QPLUserFlow").start(j,{annotations:{string:{thread_id:(h||(h=d("I64"))).to_string(b),thread_subtype:f?(h||(h=d("I64"))).to_string(f):null,thread_type:h.to_string(e)}},instanceKey:a})}function l(a,b){c("QPLUserFlow").addPoint(j,b,{instanceKey:a})}function m(a){c("QPLUserFlow").addPoint(j,"selective_sync_remediation_end",{instanceKey:a}),c("QPLUserFlow").endSuccess(j,{annotations:{string:{status:"skipped"}},instanceKey:a})}function n(a,b){return a.length!==b.length?!1:!a.some(function(a,c){c=b[c];c.text;c=babelHelpers.objectWithoutPropertiesLoose(c,["text"]);a.text;a=babelHelpers.objectWithoutPropertiesLoose(a,["text"]);if(JSON.stringify(c)!==JSON.stringify(a))return!0})}g.useLast20Messages=a;g.useTPQEntry=b;g.logCompleteEndSuccess=e;g.logEventStreamStart=k;g.logPoint=l;g.logSkippedEndSuccess=m;g.isMessageDataUnchanged=n}),98);
__d("SelectiveSyncTTRCLogger.react",["CometPlaceholder.react","I64","Int64Hooks","LSIntEnum","LSThreadPointQueryTTRCStatus","MWCMSelectiveSyncTTRCQPLLoggingUtils","Random","ReQL","ReQLSuspense","areEqual","react","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l,m=l||(l=d("react")),n=l.useRef;function o(a){var b=a.instanceKey,e=a.isReportThreadViewOpenSprocCalled,g=a.reportThreadViewOpenCalledTimestamp,l=a.setInstanceKey,m=a.threadKey,o=a.threadSubtype,p=a.threadType,q=n(!1);a=(h||(h=c("useReStore")))();var r=d("ReQLSuspense").toArray(d("ReQL").fromTableDescending(a.tables.messages.index("messageDisplayOrder")).getKeyRange(m).take(20),f.id+":56"),s=d("ReQLSuspense").toArray(d("ReQL").fromTableDescending(a.tables.reactions).getKeyRange(m).take(20),f.id+":61"),t=d("ReQLSuspense").toArray(d("ReQL").fromTableDescending(a.tables.reactions_v2).getKeyRange(m).take(20),f.id+":64");d("Int64Hooks").useEffectInt64(function(){e===!1&&(q.current=!0,d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logEventStreamStart(b,m,p,o))},[b,e,g,m,o,p]);var u=n(r),v=n(s),w=n(t),x=d("MWCMSelectiveSyncTTRCQPLLoggingUtils").useTPQEntry(m);d("Int64Hooks").useEffectInt64(function(){var a=x==null?void 0:x.status,e=x==null?void 0:x.deltaInsertionTimestampMs,f=x==null?void 0:x.dasmExecutionTimestampMs;if(q.current===!0&&g!==0)if(a&&(j||(j=d("I64"))).equal(a,(k||(k=d("LSIntEnum"))).ofNumber(c("LSThreadPointQueryTTRCStatus").SKIPPED)))d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logSkippedEndSuccess(b),q.current=!1,l(c("Random").uint32());else if(a!=null&&(j||(j=d("I64"))).equal(a,(k||(k=d("LSIntEnum"))).ofNumber(c("LSThreadPointQueryTTRCStatus").COMPLETED))&&e!=null&&(j||(j=d("I64"))).to_float(e)>g){d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logPoint(b,"selective_sync_remediation_end");a=!d("MWCMSelectiveSyncTTRCQPLLoggingUtils").isMessageDataUnchanged(u.current,r);var h=!(i||(i=c("areEqual")))(v.current,s),m=!i(w.current,t);a||h||m?d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logCompleteEndSuccess(b,"true",f!=null?(j||(j=d("I64"))).to_float(f):void 0):d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logCompleteEndSuccess(b,"false",e!=null?(j||(j=d("I64"))).to_float(e):void 0);u.current=r;v.current=s;w.current=t;q.current=!1;l(c("Random").uint32())}},[b,r,s,t,g,l,x]);return null}o.displayName=o.name+" [from "+f.id+"]";function a(a){return m.jsx(c("CometPlaceholder.react"),{fallback:null,children:m.jsx(o,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useReportThreadViewOpenDebounced",["LSFactory","LSReportThreadViewOpenStoredProcedure","promiseDone","useDebouncedComet","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){var d=(h||(h=c("useReStore")))();return c("useDebouncedComet")(function(){c("promiseDone")(d.runInTransaction(function(b){return c("LSReportThreadViewOpenStoredProcedure")(c("LSFactory")(b),{threadKey:a})},"readwrite",void 0,void 0,f.id+":33"))},{leading:!0,wait:b})}g["default"]=a}),98);
__d("useMWReportThreadOpenOnMountAndFocusWithLogger",["GroupsCometChatsEngagementLogger","I64","Int64Hooks","LSMessagingThreadTypeUtil","MWCMIsAnyCMThread","MWCMSelectiveSyncTTRCQPLLoggingUtils","MetaConfig","Random","SelectiveSyncTTRCLogger.react","ServerTime","VisibilityAPI","react","useReStore","useReportThreadViewOpenDebounced"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));b=j;var l=b.useRef,m=b.useState,n=c("MetaConfig")._("43");function a(a,b){var e=(h||(h=c("useReStore")))(),f=m(0),g=f[0],j=f[1];f=m(d("Random").uint32());var o=f[0];f=f[1];var p=c("MWCMIsAnyCMThread")(a.threadType),q=l(!1),r=p||c("MetaConfig")._("55")&&(d("LSMessagingThreadTypeUtil").isSocialChannelV2(a.threadType)||d("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(a.threadType)),s=c("useReportThreadViewOpenDebounced")(a.threadKey,(b=b)!=null?b:n);d("Int64Hooks").useEffectInt64(function(){var b=null;r&&(b=d("VisibilityAPI").onVisibilityChange(function(){d("VisibilityAPI").isVisibilityHidden()||s()}),p&&d("GroupsCometChatsEngagementLogger").log({action:"background_effect",community_id:(i||(i=d("I64"))).to_string(a.parentThreadKey),event:"report_thread_view_open",source:"blended_threadlist_community_tab",surface:"thread_view",thread_id:(i||(i=d("I64"))).to_string(a.threadKey)}),q.current===!1&&(j(d("ServerTime").getMillis()),q.current=!0,d("MWCMSelectiveSyncTTRCQPLLoggingUtils").logPoint(o,"selective_sync_remediation_start"),s()));return function(){b!=null&&d("VisibilityAPI").removeVisibiltyChangeListener(b)}},[e,a.parentThreadKey,a.threadKey,a.threadType,p,o,r,s]);return r?k.jsx(c("SelectiveSyncTTRCLogger.react"),{instanceKey:o,isReportThreadViewOpenSprocCalled:q.current,reportThreadViewOpenCalledTimestamp:g,setInstanceKey:f,threadKey:a.threadKey,threadSubtype:a.threadSubtype,threadType:a.threadType}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);