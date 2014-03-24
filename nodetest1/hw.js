var express = require('express');
var app = express();

app.get('/', function(req,res){
	var a= 1;
	var b =2;
	var c= a+b;
  //res.send(c);
  console.log(c);
});

app.listen(3000);