const net = require('net');
const client = net.connect({host: 'localhost', port: 9999}, () => {
  // 'connect' listener
  console.log('connected to server!');
  client.write('world!\r\n');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});
client.on('error', function (err){
  console.log(err);
});