;/*FB_PKG_DELIM*/

__d("SchedulerFeatureFlags",["gkx","qex"],(function(a,b,c,d,e,f,g){var h,i;a=!0;b=c("gkx")("21074");d=!1;e=d;f=10;var j=10,k=10;h=(h=c("qex")._("526"))!=null?h:250;i=(i=c("qex")._("538"))!=null?i:5e3;c=(c=c("qex")._("543"))!=null?c:1e4;g.enableSchedulerDebugging=a;g.enableProfiling=b;g.enableIsInputPending=d;g.enableIsInputPendingContinuous=e;g.frameYieldMs=f;g.continuousYieldMs=j;g.maxYieldMs=k;g.userBlockingPriorityTimeout=h;g.normalPriorityTimeout=i;g.lowPriorityTimeout=c}),98);
__d("Scheduler-dev.classic",["SchedulerFeatureFlags"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("Scheduler-profiling.classic",["SchedulerFeatureFlags"],(function(b,c,d,e,f,g){"use strict";"undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var h=c("SchedulerFeatureFlags").enableProfiling,i=c("SchedulerFeatureFlags").userBlockingPriorityTimeout,j=c("SchedulerFeatureFlags").normalPriorityTimeout,k=c("SchedulerFeatureFlags").lowPriorityTimeout;function l(b,c){var d=b.length;b.push(c);a:for(;0<d;){var e=d-1>>>1,f=b[e];if(0<o(f,c))b[e]=c,b[d]=f,d=e;else break a}}function m(b){return 0===b.length?null:b[0]}function n(b){if(0===b.length)return null;var c=b[0],d=b.pop();if(d!==c){b[0]=d;a:for(var e=0,f=b.length,g=f>>>1;e<g;){var h=2*(e+1)-1,i=b[h],j=h+1,k=b[j];if(0>o(i,d))j<f&&0>o(k,i)?(b[e]=k,b[j]=d,e=j):(b[e]=i,b[h]=d,e=h);else if(j<f&&0>o(k,d))b[e]=k,b[j]=d,e=j;else break a}}return c}function o(b,c){var d=b.sortIndex-c.sortIndex;return 0!==d?d:b.id-c.id}var p=0,q=0,r=0,s=null,t=null,u=0;function v(b){if(null!==t){var c=u;u+=b.length;if(u+1>r){r*=2;if(524288<r){w();return}var d=new Int32Array(4*r);d.set(t);s=d.buffer;t=d}t.set(b,c)}}function b(){r=131072,s=new ArrayBuffer(4*r),t=new Int32Array(s),u=0}function w(){var b=s;r=0;t=s=null;u=0;return b}g.unstable_now=void 0;if("object"===typeof performance&&"function"===typeof performance.now){var x=performance;g.unstable_now=function(){return x.now()}}else{var y=Date,z=y.now();g.unstable_now=function(){return y.now()-z}}var A=[],B=[],C=1,D=!1,E=null,F=3,G=!1,H=!1,I=!1,J="function"===typeof setTimeout?setTimeout:null,K="function"===typeof clearTimeout?clearTimeout:null,L="undefined"!==typeof setImmediate?setImmediate:null;function M(b){for(var c=m(B);null!==c;){if(null===c.callback)n(B);else if(c.startTime<=b)n(B),c.sortIndex=c.expirationTime,l(A,c),h&&(h&&null!==t&&v([1,1e3*b,c.id,c.priorityLevel]),c.isQueued=!0);else break;c=m(B)}}function N(b){I=!1;M(b);if(!H)if(null!==m(A))H=!0,X();else{var c=m(B);null!==c&&Y(N,c.startTime-b)}}function O(b){M(b);for(E=m(A);!(null===E||D||E.expirationTime>b&&T());){var c=E.callback;if("function"===typeof c){E.callback=null;F=E.priorityLevel;var d=E.expirationTime<=b;if(h){var e=E;h&&(p++,null!==t&&v([5,1e3*b,e.id,p]))}c=c(d);b=g.unstable_now();if("function"===typeof c)return E.callback=c,h&&h&&null!==t&&v([6,1e3*b,E.id,p]),M(b),!0;h&&(h&&null!==t&&v([2,1e3*b,E.id]),E.isQueued=!1);E===m(A)&&n(A);M(b)}else n(A);E=m(A)}if(null!==E)return!0;c=m(B);null!==c&&Y(N,c.startTime-b);return!1}var P=!1,Q=-1,R=10,S=-1;function T(){return g.unstable_now()-S<R?!1:!0}function U(){if(P){var b=g.unstable_now();S=b;var c=!0;try{a:{h&&h&&null!==t&&v([8,1e3*b,q]);H=!1;I&&(I=!1,K(Q),Q=-1);G=!0;var d=F;try{if(h)try{c=O(b);break a}catch(b){if(null!==E){var e=g.unstable_now();h&&null!==t&&v([3,1e3*e,E.id]);E.isQueued=!1}throw b}else{c=O(b);break a}}finally{if(E=null,F=d,G=!1,h){e=g.unstable_now();h&&(q++,null!==t&&v([7,1e3*e,q]))}}c=void 0}}finally{c?V():P=!1}}}var V;if("function"===typeof L)V=function(){L(U)};else if("undefined"!==typeof MessageChannel){d=new MessageChannel();var W=d.port2;d.port1.onmessage=U;V=function(){W.postMessage(null)}}else V=function(){J(U,0)};function X(){P||(P=!0,V())}function Y(b,c){Q=J(function(){b(g.unstable_now())},c)}e=h?{startLoggingProfilingEvents:b,stopLoggingProfilingEvents:w}:null;g.unstable_IdlePriority=5;g.unstable_ImmediatePriority=1;g.unstable_LowPriority=4;g.unstable_NormalPriority=3;g.unstable_Profiling=e;g.unstable_UserBlockingPriority=2;g.unstable_cancelCallback=function(b){if(h&&b.isQueued){var c=g.unstable_now();h&&null!==t&&v([4,1e3*c,b.id]);b.isQueued=!1}b.callback=null};g.unstable_continueExecution=function(){D=!1,H||G||(H=!0,X())};g.unstable_forceFrameRate=function(b){0>b||125<b?!1:R=0<b?Math.floor(1e3/b):10};g.unstable_getCurrentPriorityLevel=function(){return F};g.unstable_getFirstCallbackNode=function(){return m(A)};g.unstable_next=function(b){switch(F){case 1:case 2:case 3:var c=3;break;default:c=F}var d=F;F=c;try{return b()}finally{F=d}};g.unstable_pauseExecution=function(){D=!0};g.unstable_requestPaint=function(){};g.unstable_runWithPriority=function(b,c){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var d=F;F=b;try{return c()}finally{F=d}};g.unstable_scheduleCallback=function(b,c,d){var e=g.unstable_now();"object"===typeof d&&null!==d?(d=d.delay,d="number"===typeof d&&0<d?e+d:e):d=e;switch(b){case 1:var f=-1;break;case 2:f=i;break;case 5:f=1073741823;break;case 4:f=k;break;default:f=j}f=d+f;b={id:C++,callback:c,priorityLevel:b,startTime:d,expirationTime:f,sortIndex:-1};h&&(b.isQueued=!1);d>e?(b.sortIndex=d,l(B,b),null===m(A)&&b===m(B)&&(I?(K(Q),Q=-1):I=!0,Y(N,d-e))):(b.sortIndex=f,l(A,b),h&&(h&&null!==t&&v([1,1e3*e,b.id,b.priorityLevel]),b.isQueued=!0),H||G||(H=!0,X()));return b};g.unstable_shouldYield=T;g.unstable_wrapCallback=function(b){var c=F;return function(){var d=F;F=c;try{return b.apply(this,arguments)}finally{F=d}}};"undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}),null);
__d("SchedulerFb-Internals_DO_NOT_USE",["Scheduler-dev.classic","Scheduler-profiling.classic","ifRequireable","requestAnimationFramePolyfill"],(function(a,b,c,d,e,f){"use strict";a.requestAnimationFrame===void 0&&(a.requestAnimationFrame=b("requestAnimationFramePolyfill"));var g;g=b("Scheduler-profiling.classic");e.exports={unstable_ImmediatePriority:g.unstable_ImmediatePriority,unstable_UserBlockingPriority:g.unstable_UserBlockingPriority,unstable_NormalPriority:g.unstable_NormalPriority,unstable_LowPriority:g.unstable_LowPriority,unstable_IdlePriority:g.unstable_IdlePriority,unstable_getCurrentPriorityLevel:g.unstable_getCurrentPriorityLevel,unstable_runWithPriority:g.unstable_runWithPriority,unstable_now:g.unstable_now,unstable_scheduleCallback:function(a,c,d){var e=b("ifRequireable")("TimeSlice",function(a){return a.guard(c,"unstable_scheduleCallback",{propagationType:a.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return c});return g.unstable_scheduleCallback(a,e,d)},unstable_cancelCallback:function(a){return g.unstable_cancelCallback(a)},unstable_wrapCallback:function(a){var c=b("ifRequireable")("TimeSlice",function(b){return b.guard(a,"unstable_wrapCallback",{propagationType:b.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return a});return g.unstable_wrapCallback(c)},unstable_pauseExecution:function(){return g.unstable_pauseExecution()},unstable_continueExecution:function(){return g.unstable_continueExecution()},unstable_shouldYield:g.unstable_shouldYield,unstable_requestPaint:g.unstable_requestPaint,unstable_forceFrameRate:g.unstable_forceFrameRate,unstable_Profiling:g.unstable_Profiling}}),null);
__d("JSScheduler",["SchedulerFb-Internals_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";var g={unstable_Immediate:(c=b("SchedulerFb-Internals_DO_NOT_USE")).unstable_ImmediatePriority,unstable_UserBlocking:c.unstable_UserBlockingPriority,unstable_Normal:c.unstable_NormalPriority,unstable_Low:c.unstable_LowPriority,unstable_Idle:c.unstable_IdlePriority},h=!1,i=c.unstable_scheduleCallback,j=c.unstable_cancelCallback,k={priorities:g,shouldYield:c.unstable_shouldYield,getCurrentPriorityLevel:c.unstable_getCurrentPriorityLevel,runWithPriority:c.unstable_runWithPriority,runWithPriority_DO_NOT_USE:c.unstable_runWithPriority,defer:function(a){var b=k.getCurrentPriorityLevel();return i(b,a)},getCallbackScheduler:function(){var a=k.getCurrentPriorityLevel();return function(b){return i(a,b)}},getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE:function(){var a=k.getCurrentPriorityLevel();return function(c){return i(g.unstable_UserBlocking,function(){b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(a,c)})}},deferUserBlockingRunAtCurrentPri_DO_NOT_USE:function(a){var c=k.getCurrentPriorityLevel();return i(g.unstable_UserBlocking,function(){b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(c,a)})},scheduleImmediatePriCallback:function(a){return i(g.unstable_Immediate,a)},scheduleUserBlockingPriCallback:function(a){return i(g.unstable_UserBlocking,a)},scheduleNormalPriCallback:function(a){return i(g.unstable_Normal,a)},scheduleLoggingPriCallback:function(a){return i(g.unstable_Low,a)},scheduleSpeculativeCallback:function(a){return i(g.unstable_Idle,a)},cancelCallback:function(a){j(a)},scheduleDelayedCallback_DO_NOT_USE:function(a,b,c){a=i(a,c,{delay:b});return a},cancelDelayedCallback_DO_NOT_USE:function(a){a=a;return j(a)},startEventProfiling:function(){var a;a=(a=b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling)==null?void 0:a.startLoggingProfilingEvents;typeof a=="function"&&a()},stopEventProfiling:function(){var a;a=(a=b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling)==null?void 0:a.stopLoggingProfilingEvents;return typeof a=="function"?a():null},makeSchedulerGlobalEntry:function(c,d){c===void 0&&(c=null),d===void 0&&(d=!1),c!==null&&c!==void 0&&b("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(c),d&&k.startEventProfiling(),a.ScheduleJSWork=function(a){return function(){for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];h?a.apply(void 0,c):k.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function(){h=!0;try{a.apply(void 0,c)}finally{h=!1}})}}}};e.exports=k}),null);