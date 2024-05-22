;/*FB_PKG_DELIM*/

__d("LSDeleteMessage",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.filter(b.db.table(12).fetch([[[a[1]]],"messageId"]),function(c){return c.messageId===a[1]&&b.i64.eq(c.threadKey,a[0])}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSFetchBanners",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return d[0]=new c.Map(),d[0].set("thread_key",a[0]),d[1]=c.toJSON(d[0]),c.storedProcedure(b("LSIssueNewTask"),"in_thread_banner_fetch_activity_banners_queue",c.i64.cast([0,72]),d[1],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]))},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSGenerateTraceId",["LSRequestId","MetaConfig"],(function(a,b,c,d,e,f,g){"use strict";function a(){if(c("MetaConfig")._("62"))return c("LSRequestId").generate();else return void 0}g["default"]=a}),98);
__d("LSSetPinnedMessage",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(e){return d[0]=new c.Map(),d[0].set("thread_key",a[0]),d[0].set("message_id",a[1]),d[0].set("pinned_message_state",a[3]),d[1]=c.toJSON(d[0]),c.storedProcedure(b("LSIssueNewTask"),"set_pinned_message_search",c.i64.cast([0,751]),d[1],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]))},function(b){return c.i64.eq(a[3],c.i64.cast([0,1]))?c.sequence([function(b){return c.forEach(c.db.table(205).fetch([[[a[0],a[1]]]]),function(a){return a["delete"]()})},function(b){return c.forEach(c.filter(c.db.table(205).fetch([[[a[0],a[1],a[2]]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&b.messageId===a[1]&&c.i64.eq(b.pinnedTimestampMs,a[2])&&c.i64.lt(b.authorityLevel,c.i64.cast([0,80]))}),function(a){return a["delete"]()})},function(b){return c.db.table(205).add({threadKey:a[0],messageId:a[1],pinnedTimestampMs:a[2],authorityLevel:c.i64.cast([0,80])})}]):c.forEach(c.db.table(205).fetch([[[a[0],a[1]]]]),function(a){return a["delete"]()})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSUpdateMessageSubThreadKey",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.db.table(12).fetch([[[a[0]]],"messageId"]),function(b){var c=b.update;b.item;return c({subthreadKey:a[1]})})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpdateOrInsertReactionV2",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(d){return b.db.table(226).fetch([[[a[0],a[1],a[2]]]]).next().then(function(d,e){var f=d.done;d=d.value;return f?b.db.table(12).fetch([[[a[1]]],"messageId"]).next().then(function(d,e){var c=d.done;d=d.value;return c?0:(e=d.item,b.sequence([function(c){return b.forEach(b.filter(b.db.table(226).fetch([[[a[0],a[1],a[2]]],"optimistic"]),function(c){return b.i64.eq(c.threadKey,a[0])&&c.messageId===a[1]&&b.i64.eq(c.reactionFbid,a[2])&&b.i64.lt(c.authorityLevel,a[5])}),function(a){return a["delete"]()})},function(c){return b.db.table(226).add({messageId:a[1],threadKey:a[0],reactionFbid:a[2],messageTimestamp:e.timestampMs,authorityLevel:a[5],count:a[4],viewerIsReactor:a[6],viewerReactionTimestampMs:a[7],lastUpdatedTimestampMs:a[8]})}]))}):(e=d.item,c[2]=e.lastUpdatedTimestampMs,c[1]=e.authorityLevel,b.i64.eq(a[5],b.i64.cast([0,20]))||b.i64.eq(c[1],b.i64.cast([0,80]))&&b.i64.eq(a[5],b.i64.cast([0,80]))||b.i64.eq(c[1],b.i64.cast([0,20]))&&b.i64.eq(a[5],b.i64.cast([0,80]))&&b.i64.le(b.i64.add(c[2],b.i64.cast([0,2e3])),a[8])||b.i64.eq(c[1],b.i64.cast([0,20]))&&b.i64.eq(a[5],b.i64.cast([0,60]))||b.i64.eq(c[1],b.i64.cast([0,60]))&&b.i64.eq(a[5],b.i64.cast([0,80]))&&b.i64.le(c[2],a[8])?c[3]=!0:c[3]=!1,c[3]?b.db.table(226).put({messageId:a[1],threadKey:a[0],reactionFbid:a[2],messageTimestamp:e.messageTimestamp,reactionLiteral:a[3],count:a[4],authorityLevel:a[5],viewerIsReactor:a[6],viewerReactionTimestampMs:b.i64.cast([0,0]),lastUpdatedTimestampMs:a[8]}):b.resolve())})},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSUpsertReaction",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(8).put({threadKey:a[0],messageId:a[2],actorId:a[3],timestampMs:a[1],reaction:a[4],authorityLevel:a[5],reactionCreationTimestampMs:a[6]})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("defaultMWPThreadTheme",["I64","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h;a=c("gkx")("24125")?{backgroundGradientColors:[],incomingGradientColors:[],outgoingGradientColors:[{color:(h||(h=d("I64"))).of_string("-5635841"),gradientIndex:(h||(h=d("I64"))).of_string("0"),themeFbid:(h||(h=d("I64"))).of_string("3259963564026002"),type_:(h||(h=d("I64"))).of_string("0")},{color:(h||(h=d("I64"))).of_string("-16744193"),gradientIndex:(h||(h=d("I64"))).of_string("1"),themeFbid:(h||(h=d("I64"))).of_string("3259963564026002"),type_:(h||(h=d("I64"))).of_string("0")}],threadTheme:{accessibilityLabel:"Default",appColorMode:(h||(h=d("I64"))).of_string("1"),fallbackColor:(h||(h=d("I64"))).of_string("-11645963"),fbid:(h||(h=d("I64"))).of_string("3259963564026002"),isDeprecated:!1,normalThemeId:(h||(h=d("I64"))).of_string("3259963564026002"),reverseGradiantsForRadial:!1,themeIdx:(h||(h=d("I64"))).of_string("275")}}:{backgroundGradientColors:[],incomingGradientColors:[],outgoingGradientColors:[],threadTheme:{accessibilityLabel:"Default Blue",appColorMode:(h||(h=d("I64"))).zero,fallbackColor:c("gkx")("23219")?(h||(h=d("I64"))).of_string("687359"):(h||(h=d("I64"))).of_string("-16743169"),fbid:(h||(h=d("I64"))).of_string("196241301102133"),isDeprecated:!1,normalThemeId:(h||(h=d("I64"))).zero,reverseGradiantsForRadial:!1,themeIdx:(h||(h=d("I64"))).of_string("94")}};g.defaultThemeWithColors=a}),98);
__d("MWPThreadThemeContext",["defaultMWPThreadTheme","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=(h||d("react")).createContext;b=babelHelpers["extends"]({},d("defaultMWPThreadTheme").defaultThemeWithColors,{previewId:void 0,setPreviewId:c("emptyFunction")});e=a(b);g.defaultContextValue=b;g.MWPThreadThemeContext=e}),98);
__d("MessengerDiscoverableBroadcastChatsClientEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("4148");b=d("FalcoLoggerInternal").create("messenger_discoverable_broadcast_chats_client_events",a);e=b;g["default"]=e}),98);
__d("WebUserFlowLoggingDataContextProvider.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;c=b.createContext;var j=b.useMemo,k=b.useRef,l=c({loggingDataRef:{current:{}},setLoggingData:function(){}});function a(a){a=a.children;var b=k({}),c=function(a){b.current=a},d=j(function(){return{loggingDataRef:b,setLoggingData:c}},[]);return i.jsx(l.Provider,{value:d,children:a})}a.displayName=a.name+" [from "+f.id+"]";g.WebUserFlowLoggingDataContext=l;g.WebUserFlowLoggingDataContextProvider=a}),98);
__d("coerceMessagingThreadTypeToLSThreadType",["LSIntEnum"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){return(h||(h=d("LSIntEnum"))).unwrapIntEnum(a)}g["default"]=a}),98);
__d("useMWEntrypoint",["MWLSThreadDisplayContext"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(),b="inbox";switch(a){case"ChatTab":b="popup_chat_box";break;case"RoomsSideChat":b="rooms_lobby";break}return b}g["default"]=a}),98);
__d("useMWLSDefaultThreadSource",["LSThreadAttributionTypeUtil","react","useLSMessagingSource"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(){var a=c("useLSMessagingSource")();return i(function(b){return d("LSThreadAttributionTypeUtil").getSource(b,a)},[a])}g["default"]=a}),98);
__d("useMWPThreadTheme",["MWPThreadThemeContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(d("MWPThreadThemeContext").MWPThreadThemeContext)}g["default"]=a}),98);
__d("useMWXConfirmationDialog",["fbt","JSResourceForInteraction","react","useMWXLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||d("react")).useCallback,k=c("JSResourceForInteraction")("MWXConfirmationDialog.react").__setRef("useMWXConfirmationDialog");function a(){var a=c("useMWXLazyDialog")(k),b=a[0];return j(function(a,c,d){var e=a.cancel;e=e===void 0?h._("__JHASH__ko1T7DvDF-J__JHASH__"):e;var f=a.confirm;f=f===void 0?h._("__JHASH__Yske7OqlYXF__JHASH__"):f;a=babelHelpers.objectWithoutPropertiesLoose(a,["cancel","confirm"]);b(babelHelpers["extends"]({cancel:e,confirm:f},a),function(a){return a?c():d==null?void 0:d()})},[b])}g["default"]=a}),226);