//第一步：创建异步对象
var xmlHttp=new XMRHttpRequest();
//第二步：设置请求的url参数，参数一是请求的类型，参数二是请求的url，可以带参数，动态 的传递参数starName到服务端,
xmlHttp.open(method,url,isAsync);   //方法，地址，是否为异步发送
//第三步：发送请求
xmlHttp.send();
//第四步：注册事件 onreadystatechange 状态改变就会调用
xmlHttp.onreadystatechange=function(){
  if(xmlHttp.readyState==4 &&xmlHttp.status==200){

    //第五步：如果能够井道这个判断，说明数据完美的回来了，并且请求的页面是存在的
    console.log(xmlHttp.responseText);  //输入相应的内容
  }
}

