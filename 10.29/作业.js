/**
 * 7个小时----2个小时
 * 
 * 15个小时 -----10个小时
 * 
 * 今天的antd-----UI组件库----玩两遍 完成
 * 路由案例--3遍  完成
 * 昨天的的案例---1遍  完成
 * 函数防抖和节流代码,每个3遍 完成
 * 数组去重一个遍 完成
 * XHR源码一遍   完成
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/

//步骤一:创建异步对象
var xmlHttp = new XMLHttpRequest();
//步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
xmlHttp.open(method,url,isAsync); // 方法，地址，是否为异步发送
//步骤三:发送请求
xmlHttp.send();
//步骤四:注册事件 onreadystatechange 状态改变就会调用
xmlHttp.onreadystatechange = function () {
  if (xmlHttp.readyState==4 && xmlHttp.status==200) {
    //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
    console.log(xmlHttp.responseText);//输入相应的内容
  }
}
