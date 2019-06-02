const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:7070");

var protobuf = require("protobufjs");
var payload = {
    someText: "Ana are mere",
    someNumber: 123456,
    someNumber2: 123456,
    someNumber3: 123456.1432,
    someNumber4: 123456.32432,
    someNumber5: 123456.32432,
    someNumber6: 123456.43566,
    someNumber7: 123456.43423
};

const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;
var time;
ws.on("open", function open() {
    // protobuf.load("testmessage.proto").then(root => {
    //     var TestMessage = root.lookupType("TestMessage");

    //     var message = TestMessage.create(payload); // or use .fromObject if conversion is necessary


    //     // Encode a message to an Uint8Array (browser) or Buffer (node)
    //     time = process.hrtime();
    //     var buffer = TestMessage.encode(message).finish();
    //     ws.send(buffer);
    // });

    time = process.hrtime();
    var string_to_send = JSON.stringify(payload);
    ws.send(string_to_send);
});

ws.on("message", function incoming(data) {
    const diff = process.hrtime(time);
    console.log(
        `Benchmark took ${(diff[0] * NS_PER_SEC + diff[1]) *
      MS_PER_NS} milliseconds`
    );
});