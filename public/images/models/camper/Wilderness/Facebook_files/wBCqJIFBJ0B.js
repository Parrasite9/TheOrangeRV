;/*FB_PKG_DELIM*/

__d("WABlobToImage",["Promise"],(function(a,b,c,d,e,f){"use strict";var g;function a(a){var c;return new(g||(g=b("Promise")))(function(b,d){c=new Image();var e=URL.createObjectURL(a),f=function(){return URL.revokeObjectURL(e)};c.onload=function(){b({image:c,releaseImageMemory:f})};c.onerror=function(){f(),d("loadBlobToImage error")};c.src=e})}f.blobToImage=a}),66);
__d("WADecodeImage",["WABlobToImage","WATagsLogger","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";function h(){var a=babelHelpers.taggedTemplateLiteralLoose(["start decoding image with DOM: ",""]);h=function(){return a};return a}function i(){var a=babelHelpers.taggedTemplateLiteralLoose(["start decoding image without DOM: ",""]);i=function(){return a};return a}var j=d("WATagsLogger").TAGS(["decodeImage"]);e=typeof self.createImageBitmap==="function"&&typeof self.OffscreenCanvas==="function";f=e?a:c;function a(a){return k.apply(this,arguments)}function k(){k=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){j.DEV(i(),a.name);a=(yield self.createImageBitmap(a));var b=a.width,c=a.height,d=new self.OffscreenCanvas(b,c);d=m({canvas:d,width:b,height:c,image:a});return d});return k.apply(this,arguments)}function c(a){return l.apply(this,arguments)}function l(){l=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){j.DEV(h(),a.name);a=(yield d("WABlobToImage").blobToImage(a));var b=a.image;a=a.releaseImageMemory;var c=document.createElement("canvas");c=m({canvas:c,width:b.naturalWidth,height:b.naturalHeight,image:b});a();return c});return l.apply(this,arguments)}function m(a){var b=a.canvas,c=a.image,d=a.width;a=a.height;b.width=d;b.height=a;var e=b.getContext("2d");e.fillStyle="rgb(255,255,255)";e.fillRect(0,0,b.width,b.height);e.drawImage(c,0,0);b=e.getImageData(0,0,d,a);return b}g.canDecodeWithoutDOM=e;g.decodeImage=f;g.decodeImageWithoutDOM=a;g.decodeImageWithDOM=c}),98);
__d("XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/static_resources/webworker_v1/init_script/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("WorkerBundleResource",["TrustedTypesWebWorkerScriptURLPolicy","XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder","getWorkerInitScriptSPINParams","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var d,e,f;for(var g=arguments.length,h=new Array(g>2?g-2:0),i=2;i<g;i++)h[i-2]=arguments[i];var j=(d=b==null?void 0:b.logImportScriptsErrors)!=null?d:!1,k=(e=b==null?void 0:b.name)!=null?e:a.name,l=new window.URL(a.url,window.location.href).href;if(l==null){var m=new Error("Can't start up worker without a resource url.");m.stack;throw m}var n=c("nullthrows")((f=c("XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder").buildUri({}).addQueryParams(c("getWorkerInitScriptSPINParams")()))==null?void 0:f.toString()),o=new Worker(c("TrustedTypesWebWorkerScriptURLPolicy").createScriptURL(n),{name:k});o.postMessage({bundleUrl:l,initArgs:h,isDev:!1,resource:a,logImportScriptsErrors:j,type:"sr-init"});return o}g.createDedicatedWebWorker=a}),98);
__d("genArrayBufferFromFile",["Promise"],(function(a,b,c,d,e,f){"use strict";var g;function a(a){return"arrayBuffer"in a&&typeof a.arrayBuffer==="function"?a.arrayBuffer():new(g||(g=b("Promise")))(function(b,c){var d=new FileReader();d.onload=function(){var a=d.result;a instanceof ArrayBuffer?b(a):c()};d.onerror=function(){c(d.error)};d.readAsArrayBuffer(a)})}f["default"]=a}),66);
__d("genIsNonAnimatedWebPFile",["genArrayBufferFromFile"],(function(a,b,c,d,e,f,g){"use strict";var h=8;function a(a){return c("genArrayBufferFromFile")(a).then(function(a){a=new Uint8Array(a);var b=a.slice(12,16).reduce(function(a,b,c){return a+String.fromCharCode(b)},"");if(b==="VP8X"){b=a[20];b=b.toString(2).padStart(8,"0");if(b[6]==="1")return!i(a)}return!0})}function i(a){var b=12,c=0;while(c<2&&b+h<a.length){var d=j(a,b);d==="ANMF"&&c++;d=k(a,b+4);var e=d%2;d=h+d+e;b+=d}return c>1}function j(a,b){return a.slice(b,b+4).reduce(function(a,b,c){return a+String.fromCharCode(b)},"")}function k(a,b){return parseInt(a.slice(b,b+4).reduce(function(a,b,c){return b.toString(2).padStart(8,"0")+a},""),2)}g["default"]=a}),98);