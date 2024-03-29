const express = require('express');
const http = require('http');
const WebSocket = require('ws');
var protobuf = require("protobufjs");
const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({
    server
});

protobuf.load(`data/test${process.argv[2]}.proto`)
    .then(root => {
        var TestMessage = root.lookupType("TestMessage");
        wss.on('connection', ws => {

            //connection is up, let's add a simple simple event
            ws.on('message', data => {
                if (Buffer.isBuffer(data)) {
                    // PROTO
                    var message = TestMessage.decode(data);
                    console.log("Proto received");
                    ws.send("ACK");
                } else {
                    //JSON
                    var message = JSON.parse(data);
                    console.log("JSON received");
                    ws.send("ACK");
                }

            });
        });

        //start our server
        server.listen(process.env.PORT || 7070, () => {
            console.log(`Server started on port ${server.address().port} :)`);
        });
    });