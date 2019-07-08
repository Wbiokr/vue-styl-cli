// 獲取url參數
export default function(){
  var url = location.href.split("?")[1]
  var params={};
  if(url){
    url.split('&').forEach(function(item){
      params[item.split('=')[0]]=item.split('=')[1]
    })
  }
  return params;
}