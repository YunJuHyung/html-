var fs = require('fs');
fs.readfile('sample.txt','utf-8',function(err, data){
 console.log(data);   
});