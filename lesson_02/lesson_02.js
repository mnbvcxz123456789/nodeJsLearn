//回调


//阻塞代码
var fs  = require("fs");

var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("程序执行结束！");


//非阻塞代码
var fs = require("fs");

fs.readFile("input.txt",function(err,data){
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
});

console.log("程序执行结束！");


//阻塞按照顺序执行，非阻塞不按照顺序执行，如果需要处理回调函数的参数，就写在回调函数里