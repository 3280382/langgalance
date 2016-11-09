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


server.listen(9999,function() {
  console.log('opened server on', server.address());
});
