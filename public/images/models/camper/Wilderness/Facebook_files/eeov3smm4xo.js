;/*FB_PKG_DELIM*/

__d("BPlusTree",["unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h={gt:[!1,0],gte:[!0,0],lt:[!0,1],lte:[!1,1]};a=function(){function a(a,b){b===void 0&&(b=32),this.$3={children:[],isLeaf:!0,keys:[]},this.$4=this.$3,this.$5=this.$3,this.$1=a,this.$2=b}a.fromSorted=function(a,b,c){b=new this(b,c);c=a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();a=c.next();while(!a.done){var d=[],e=b.$5,f;while(!e.isLeaf)d.push([e,-1]),f=e.keys.length,e=e.children[f];f=(b.$2-1)*2;f=f-e.keys.length;while(!a.done&&f>0)e.keys.push(a.value[0]),e.children.push(a.value[1]),f--,a=c.next();b.$6(e,d,!0)}return b};var b=a.prototype;b.$7=function(a,b){var c=this.$5,d=-1;while(!c.isLeaf)b==null?void 0:b.push([c,d]),d=this.$8(c.keys,a,h.gt),d===-1&&(d=c.keys.length),c=c.children[d];return[c,d]};b.$8=function(a,b,c){var d=0,e=a.length-1;while(d<=e){var f=d+e>>1;(c[0]?this.$1(a[f],b)<0:this.$1(a[f],b)<=0)?d=f+1:e=f-1}f=[d,e][c[1]];return f===a.length?-1:f};b.$9=function(a,b){if(!a.length){a.push(b);return[0,0]}var c=this.$8(a,b,h.gte);if(c===-1)return[a.push(b)-1,0];else if(this.$1(a[c],b)===0)return[c,1];a.splice(c,0,b);return[c,0]};b.$6=function(a,b,c){for(var a=a,d;a.keys.length>=this.$2;a=d){var d=b.pop()||[this.$5={children:[a],isLeaf:!1,keys:[]}];d=d[0];var e=Math.floor(a.keys.length/2),f=void 0;a.isLeaf?(f=a.next={children:a.children.slice(e),isLeaf:!0,keys:a.keys.slice(e),next:a.next,prev:a},f.next?f.next.prev=f:this.$4=f):f={children:a.children.slice(e+1),isLeaf:!1,keys:a.keys.slice(e+1)};if(c)d.keys.push(a.keys[e]),d.children.push(f);else{var g=this.$9(d.keys,a.keys[e]);g=g[0];d.children.splice(g+1,0,f)}a.keys.length=e;a.children.length=e+(a.isLeaf?0:1)}};b.clear=function(){this.$5=this.$3=this.$4={children:[],isLeaf:!0,keys:[]}};b.delete=function(a){var b=Math.floor(this.$2/2),d=[],e=this.$7(a,d),f=e[0];e=e[1];var g=this.$8(f.keys,a,h.gte);if(g===-1||this.$1(f.keys[g],a)!==0)return!1;f.keys.splice(g,1);f.children.splice(g,1);for(var a=f,g=e,e,f;a.keys.length<b&&d.length;o=[e,f],a=o[0],g=o[1],o){f=d.pop();e=f[0];f=f[1];var i=[[e.children[g-1],a,g-1],[a,e.children[g+1],g]].filter(function(a){var b=a[0];a=a[1];return b&&a});for(var j of i){var k=j[0],l=j[1],m=j[2];if(k.keys.length+l.keys.length>=b*2){if(a.isLeaf){var n=[].concat(k.children,l.children),o=[].concat(k.keys,l.keys);k.children=(l.children=n).splice(0,b);k.keys=(l.keys=o).splice(0,b);e.keys[m]=o[0]}else{n=[].concat(k.children,l.children);o=[].concat(k.keys,[e.keys[m]],l.keys);k.children=(l.children=n).splice(0,b+1);e.keys[m]=o.splice(b,1)[0];k.keys=(l.keys=o).splice(0,b)}return!0}}for(n of i){m=n[0];k=n[1];l=n[2];m.children=[].concat(m.children,k.children);a.isLeaf?(m.keys=[].concat(m.keys,k.keys),k.keys.length=0,k.next?k.next.prev=m:this.$4=m,m.next=k.next):m.keys=[].concat(m.keys,[e.keys[l]],k.keys);e.keys.splice(l,1);e.children.splice(l+1,1);break}}if(!this.$5.keys.length&&this.$5.children.length){j=this.$5;if(j.isLeaf)throw c("unrecoverableViolation")("cannot be leaf","messenger_web_product");this.$5=j.children[0]}return!0};b.entries=function*(a){a=a===void 0?{}:a;var b=a.dir;b=b===void 0?"asc":b;a=babelHelpers.objectWithoutPropertiesLoose(a,["dir"]);if(Object.prototype.hasOwnProperty.call(a,"gt")&&Object.prototype.hasOwnProperty.call(a,"gte"))throw c("unrecoverableViolation")("cannot specify both greater than and greater than or equal","messenger_web_product");if(Object.prototype.hasOwnProperty.call(a,"lt")&&Object.prototype.hasOwnProperty.call(a,"lte"))throw c("unrecoverableViolation")("cannot specify both less than and less than or equal","messenger_web_product");if(b==="asc"){if(Object.prototype.hasOwnProperty.call(a,"gt")){b=this.$7(a.gt);b=b[0]}else if(Object.prototype.hasOwnProperty.call(a,"gte")){var d=this.$7(a.gte);b=d[0]}else b=this.$3;d=Object.prototype.hasOwnProperty.call(a,"gt")?this.$8(b.keys,a.gt,h.gt):Object.prototype.hasOwnProperty.call(a,"gte")?this.$8(b.keys,a.gte,h.gte):0;while(b){var e=b;while(d!==-1&&d<e.keys.length){var f=e.keys[d];if(Object.prototype.hasOwnProperty.call(a,"lt")&&this.$1(f,a.lt)>=0||Object.prototype.hasOwnProperty.call(a,"lte")&&this.$1(f,a.lte)>0)return;var g=(yield [e.keys[d],e.children[d]]);if(g!=null){if(this.$1(g,f)<=0)throw c("unrecoverableViolation")("key must be greater than current key","messenger_web_product");d=this.$8(e.keys,g,h.gte);if(d===-1){var i=this.$7(g);e=i[0];d=this.$8(e.keys,g,h.gte)}}else{i=e.keys[d]!==f;if(i){d=this.$8(e.keys,f,h.lte);if(d===-1){g=this.$7(f);e=g[0];d=this.$8(e.keys,f,h.lte)}}d++}}b=e.next;d=0}}else{if(Object.prototype.hasOwnProperty.call(a,"lt")){i=this.$7(a.lt);b=i[0]}else if(Object.prototype.hasOwnProperty.call(a,"lte")){g=this.$7(a.lte);b=g[0]}else b=this.$4;f=Object.prototype.hasOwnProperty.call(a,"lt")?this.$8(b.keys,a.lt,h.lt):Object.prototype.hasOwnProperty.call(a,"lte")?this.$8(b.keys,a.lte,h.lte):b.keys.length-1;while(b){e=b;while(f!==-1&&f>=0){d=e.keys[f];if(Object.prototype.hasOwnProperty.call(a,"gt")&&this.$1(d,a.gt)<=0||Object.prototype.hasOwnProperty.call(a,"gte")&&this.$1(d,a.gte)<0)return;i=(yield [e.keys[f],e.children[f]]);if(i!=null){if(this.$1(i,d)>=0)throw c("unrecoverableViolation")("key must be less than current key","messenger_web_product");f=this.$8(e.keys,i,h.lte);if(f===-1){g=this.$7(i);e=g[0];f=this.$8(e.keys,i,h.lte)}}else{g=e.keys[f]!==d;if(g){f=this.$8(e.keys,d,h.gte);if(f===-1){i=this.$7(d);e=i[0];f=this.$8(e.keys,d,h.gte)}}f--}}b=e.prev;f=b!=null?b.keys.length-1:-1}}};b.get=function(a){var b=this.$7(a);b=b[0];var d=this.$8(b.keys,a,h.gte);if(d===-1||this.$1(b.keys[d],a)!==0)throw c("unrecoverableViolation")("key not found: "+String(a),"messenger_web_product");return b.children[d]};b.getWithDefault=function(a,b){var c=this.$7(a);c=c[0];var d=this.$8(c.keys,a,h.gte);return d===-1||this.$1(c.keys[d],a)!==0?b:c.children[d]};b.has=function(a){var b=this,c=this.$7(a);c=c[0];return c.keys.findIndex(function(c){return b.$1(a,c)===0})!==-1};b.set=function(a,b){var c=[],d=this.$7(a,c);d=d[0];a=this.$9(d.keys,a);var e=a[0];a=a[1];d.children.splice(e,a,b);this.$6(d,c,!1);return this};return a}();g.default=a}),98);
__d("GetLsDatabaseForComet",["asyncToGeneratorRuntime","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("GetLsDatabase").__setRef("GetLsDatabaseForComet");function a(){return i.apply(this,arguments)}function i(){i=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){var a=(yield h.load());return a.get()});return i.apply(this,arguments)}g.get=a}),98);
__d("LSPersistedDbGating",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("gkx")("24032");b=c("gkx")("24032");g.anyTablesPersisted=a;g.allTablesPersisted=b}),98);
__d("LSPlatformLsInitLog",["ErrorGuard","ExecutionEnvironment","QPLUserFlow","gkx","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=c("qpl")._(25305590,"1127"),k=!1,l=!1,m=[],n=c("gkx")("23405"),o=c("gkx")("22799");function a(a){k||(k=!0,l=!1,(h||(h=c("ExecutionEnvironment"))).isInWorker||a===!1?c("QPLUserFlow").start(j,{annotations:{bool:{isArmadilloPublicLaunchUser:n,mComPreInitLoad:o}},cancelOnUnload:!0,timeoutInMs:6e4}):c("QPLUserFlow").startFromNavStart(j,{annotations:{bool:{isArmadilloPublicLaunchUser:n,mComPreInitLoad:o}},cancelOnUnload:!0,onFlowTimeout:s,timeoutInMs:(h||(h=c("ExecutionEnvironment"))).canUseDOM?6e4:0}))}function p(a,b,d){r()&&(c("QPLUserFlow").addPoint(a,((h||(h=c("ExecutionEnvironment"))).isInWorker?"worker_":"")+b),d!=null&&c("QPLUserFlow").addAnnotations(a,d))}function q(a){c("QPLUserFlow").addAnnotations(j,a)}function b(a,b){p(j,a,b)}function d(){r()&&(l=!0,c("QPLUserFlow").endSuccess(j),s())}function e(a,b){l=!0,c("QPLUserFlow").endFailure(j,a,{error:b}),s()}function r(){return k&&!l}function s(){for(var a=0;a<m.length;a++){var b=m[a];(i||(i=c("ErrorGuard"))).applyWithGuard(b,null,[])}}function f(a){m.push(a)}var t={addAnnotations:function(a){var b=a.bool,c=a["int"];a=a.string;q({bool:b,"int":c,string:a})},addPoint:b,addPointForEvent:p,endFail:e,endSuccess:d,isPending:r,onCompleteOrFail:f,start:a};g.start=a;g.addPointForEvent=p;g.addAnnotations=q;g.addPoint=b;g.endSuccess=d;g.fail=e;g.isPending=r;g.onCompleteOrFail=f;g.lsInitLogger=t}),98);
__d("MWLSDatabaseNames",[],(function(a,b,c,d,e,f){"use strict";a="LightSpeed";b=a+"V3";f.name=a;f.lightspeedPrefix=b}),66);
__d("MWIndexedDBDelete",["ExecutionEnvironment","FBLogger","MAWCurrentUser","MWLSDatabaseNames","ODS","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function j(a){try{if(a===1)return""+d("MWLSDatabaseNames").name+d("MAWCurrentUser").getID();else return d("MWLSDatabaseNames").name+"V"+a+d("MAWCurrentUser").getID()}catch(a){return null}}function a(a){var b;if((i||(i=c("ExecutionEnvironment"))).canUseDOM&&((b=window)==null?void 0:b.indexedDB)!=null){var e=j(a);if(e!=null)if(typeof window.indexedDB.databases==="function"){b=window.indexedDB.databases();b.then(function(a){a.forEach(function(a){var b=a.name||"";if(b===e){a=window.indexedDB.deleteDatabase(b);a.onsuccess=function(){c("FBLogger")("messenger_web_product").info("MW PDB deletion success for "+b)};a.onblocked=function(){c("recoverableViolation")("[db clean up patch] Cannot delete db: blocked","messenger_web_product"),(h||(h=d("ODS"))).bumpEntityKey(3185,"mw_pdb_delete","blocked")};a.onerror=function(){(h||(h=d("ODS"))).bumpEntityKey(3185,"mw_pdb_delete","error"),c("recoverableViolation")("[pdb clean up patch] Cannot delete db","messenger_web_product")}}})})["catch"](function(a){c("recoverableViolation")("[pdb clean up patch] LS delete databases error","messenger_web_product",{error:a})})}else{a=window.indexedDB.deleteDatabase(e);a.onsuccess=function(){(h||(h=d("ODS"))).bumpEntityKey(3185,"mw_pdb_delete","success_v2")};a.onblocked=function(){c("recoverableViolation")("[db clean up patch v2] Cannot delete db: blocked","messenger_web_product"),(h||(h=d("ODS"))).bumpEntityKey(3185,"mw_pdb_delete","blocked_v2")};a.onerror=function(){(h||(h=d("ODS"))).bumpEntityKey(3185,"mw_pdb_delete","error_v2"),c("recoverableViolation")("[pdb clean up patch v2] Cannot delete db","messenger_web_product")}}}}g.getUserDbNameForVersion=j;g.deleteAllDBs=a}),98);
__d("LSLogHistory",["FBLogger","performance"],(function(a,b,c,d,e,f,g){"use strict";var h,i={},j={client_init:100,client_sync:50,client_task:20,db_dump:200,db_init:100,general:50,ls:50,maw_setup:10,user_experience:200},k=10;function a(){try{return Object.values(i).reduce(function(a,b){return a.concat(b)},[]).sort(function(a,b){return a.date-b.date}).map(function(a){return[a.date.toString(),a.level,a.category,a.event,a.args].join(" | ")})}catch(a){c("FBLogger")("messenger_browser_clients").catching(a).mustfix("getEntries failed");return[[Date.now().toString(),"error","general","lightspeed_log_event","cannot create entries"].join(" | ")]}}function b(){i={}}function d(a,b,d,e){var f;d===void 0&&(d="general");e===void 0&&(e="lightspeed_log_event");var g;(h||(h=c("performance"))).timing!=null?g=Math.round((h||(h=c("performance"))).timing.navigationStart+h.now()):g=Date.now();i[d]==null&&(i[d]=[]);i[d].length>=((f=j[d])!=null?f:k)&&i[d].shift();i[d].push({args:a,category:d,date:g,event:e,level:b})}g.MAX_LIMIT=j;g.getEntries=a;g.clearEntries=b;g.log=d}),98);
__d("MessengerSimpleLogHistoryFactory",["LSLogHistory"],(function(a,b,c,d,e,f,g){"use strict";a={getInstance:function(a){return{debug:function(b,c){d("LSLogHistory").log(b,"debug",a,c)},error:function(b,c){d("LSLogHistory").log(b,"error",a,c)}}}};g.simpleFactory=a}),98);
__d("MessengerBroadcastLogHistoryFactory",["FBLogger","MessengerSimpleLogHistoryFactory","pageID"],(function(a,b,c,d,e,f,g){"use strict";var h=function(a,b){var e=this;this.listener=function(a){var b=d("MessengerSimpleLogHistoryFactory").simpleFactory.getInstance(e.$1);a.level==="error"&&b.error(a.message,"from_"+a.page);a.level==="debug"&&b.debug(a.message,"from_"+a.page)};this.debug=function(a){for(var b=arguments.length,f=new Array(b>1?b-1:0),g=1;g<b;g++)f[g-1]=arguments[g];try{d("MessengerSimpleLogHistoryFactory").simpleFactory.getInstance(e.$1).debug(a),e.$2({args:f,category:e.$1,level:"debug",message:a,page:c("pageID")})}catch(a){c("FBLogger")("messenger_web_product").catching(a).warn("MessengerLogHistory debug")}};this.error=function(a){for(var b=arguments.length,f=new Array(b>1?b-1:0),g=1;g<b;g++)f[g-1]=arguments[g];try{d("MessengerSimpleLogHistoryFactory").simpleFactory.getInstance(e.$1).error(a),e.$2({args:f,category:e.$1,level:"error",message:a,page:c("pageID")})}catch(a){c("FBLogger")("messenger_web_product").catching(a).warn("MessengerLogHistory error")}};this.$1=a;this.$2=b};a=function(){function a(){var a=this,b;this.$1={};this.$3="ls_log_history";this.$4=function(b){var c,d=b.args,e=b.category,f=b.level,g=b.message;b=b.page;(c=a.$2)==null?void 0:c.postMessage({args:d,category:e,level:f,message:g,page:b})};this.$2=self.BroadcastChannel!=null?new self.BroadcastChannel(this.$3):null;(b=this.$2)==null?void 0:b.addEventListener("message",function(b){b=b.data;if((b==null?void 0:b.category)!=null){var c=a.$1[b==null?void 0:b.category];c==null?void 0:c.listener(b)}})}var b=a.prototype;b.getInstance=function(a){this.$1[a]||(this.$1[a]=new h(a,this.$4));return this.$1[a]};return a}();g["default"]=a}),98);
__d("MessengerLogHistory",["MessengerSimpleLogHistoryFactory"],(function(a,b,c,d,e,f,g){"use strict";var h={},i=d("MessengerSimpleLogHistoryFactory").simpleFactory;function a(a){i=a}function b(a){h[a]||(h[a]=i.getInstance(a));return h[a]}g.setLogHistoryFactory=a;g.getInstance=b}),98);
__d("LSDatabaseSingleton",["CurrentUser","ExecutionEnvironment","FBLogger","InteractionTracing","LSPersistedDbGating","LSPlatformLsInitLog","MWIndexedDBDelete","MessengerBroadcastLogHistoryFactory","MessengerLogHistory","Promise","QE2Logger","QPLUserFlow","asyncToGeneratorRuntime","cr:1027","cr:123","cr:3411","cr:6587","gkx","justknobx","qpl","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i;d("LSPersistedDbGating").anyTablesPersisted&&d("MessengerLogHistory").setLogHistoryFactory(new(c("MessengerBroadcastLogHistoryFactory"))());var j=(a=b("cr:123"))!=null?a:b("cr:6587");d("QE2Logger").logExposureForUser("lightspeed_web_persisted_db");b("cr:1027")==null?void 0:b("cr:1027").overwriteSamplingRate();d("LSPlatformLsInitLog").start();e=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){c("gkx")("2790")&&((i||(i=c("ExecutionEnvironment"))).isInWorker||(i||(i=c("ExecutionEnvironment"))).isInSharedWorker)&&c("FBLogger")("messenger_browser_clients").mustfix("DbSingleton was called in a worker");var a=c("gkx")("26383");d("LSPlatformLsInitLog").addPoint("get_ls_database_start",{bool:{is_pdb:d("LSPersistedDbGating").anyTablesPersisted,loadDbEarlierEnabled:a}});c("InteractionTracing").getPendingInteractions().forEach(function(b){b.addMarkerPoint("get_ls_database_start","AppTiming"),b.addAnnotationBoolean("loadDbEarlierEnabled",a),b.addAnnotationBoolean("is_pdb",d("LSPersistedDbGating").anyTablesPersisted)});var e=(yield j.get());d("LSPlatformLsInitLog").addPoint("get_ls_database_end");c("InteractionTracing").getPendingInteractions().forEach(function(a){a.addMarkerPoint("get_ls_database_end","AppTiming")});try{var f=c("justknobx")._("541"),g=!d("LSPersistedDbGating").anyTablesPersisted;g&&f>0&&(d("LSPlatformLsInitLog").addPoint("should_delete_index_db_start",{"int":{versionToDelete:f}}),d("MWIndexedDBDelete").deleteAllDBs(f))}catch(a){c("recoverableViolation")("[db clean up patch] Cant delete db","messenger_web_product")}d("LSPlatformLsInitLog").addPoint("db_created");c("CurrentUser").isWorkUser()&&c("QPLUserFlow").addPoint(c("qpl")._(1036588047,"310"),"db_created");if(b("cr:3411")!==null)try{b("cr:3411").registerDb(e)}catch(a){c("FBLogger")("messenger_browser_clients").catching(a).mustfix("LSPlatformDevtools failed to register db.")}return e});return function(){return a.apply(this,arguments)}}();var k=(i||(i=c("ExecutionEnvironment"))).isInBrowser?e().then(function(a){k=a;return a}):new(h||(h=b("Promise")))(function(){c("FBLogger")("messenger_browser_clients").warn("ExecutionEnvironment.isInBrowser returned false, returning never ending promise")});f=function(){return k};a=(h||(h=b("Promise"))).resolve(k);g.getLSDatabaseSingletonPromiseOrValue=f;g.LSDatabaseSingleton=a}),98);
__d("LSDatabaseSingletonLazyWrapper",["LSDatabaseSingleton"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(){return(h||(h=d("LSDatabaseSingleton"))).LSDatabaseSingleton}g["default"]=a}),98);
__d("LSIssueNewError",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(d){return c[0]=b.i64.of_float(Date.now()),b.db.table(6).add({errorId:void 0,taskId:a[0],errorCode:a[1],errorTitleText:a[2],errorBodyText:a[3],issuedTimestampMs:c[0],errorExtraData:a[4],presentationStyle:a[5]})},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("MAWBridge",["WABridge"],(function(a,b,c,d,e,f,g){"use strict";function a(){return d("WABridge").getBridge()}g.getBridge=a}),98);
__d("MAWGetImageSpec",["MAWImageUtils","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";function c(b,c){var e=a.URL.createObjectURL(b);return d("MAWImageUtils").urlToFile(e,(e=c)!=null?e:b.type).then(function(a){var b=a.height;a=a.width;return{height:b,width:a}})}function e(a){return h.apply(this,arguments)}function h(){h=b("asyncToGeneratorRuntime").asyncToGenerator(function*(b){b=a.URL.createObjectURL(b);var c=(yield d("MAWImageUtils").urlToImageSpec(b));a.URL.revokeObjectURL(b);return c});return h.apply(this,arguments)}g.getImageSpec_DEPRECATED=c;g.getImageSpec=e}),98);
__d("PromiseOrValue",["isPromise","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){if((h||(h=c("isPromise")))(a)&&(h||(h=c("isPromise")))(b))return a.then(function(a){return b.then(function(b){return[a,b]})});if((h||(h=c("isPromise")))(a))return a.then(function(a){return[a,b]});return(h||(h=c("isPromise")))(b)?b.then(function(b){return[a,b]}):[a,b]}function b(a){var b=a.find(h||(h=c("isPromise")));return!b?a:Promise.all(a)}function d(a,b){return(h||(h=c("isPromise")))(a)?a.then(b):b(a)}function i(a,b){b=b;while(!0){var d=a(b);if((h||(h=c("isPromise")))(d))return d.then(function(b){return b.action==="break"?b.value:i(a,b.value)});if(d.action==="break")return d.value;b=d.value}throw c("unrecoverableViolation")("just for flow","messenger_web_product")}g.all2=a;g.all=b;g.map=d;g.loop=i}),98);
__d("ReStoreKeyComparer",["I64"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(a){if((h||(h=d("I64"))).isI64(a))return"I64";else if(Array.isArray(a))return"Array";else if(typeof a==="string")return"String";else if(typeof a==="number")return"Number";else if(typeof a==="boolean")return"Boolean";else if(a instanceof Date)return"Date";else if(typeof a==="object"&&a!=null)return"Object";else if(a==="undefined")return"Undefined";else if(a===null)return"Null";return"Unknown"}var j=function(b){babelHelpers.inheritsLoose(a,b);function a(a,c){a="Expected types to be the same but got "+i(a)+" and "+i(c);return b.call(this,a)||this}return a}(babelHelpers.wrapNativeSuper(Error)),k=function(b){babelHelpers.inheritsLoose(a,b);function a(a){a="Unexpected type "+i(a);return b.call(this,a)||this}return a}(babelHelpers.wrapNativeSuper(Error)),l=[[]];function m(a,b){var c=a===l,d=b===l;if(c&&d)return 0;if(c)return 1;if(d)return-1;if(a===null)return b===null?0:-1;else if(b===null)return 1;if(a===void 0)return b===void 0?0:-1;else if(b===void 0)return 1;if(Array.isArray(a)){if(!Array.isArray(b)){if(typeof b==="string")return 1;throw new j(a,b)}c=a[0];d=b[0];if(c<d)return-1;if(c>d)return 1;c=a[1];d=b[1];if(c<d)return-1;if(c>d)return 1}else if(typeof a==="string"){if(typeof b!=="string"){if(typeof b==="number"||b instanceof Date)return 1;if(Array.isArray(b))return-1;throw new j(a,b)}if(a<b)return-1;if(a>b)return 1}else if(typeof a==="number"){if(typeof b!=="number"){if(typeof b==="string")return-1;throw new j(a,b)}if(a<b)return-1;if(a>b)return 1}else if(a instanceof Date){if(!(b instanceof Date)){if(typeof b==="string")return-1;throw new j(a,b)}if(a<b)return-1;if(a>b)return 1}else if(typeof a==="boolean"){if(typeof b!=="boolean")throw new j(a,b);if(!a&&b)return-1;if(a&&!b)return 1}else throw new k(a);return 0}function n(a,b){var c;for(c=0;c<a.length&&c<b.length;c++){var d=m(a[c],b[c]);if(d!==0)return d}if(c<a.length)return 1;return c<b.length?-1:0}a=function(a,b){return n(b,a)};g.MAX_KEY=l;g.compareValue=m;g.compareKey=n;g.compareKeyDesc=a}),98);
__d("ReQLBounds",["ReStoreKeyComparer"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(a,b,c){return b.length<a?[].concat(b,[c]):b}function j(a,b){b===void 0&&(b=-1);return i(b,a,(h||(h=d("ReStoreKeyComparer"))).MAX_KEY)}function k(a,b,c){if(a!=null&&b!=null)return(h||(h=d("ReStoreKeyComparer"))).compareKey(a[1],b[1])*c>0?a[0]:b[0];if(a!=null)return a[0];if(b!=null)return b[0]}function l(a,b){return k((a==null?void 0:a.gt)!=null?[{gt:a.gt},j(a.gt)]:(a==null?void 0:a.gte)!=null?[{gte:a.gte},a.gte]:void 0,(b==null?void 0:b.gt)!=null?[{gt:b.gt},j(b.gt)]:(b==null?void 0:b.gte)!=null?[{gte:b.gte},b.gte]:void 0,1)}function m(a,b){return k((a==null?void 0:a.lt)!=null?[{lt:a.lt},a.lt]:(a==null?void 0:a.lte)!=null?[{lte:a.lte},j(a.lte)]:void 0,(b==null?void 0:b.lt)!=null?[{lt:b.lt},b.lt]:(b==null?void 0:b.lte)!=null?[{lte:b.lte},j(b.lte)]:void 0,-1)}function a(a,b){if(a==null)return void 0;a=babelHelpers.extends({},a);a.gt!=null&&(a.gt=i(b,a.gt,(h||(h=d("ReStoreKeyComparer"))).MAX_KEY));a.lte!=null&&(a.lte=i(b,a.lte,(h||(h=d("ReStoreKeyComparer"))).MAX_KEY));return a}function b(a,b,c){a.forEach(function(a){var e=a[0];a=a[1];var f=(e==null?void 0:e.gt)!=null?(h||(h=d("ReStoreKeyComparer"))).compareKey(b,e.gt)>0:(e==null?void 0:e.gte)!=null?(h||(h=d("ReStoreKeyComparer"))).compareKey(b,e.gte)>=0:!0;e=(e==null?void 0:e.lt)!=null?(h||(h=d("ReStoreKeyComparer"))).compareKey(b,e.lt)<0:(e==null?void 0:e.lte)!=null?(h||(h=d("ReStoreKeyComparer"))).compareKey(b,e.lte)<=0:!0;if(f&&e)return c(a)})}function c(a,b){if(b==null)return a;var c=l(b,a);b=m(b,a);if(c!=null&&b!=null)return babelHelpers.extends({},c,b);if(c!=null)return c;if(b!=null)return b}g.nextKey=j;g.getLowerLimit=l;g.getUpperLimit=m;g.extendBounds=a;g.forEachMatchingBounds=b;g.mergeBounds=c}),98);
__d("ReQLGlobalQueryContext",[],(function(a,b,c,d,e,f){"use strict";var g={};function a(a){return a.get(g)}function b(a,b){a.set(g,b)}var h={contents:void 0,withinSupportedContext:!1};function c(a){var b=h.withinSupportedContext;h.withinSupportedContext=!0;try{return a()}finally{h.withinSupportedContext=b}}f.getDependencies=a;f.setDependencies=b;f.globalQueryContext=h;f.runFromContextThatHandlesThrownPromise=c}),66);
__d("ReQL",["BPlusTree","PromiseOrValue","ReQLBounds","ReQLGlobalQueryContext","ReStoreKeyComparer","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l={bounds:b,filter:f,getKeyRange:o,map:q,take:u};function m(a,b){try{var c=(h||(h=d("ReQLGlobalQueryContext"))).globalQueryContext.contents,e=h.getDependencies(b);e==null&&(h||(h=d("ReQLGlobalQueryContext"))).setDependencies(b,[]);h.globalQueryContext.contents=b;var f,g;try{f=(h||(h=d("ReQLGlobalQueryContext"))).runFromContextThatHandlesThrownPromise(a),g=(h||(h=d("ReQLGlobalQueryContext"))).getDependencies(b)||[]}finally{(h||(h=d("ReQLGlobalQueryContext"))).setDependencies(b,e),h.globalQueryContext.contents=c}return[f,g]}catch(c){if(c instanceof Promise)return c.then(function(){return m(a,b)});throw c}}function a(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return b}function b(a){var b=this;return Object.setPrototypeOf({direction:b.direction,iterator:function(c,e){return b.iterator(c,(i||(i=d("ReQLBounds"))).mergeBounds(a,e))},keyLength:b.keyLength,subscribe:function(c,e){return b.subscribe(c,(i||(i=d("ReQLBounds"))).mergeBounds(a,e))}},l)}var n=Object.setPrototypeOf({direction:"asc",iterator:function(){return{next:function(){return{done:!0}}}},keyLength:0,subscribe:function(){return function(){}}},l);function e(){return n}function f(a){var b=this,c=new Map();return Object.setPrototypeOf({direction:b.direction,iterator:function(e,f){var g=b.iterator(e,f);return{next:function(b){return(j||(j=d("PromiseOrValue"))).loop(function(b){return(j||(j=d("PromiseOrValue"))).map(g.next(b),function(b){if(b.done)return{action:"break",value:b};var e=b.value,f=e[0];e=e[1];if(a(e)){(i||(i=d("ReQLBounds"))).forEachMatchingBounds(c,f,function(a){a.add(JSON.stringify(f))});return{action:"break",value:b}}(i||(i=d("ReQLBounds"))).forEachMatchingBounds(c,f,function(a){a.delete(JSON.stringify(f))});return{action:"continue",value:void 0}})},b)}}},keyLength:b.keyLength,subscribe:function(e,f){var g={},h=new Set();c.set(g,[(i||(i=d("ReQLBounds"))).extendBounds(f,b.keyLength),h]);var j=b.subscribe(function(b,c,d){var f=JSON.stringify(b);if(c.operation==="add"&&a(c.value)){h.add(f);return e(b,c,d)}if(c.operation==="put"&&a(c.value)){if(h.has(f))return e(b,c,d);h.add(f);return e(b,{operation:"add",value:c.value},d)}if(c.operation==="put"&&h.has(f)){h.delete(f);return e(b,{operation:"delete"},d)}if(c.operation==="delete"&&h.has(f)){h.delete(f);return e(b,c,d)}},f);return function(){c.delete(g);return j()}}},l)}function o(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];var e=this;function f(a){return a.gt!=null?{gt:[].concat(b,a.gt)}:{gte:[].concat(b,a.gte)}}function g(a){return a.lt!=null?{lt:[].concat(b,a.lt)}:{lte:[].concat(b,a.lte)}}function h(a){return a==null?{gte:b,lte:b}:babelHelpers.extends({},a.gte!=null||a.gt!=null?f(a):{gte:b},a.lte!=null||a.lt!=null?g(a):{lte:b})}return Object.setPrototypeOf({direction:e.direction,iterator:function(a,c){var f=e.iterator(a,h(c));return{next:function(a){return(j||(j=d("PromiseOrValue"))).map(f.next(a==null?a:[].concat(b,a)),function(a){return a.done?{done:!0}:{done:!1,value:[a.value[0].slice(b.length),a.value[1]]}})}}},keyLength:e.keyLength-b.length,subscribe:function(a,c){return e.subscribe(function(c,d,e){return a(c.slice(b.length),d,e)},h(c))}},l)}function p(a,b){if(a.direction!==b.direction)throw c("unrecoverableViolation")("merge join requires iterables to be sorted in the same direction","messenger_web_product");return Object.setPrototypeOf({direction:a.direction,iterator:function(e,f){var g=a.iterator(e,f),h=b.iterator(e,f),i=h.next();function l(a){return(j||(j=d("PromiseOrValue"))).map(i,function(b){var c=b.done?!0:(k||(k=d("ReStoreKeyComparer"))).compareKey(a,b.value[0])<=0;c=c?b:h.next(a);i=c;return c})}return{next:function(a){return(j||(j=d("PromiseOrValue"))).map(g.next(a),function(a){if(a.done)return{done:!0,value:void 0};var b=a.value;b=b[0];return(j||(j=d("PromiseOrValue"))).map(l(b),function(b){var e=a.value,f=e[0];e=e[1];if(b.done)return{done:!1,value:[f,[e,void 0]]};b=b.value;var g=b[0];b=b[1];g=(k||(k=d("ReStoreKeyComparer"))).compareKey(f,g);if(g>0)throw c("unrecoverableViolation")("Right iterable should always be equal to or ahead","messenger_web_product");else if(g<0)return{done:!1,value:[f,[e,void 0]]};else return{done:!1,value:[f,[e,b]]}})})}}},keyLength:Math.max(a.keyLength,b.keyLength),subscribe:function(c,e){var f=!0,g=a.subscribe(async function(a,e,g){return(j||(j=d("PromiseOrValue"))).map(b.iterator(g,{gte:a,lte:a}).next(),function(b){b=b.value;if(!f)return;return c(a,e.operation==="add"?{operation:"add",value:[e.value,b==null?void 0:b[1]]}:e.operation==="put"?{operation:"put",value:[e.value,b==null?void 0:b[1]]}:{operation:"delete"},g)})},e),h=b.subscribe(async function(b,e,g){return(j||(j=d("PromiseOrValue"))).map(a.iterator(g,{gte:b,lte:b}).next(),function(a){if(!f||a.done)return;return c(b,e.operation==="add"?{operation:"add",value:[a.value[1],e.value]}:e.operation==="put"?{operation:"put",value:[a.value[1],e.value]}:{operation:"delete"},g)})},e);return function(){f=!1,g(),h()}}},l)}function q(a){var b=this,c=new Map();function e(a,b,c,e,g){var h=JSON.stringify(c),i=a.get(h);i==null&&(i=[],a.set(h,i));i.forEach(function(a){return a()});i.length=0;var k=i;g.forEach(function(g){k.push(g.subscribe(function(g,h,i){return(j||(j=d("PromiseOrValue"))).map(f(a,b,c,e,i),function(a){return b(c,{operation:"put",value:a},i)})}))})}function f(b,c,f,g,h){return(j||(j=d("PromiseOrValue"))).map(m(function(){return a(g)},h),function(a){var d=a[0];a=a[1];e(b,c,f,g,a);return d})}function g(a,b){var c=JSON.stringify(b);if(!a.has(c))return;b=(b=a.get(JSON.stringify(b)))!=null?b:[];b.forEach(function(a){return a()});b.length=0;a.delete(c)}return Object.setPrototypeOf({direction:b.direction,iterator:function(f,g){var h=b.iterator(f,g);return{next:function(b){return(j||(j=d("PromiseOrValue"))).map(h.next(b),function(g){if(g.done)return g;g=g.value;var b=g[0],h=g[1];return(j||(j=d("PromiseOrValue"))).map(j.map(m(function(){return a(h)},f),function(a){var f=a[0],g=a[1];(i||(i=d("ReQLBounds"))).forEachMatchingBounds(c,b,function(a){var c=a[0];a=a[1];return e(c,a,b,h,g)});return f}),function(a){return{done:!1,value:[b,a]}})})}}},keyLength:b.keyLength,subscribe:function(a,e){var h={},k=new Map();c.set(h,[(i||(i=d("ReQLBounds"))).extendBounds(e,b.keyLength),[k,a]]);var l=b.subscribe(function(b,c,e){if(c.operation==="delete"){g(k,b);return a(b,c,e)}else if(c.operation==="add"){var h=c.value;return(j||(j=d("PromiseOrValue"))).map(f(k,a,b,h,e),function(c){return a(b,{operation:"add",value:c},e)})}else if(c.operation==="put"){h=c.value;return(j||(j=d("PromiseOrValue"))).map(f(k,a,b,h,e),function(c){return a(b,{operation:"put",value:c},e)})}},e);return function(){k.forEach(function(a){a.forEach(function(a){return a()})}),c.delete(h),l()}}},l)}function r(a,b){var c=s(a,b);for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];return e.reduce(function(a,b){return s(a,b)},c)}function s(a,b){if(a.direction!==b.direction)throw c("unrecoverableViolation")("union requires iterables to be sorted in the same direction","messenger_web_product");var e=Math.max(a.keyLength,b.keyLength);function f(a,b){return b===0||a.length===0?[]:a.slice(0,b)}function g(a){return a.gt!=null?{gt:f(a.gt,e)}:{gte:f(a.gte,e)}}function h(a){return a.lt!=null?{lt:f(a.lt,e)}:{lte:f(a.lte,e)}}function i(a){return a==null?void 0:babelHelpers.extends({},a.gte!=null||a.gt!=null?g(a):{},a.lte!=null||a.lt!=null?h(a):{})}return Object.setPrototypeOf({direction:a.direction,iterator:function(c,g){var h=a.iterator(c,i(g)),l=b.iterator(c,i(g)),m=h.next(),n=l.next();return{next:function(b){b!==void 0&&(m=h.next(f(b,e)),n=l.next(f(b,e)));return(j||(j=d("PromiseOrValue"))).map(j.all2(m,n),function(b){var c=b[0];b=b[1];function e(a,b){if(a.done)return{done:!0};a={done:!1,value:[[].concat(a.value[0],[b]),a.value[1]]};b?m=h.next():n=l.next();return a}if(c.done)return e(b,!1);if(b.done)return e(c,!0);var f=a.direction==="asc"?[c,b]:[b,c],g=f[0];f=f[1];f=(k||(k=d("ReStoreKeyComparer"))).compareKey((g=g.value)==null?void 0:g[0],(g=f.value)==null?void 0:g[0]);if(f<0)return e(c,!0);else return e(b,!1)})}}},keyLength:e+1,subscribe:function(c,d){var e=a.subscribe(function(a,b,d){return c([].concat(a,[!0]),b,d)},d),f=b.subscribe(function(a,b,d){return c([].concat(a,[!1]),b,d)},d);return function(){e(),f()}}},l)}function t(a,b){if(a.direction!==b.direction)throw c("unrecoverableViolation")("merge join requires iterables to be sorted in the same direction","messenger_web_product");return Object.setPrototypeOf({direction:a.direction,iterator:function(c,e){var f=a.iterator(c,e),g=b.iterator(c,e);function h(a){return(j||(j=d("PromiseOrValue"))).loop(function(a){var b=a[0];a=a[1];if(b.done||a.done)return{action:"break",value:{done:!0}};var c=b.value,e=c[0];c=c[1];var h=a.value,i=h[0];h=h[1];var l=(k||(k=d("ReStoreKeyComparer"))).compareKey(e,i);if(l>0)return(j||(j=d("PromiseOrValue"))).map(j.all2(b,g.next(e)),function(a){return{action:"continue",value:a}});else if(l<0)return(j||(j=d("PromiseOrValue"))).map(j.all2(f.next(i),a),function(a){return{action:"continue",value:a}});return{action:"break",value:{done:!1,value:[e,[c,h]]}}},a)}return{next:function(a){return(j||(j=d("PromiseOrValue"))).map(j.all2(f.next(a),g.next(a)),h)}}},keyLength:Math.max(a.keyLength,b.keyLength),subscribe:function(c,e){var f=!0;function g(a,b,e,g,h){return(j||(j=d("PromiseOrValue"))).map(a.iterator(h,{gte:e,lte:e}).next(),function(a){if(a.done||!f)return;a=a.value[1];a=g.operation==="add"?{operation:"add",value:b(g.value,a)}:g.operation==="put"?{operation:"put",value:b(g.value,a)}:g;return c(e,a,h)})}var h=a.subscribe(function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return g.apply(void 0,[b,function(a,b){return[a,b]}].concat(c))},e),i=b.subscribe(function(){for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];return g.apply(void 0,[a,function(a,b){return[b,a]}].concat(c))},e);return function(){f=!1,h(),i()}}},l)}function u(a){var b=this,e=new Map();return Object.setPrototypeOf({direction:b.direction,iterator:function(c,f){var g=b.iterator(c,f),h=0;return{next:function(b){if(h>=a)return{done:!0};else return(j||(j=d("PromiseOrValue"))).map(g.next(b),function(b){b.done||(i||(i=d("ReQLBounds"))).forEachMatchingBounds(e,b.value[0],function(c){var d=c[0];c=c[1];c.contents<=a&&(d.has(b.value[0])||(c.contents+=1,d.set(b.value[0],void 0)))});h+=1;return b})}}},keyLength:b.keyLength,subscribe:function(f,g){var h={},l=b.direction==="asc"?1:-1,m=new(c("BPlusTree"))(function(a,b){return(k||(k=d("ReStoreKeyComparer"))).compareKey(a,b)*-l}),n={contents:0};e.set(h,[(i||(i=d("ReQLBounds"))).extendBounds(g,b.keyLength),[m,n]]);var o=b.subscribe(function(c,g,i){var o,p=(o=m.entries().next().value)==null?void 0:o[0];o=p==null?!0:(k||(k=d("ReStoreKeyComparer"))).compareKey(c,p)*l<=0;if(g.operation==="delete"&&o){var q;n.contents>0&&(m.delete(c),q=f(c,g,i));return(j||(j=d("PromiseOrValue"))).map(q,function(){return(j||(j=d("PromiseOrValue"))).map(b.iterator(i,p==null?void 0:l===1?{gt:p}:{lt:p}).next(),function(a){if(!a.done&&e.has(h)){m.set(a.value[0],void 0);return f(a.value[0],{operation:"add",value:a.value[1]},i)}n.contents>0&&(n.contents-=1)})})}if(g.operation==="add"&&n.contents<a){n.contents+=1;m.set(c,void 0);return f(c,g,i)}if(g.operation==="add"&&o){var r;p!=null&&(m.delete(p),r=f(p,{operation:"delete"},i));return(j||(j=d("PromiseOrValue"))).map(r,function(){m.set(c,void 0);return f(c,g,i)})}if(g.operation==="put"&&o)return f(c,g,i)},g);return function(){e.delete(h);return o()}}},l)}var v=new WeakMap();function w(a,b){var c=v.get(a);if(c!=null)return c;c=b.reduce(function(b,c,d){b[c]=a[d];return b},{});v.set(a,c);return c}function x(a,b,c,e,f){if(f==null||f.length>a.keyFields.length||f.some(function(b){return a.keyFields.indexOf(b)===-1}))return a.entries(b,c,e);var g=a.keys(b,c,e);return{next:function(b){return(j||(j=d("PromiseOrValue"))).map(g.next(b),function(b){return b.done?{done:!0}:{done:!1,value:[b.value,w(b.value,a.keyFields)]}})}}}function y(a,b){return Object.setPrototypeOf({direction:"asc",iterator:function(c,d){return x(a,c,"asc",d,b)},keyLength:a.keyFields.length,subscribe:function(c,d){return a.subscribe(c,d,b)}},l)}function z(a,b){return Object.setPrototypeOf({direction:"desc",iterator:function(c,d){return x(a,c,"desc",d,b)},keyLength:a.keyFields.length,subscribe:function(c,d){return a.subscribe(c,d,b)}},l)}function A(a){var b=[],c=a.iterator(new WeakMap());return Promise.resolve((j||(j=d("PromiseOrValue"))).loop(function(){return(j||(j=d("PromiseOrValue"))).map(c.next(),function(a){if(a.done)return{action:"break",value:b};b.push(a.value[1]);return{action:"continue",value:void 0}})}))}async function B(a){a=a.iterator(new WeakMap());a=await a.next();return a.done?void 0:a.value[1]}async function C(a){a=a.iterator(new WeakMap());a=await a.next();if(a.done)throw c("unrecoverableViolation")("expected result","messenger_web_product");return a.value[1]}function D(a,b){var c=new WeakMap();function e(a){return a.gt!=null?{gt:a.gt.slice(1)}:{gte:a.gte.slice(1)}}function f(a){return a.lt!=null?{lt:a.lt.slice(1)}:{lte:a.lte.slice(1)}}function g(a){return a==null?void 0:babelHelpers.extends({},a.gte!=null||a.gt!=null?e(a):{},a.lte!=null||a.lt!=null?f(a):{})}return Object.setPrototypeOf({direction:a.direction,iterator:function(e,f){var g={};if(f){if(f.gt!=null){var h=f.gt,i=(k||(k=d("ReStoreKeyComparer"))).compareValue(b,h[0]);if(i===0)if(h.length===1)return{next:function(){return{done:!0}}};else g.gt=h.slice(1);else if(i<0)return{next:function(){return{done:!0}}}}if(f.gte!=null){h=f.gte;i=(k||(k=d("ReStoreKeyComparer"))).compareValue(b,h[0]);if(i===0)g.gte=h.slice(1);else if(i<0)return{next:function(){return{done:!0}}}}if(f.lte!=null){h=f.lte;i=(k||(k=d("ReStoreKeyComparer"))).compareValue(b,h[0]);if(i===0)h.length!==1&&(g.lte=h.slice(1));else if(i>0)return{next:function(){return{done:!0}}}}if(f.lt!=null){h=f.lt;i=(k||(k=d("ReStoreKeyComparer"))).compareValue(b,h[0]);if(i===0)if(h.length===1)return{next:function(){return{done:!0}}};else g.lt=h.slice(1);else if(i>0)return{next:function(){return{done:!0}}}}}var l=a.iterator(e,g);return{next:function(a){return(j||(j=d("PromiseOrValue"))).map(l.next(a==null?void 0:a.slice(1)),function(a){if(a.done)return{done:!0};var d=c.get(a.value[0]);d==null&&(d=[b].concat(a.value[0]),c.set(a.value[0],d));return{done:!1,value:[d,a.value[1]]}})}}},keyLength:a.keyLength+1,subscribe:function(d,e){return a.subscribe(function(a,e,f){var g=c.get(a);g==null&&(g=[b].concat(a),c.set(a,g));return d(g,e,f)},g(e))}},l)}g.prototype=l;g.key=a;g.empty=e;g.leftJoin=p;g.union=r;g.mergeJoin=t;g.fromTableAscending=y;g.fromTableDescending=z;g.toArrayAsync=A;g.firstAsync=B;g.firstExnAsync=C;g.prependKey=D}),98);
__d("WAProtoConst",[],(function(a,b,c,d,e,f){"use strict";a={REPEATED:1<<6,PACKED:1<<7,REQUIRED:1<<8};b=31;c={INT32:1,INT64:2,UINT32:3,UINT64:4,SINT32:5,SINT64:6,BOOL:7,ENUM:8,FIXED64:9,SFIXED64:10,DOUBLE:11,STRING:12,BYTES:13,MESSAGE:14,FIXED32:15,SFIXED32:16,FLOAT:17};d={VARINT:0,BIT64:1,BINARY:2,BIT32:5};e={ONEOF:"__oneofs__",RESERVED:"__reserved__",RESERVED_TAGS:"tags",RESERVED_FIELDS:"fields"};f.FLAGS=a;f.TYPE_MASK=b;f.TYPES=c;f.ENC=d;f.KEYS=e}),66);