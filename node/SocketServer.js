var net = require('net');

function socketListner(socket) {
  socket.write('goodbye\n');
  socket.on('data', (data) => {
    console.log(data.toString());
    socket.end();
  });
  socket.on('end', () => {
    console.log('disconnected from client');
  });
};

var server = net.createServer(socketListner);

server.on('error', function (err){
  console.log(err);
});

//var port=9999;
var port="\\\\?\\pipe\\atom";
server.listen(port,function() {
  console.log('opened server on', server.address());
});
