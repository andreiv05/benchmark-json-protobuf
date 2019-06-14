const benchmark = require('benchmark');
const chalk = require('chalk');
const payload = require(`./data/test${process.argv[2]}.json`);
const protobuf = require('protobufjs');

// Protobuf.js static
const pb_static = require(`./data/test${process.argv[2]}_pb`).TestMessage;
const pb_static_decode_test = pb_static.encode(payload).finish();
// Protobuf.js dynamic
const root = protobuf.loadSync(`./data/test${process.argv[2]}.proto`)
const pb_dynamic = root.lookupType("TestMessage");
const pb_dynamic_decode_test = pb_dynamic.encode(payload).finish();

// JSON
const json_string = JSON.stringify(payload);



newSuite("encode")
    .add("protobuf.js static", () => {
        pb_static.encode(payload).finish();
    })
    .add("protobuf.js dynamic", () => {
        pb_dynamic.encode(payload).finish();
    })
    .add("JSON", () => {
        JSON.stringify(payload);
    })
    .add("JSON buffer", () => {
        Buffer.from(JSON.stringify(payload), "utf8");
    })
    .run()


newSuite("decode")
    .add("protobuf.js static", () => {
        pb_static.decode(pb_static_decode_test);
    })
    .add("protobuf.js dynamic", () => {
        pb_dynamic.decode(pb_dynamic_decode_test);
    })
    .add("JSON", () => {
        JSON.parse(json_string);
    })
    .run()

newSuite("encode + decode")
    .add("protobuf.js static", () => {
        pb_static.decode(pb_static.encode(payload).finish());
    })
    .add("protobuf.js dynamic", () => {
        pb_dynamic.decode(pb_dynamic.encode(payload).finish());
    })
    .add("JSON", () => {
        JSON.parse(JSON.stringify(payload));
    })
    .run()

function newSuite(name) {
    var benches = [];
    return new benchmark.Suite(name)
        .on("add", function (event) {
            benches.push(event.target);
        })
        .on("start", function () {
            process.stdout.write("===================================");
            process.stdout.write(chalk.white.bold(`\nbenchmarking ${name}:\n\n`));
        })
        .on("cycle", function (event) {
            process.stdout.write(`${String(event.target)}\n`);
        })
        .on("complete", function () {
            console.log(chalk.green(`Fastest is ${this.filter('fastest').map('name')}`));
        });
}