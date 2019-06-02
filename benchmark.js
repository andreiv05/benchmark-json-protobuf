const benchmark = require('benchmark');
const payload = require('./data/test1.json');

const pb_static = require("./testmessage_pb").TestMessage;

const chalk = require("chalk");
const number_of_tests = 10000000
var padSize = 23;
var os = require('os-utils');

const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;

function newSuite(name) {
    var benches = [];
    return new benchmark.Suite(name)
        .on("add", function (event) {
            benches.push(event.target);
        })
        .on("start", function () {
            process.stdout.write(chalk.white.bold("benchmarking " + name + " performance ...") + "\n\n");
        })
        .on("cycle", function (event) {
            process.stdout.write(String(event.target) + "\n");
        })
        .on("complete", function () {
            // if (benches.length > 1) {
            //     benches.sort(function (a, b) {
            //         return getHz(b) - getHz(a);
            //     });
            //     var fastest = benches[0],
            //         fastestHz = getHz(fastest);
            //     process.stdout.write("\n" + chalk.white(pad(fastest.name, padSize)) + " was " + chalk.green("fastest") + "\n");
            //     benches.slice(1).forEach(function (bench) {
            //         var hz = getHz(bench);
            //         var percent = 1 - hz / fastestHz;
            //         process.stdout.write(chalk.white(pad(bench.name, padSize)) + " was " + chalk.red((percent * 100).toFixed(1) + "% ops/sec slower (factor " + (fastestHz / hz).toFixed(1) + ")") + "\n");
            //     });
            // }
            // process.stdout.write("\n");
            console.log('Fastest is ' + this.filter('fastest').map('name'));
        });
}

function getHz(bench) {
    return 1 / (bench.stats.mean + bench.stats.moe);
}

function pad(str, len, l) {
    while (str.length < len)
        str = l ? str + " " : " " + str;
    return str;
}
console.log(payload);
newSuite("encoding")
    .add("protobuf.js (static)", () => {
        pb_static.encode(payload).finish();
    })
    .add("JSON", () => {
        JSON.stringify(payload);
    })
    .run()


// var time = process.hrtime();
// for (var i = 0; i < number_of_tests; i++)
//     pb_static.encode(payload).finish();
// const diff = process.hrtime(time);
// console.log(
//     `Benchmark took ${(diff[0] * NS_PER_SEC + diff[1]) *
//   MS_PER_NS} milliseconds`
// );



// var time = process.hrtime();
// for (var i = 0; i < number_of_tests; i++)
//     JSON.stringify(payload);
// const diff = process.hrtime(time);
// console.log(
//     `Benchmark took ${(diff[0] * NS_PER_SEC + diff[1]) *
//   MS_PER_NS} milliseconds`
// );

// os.cpuUsage(function (v) {
//     console.log('CPU Usage (%): ' + v);
// });