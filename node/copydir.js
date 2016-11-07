var fs = require("fs");
var util = require("util");
var path = require("path");

function handle(src,dst)
{
	fs.statSync(src).isDirectory() ? handleFolder(src,dst) : handleFile(src,dst);
};

function handleFolder(src,dst)
{	
	if( !fs.existsSync(dst) ) 
	{
		fs.mkdirSync(dst);
		console.log(""+src);
	}
	fs.readdirSync(src).forEach(function(list){
		handle(path.join(src,list),path.join(dst,list));
	});
};

function handleFile(src,dst)
{
	var isCopy = fs.existsSync(dst) ? fs.statSync(src).size!=fs.statSync(dst).size : true;
	if(isCopy) 
	{	
		console.log(fs.statSync(src));
		if(fs.existsSync(dst) )console.log(fs.statSync(dst));
		fs.createReadStream(src).pipe(fs.createWriteStream(dst));
		console.log("--"+src);
	}
};

var srcRoot = process.argv[2];
var dstRoot = process.argv[3];

console.log("src:%s,dst:%s",srcRoot,dstRoot);
handle(srcRoot,dstRoot);