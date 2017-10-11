const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Broadcast to all.
/*setInterval(function(){
  wss.broadcast = function broadcast() {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        console.log('boradcasting');
        client.send('test broadcast');
      }
    });
   };
},1000);
*/

wss.on('connection', function connection(ws) {
  console.log('connection established');
  setInterval(function(){
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send('hello from server');
      }
    });
    console.log('sending');
  },1000);
  
 ws.on('message', function incoming(data) {
   // Broadcast to everyone else.
   console.log('received');
 });
});

wss.on('close',function(ws){
  console.log('connection closed');
});