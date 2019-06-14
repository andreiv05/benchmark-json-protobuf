const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:7070");
var payload = require(`./data/test${process.argv[2]}.json`);



var noMessagesReceived = 0;
var noMessagesSent = 0;
const benchmarkNumberOfMessages = process.argv[3];
var protobuf = require("protobufjs");


const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;
var time;

ws.onopen = () => {
    protobuf.load(`./data/test${process.argv[2]}.proto`).then(root => {
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
};

ws.onmessage = (data) => {
    noMessagesReceived += 1;
    if (noMessagesReceived == benchmarkNumberOfMessages)
        ws.close();
};

ws.onclose = () => {
    const diff = process.hrtime(time);
    console.log(
        `Benchmark took ${(diff[0] * NS_PER_SEC + diff[1]) *
  MS_PER_NS} milliseconds`
    );
    process.exit(0);
};