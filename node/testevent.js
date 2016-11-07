var stream = require('stream');
var event = require('events');

var myEmitter = new event();

myEmitter.on('event',function(a,b){
	console.log(a,b,this);
});

myEmitter.emit('event','a','b');

var myBuffer = Buffer.alloc(20,2);
function logBuffer()
{
	console.log(myBuffer);
	console.log(myBuffer.toString());
}
myBuffer[0]=3;
myBuffer[1]=4;
logBuffer();
myBuffer.write('aaaa');
logBuffer();
myBuffer.writeFloatBE(12);
logBuffer();
myBuffer.writeFloatLE(12);
logBuffer();

const assert = require('assert');
const fs = require('fs');
const child_process = require('child_process');

const child = child_process.spawn('ls', {
    stdio: [
      0, // Use parents stdin for child
      'pipe', // Pipe child's stdout to parent
      fs.openSync('err.out', 'w') // Direct child's stderr to a file
    ]
});
