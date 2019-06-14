const chalk = require('chalk')
const payload = require(`./data/test${process.argv[2]}.json`);

const pb_static = require(`./data/test${process.argv[2]}_pb`).TestMessage;
const pb = pb_static.encode(payload).finish();

const json_buffer = Buffer.from(JSON.stringify(payload), "utf8");

const size_pb = pb.length;
const size_json = json_buffer.length

console.log(`Protobuf size is ${size_pb}`)
console.log(`JSON size is ${size_json}`)
console.log(chalk.green(`Protobuf size is ${(size_pb * 100) / size_json}% smaller from JSON size`))