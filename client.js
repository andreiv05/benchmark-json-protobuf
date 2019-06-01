const WebSocket = require('ws');
const TestMessage = require('./testmessage_pb');
const ws = new WebSocket('ws://localhost:7070');
ws.binaryType = 'arraybuffer'
var message = new proto.TestMessage();
const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;
var time;
ws.on('open', function open() {
    time = process.hrtime();

    message.setSometext('Hello Protocol Buffers');
    var bytes = message.serializeBinary();
    ws.send(bytes);

    // var obj = {
    //     SomeText: "Hello Protocol Buffers"
    // }
    // ws.send(JSON.stringify(obj));
});

ws.on('message', function incoming(data) {
    const diff = process.hrtime(time);
    console.log(`Benchmark took ${ (diff[0] * NS_PER_SEC + diff[1])  * MS_PER_NS } milliseconds`);
    console.log(data);
});