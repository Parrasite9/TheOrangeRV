;/*FB_PKG_DELIM*/

__d("LSDeleteThenInsertBotProfileInfoV2",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(299).put({botId:a[0],isCreatedByViewer:a[1],description:a[4],tintColor:a[2],shortDescription:a[3]})},function(a){return b.resolve(c)}])}e.exports=a}),null);