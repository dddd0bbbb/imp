var ws = require('ws').Server
var server = new ws({ port:8888 })
var cons = new Array();
server.on('connection',function(ws){
    console.log('连接成功');
    ws.on('message', function (data) {
        for (var i = 0; i < cons.length; i++) {
            cons[i].send(data);
        }
    });
    ws.on('close', function () {
        console.log('连接断开');
        for (var i = 0; i < cons.length; i++) {
            if (cons[i] == ws) cons.splice(i, 1);
        }
    });
})
console.log('websocket-server 启动成功...')