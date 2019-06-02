const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:7070");

var index = 0;
var noMessagesSent = 0;
const benchmarkNumberOfMessages = 100000;
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
    protobuf.load("testmessage.proto").then(root => {
        var TestMessage = root.lookupType("TestMessage");

        time = process.hrtime();

        setInterval(() => {
            var buffer = TestMessage.encode(payload).finish();
            ws.send(buffer);
            noMessagesSent += 1;
            if (noMessagesSent == benchmarkNumberOfMessages)
                clearInterval(this);
        }, 1);


    });


});

ws.on("message", function incoming(data) {

    index += 1;
    if (index == benchmarkNumberOfMessages)
        ws.close();
});

ws.onclose = () => {
    const diff = process.hrtime(time);
    console.log(
        `Benchmark took ${(diff[0] * NS_PER_SEC + diff[1]) *
  MS_PER_NS} milliseconds`
    );
    process.exit(0);
};