# Benchmark JSON Protobuf

## Pre-requisite

Ensure You have NodeJS installed in your system.
Refer to [https://nodejs.org](https://nodejs.org) to install NodeJS

## Installing

This code can be cloned to your local using the command

```bash
git clone https://github.com/andreiv05/benchmark-json-protobuf.git
```

After that, you need to install the Node dependencies:

```bash
cd benchmark-json-protobuf/
npm install
```

## Introduction

JSON is the facto standard for data exchange. It is widely spread because it has human readable code and a very simple and straightforward specification. Although it was derived from structures used in Javascript, every modern programming language has libraries that allow JSON parsing.

In 2008, Google has made Protobuf open source. It provides a binary message format that allows programmers to specify a schema for the data. Also, it includes a set of rules and tools to define and exchange these messages and is used in multi-platform applications due to easy interoperability between languages.

## Tests description

In order to test these two serialization methods, I've developed a series of scenarios in which I will test communication with both json and protobuf formats. The tests can be found in the `data` folder.

| Test number | Description                                             |
| ----------- | ------------------------------------------------------- |
| 1           | Only numbers                                            |
| 2           | Only strings                                            |
| 3           | Medium size real-life payload                           |
| 4           | Large size real-life payload with deep nested structure |
| 5           | Small size real-life payload                            |

The JSON's were generated randomly following the rules I provided for every test. Using an open source tool(pbjson[1]), the `.proto` files were converted from JSON payloads.

Also, I used protobuf.js[2], a pure JavaScript implementation of Protocol Buffers. This dependecy has been used both for static file compilation of the `.proto` files and for generating dynamic definitions within the runtime.

## Benchmark 1 - data transmission quantity

To run this test, run the following command, where `<no_test>` is the test number you want to test:

```bash
    node benchmark_dtq.js <no_test>
```

| Test number | Protobuf size(byes) | JSON size(bytes) | Protobuf size % from JSON size |
| ----------- | ------------------- | ---------------- | ------------------------------ |
| 1           | 73                  | 208              | 35.09%                         |
| 2           | 69                  | 165              | 41.81%                         |
| 3           | 262                 | 818              | 32.02%                         |
| 4           | 1113                | 3098             | 35.92%                         |
| 5           | 6                   | 22               | 27.27%                         |

To make an equal comparison, after serialization in JSON, the string was converted to a Buffer. Thus, we can see that, as we expected, protobuf has a much more compact format and sends fewer bytes over the network. Dimensional differences are quite notable because string transformation in Buffer encodes a lot of "extra" characters that are not useful either for the description of a field or for the information that is contained.


## Benchmark 2 - data serialization speed

To run this test, run the following command, where `<no_test>` is the test number you want to test:

```bash
    node benchmark_dss.js <no_test>
```
**Encode**

| Test number | Protobuf.js static | Protobuf.js dynamic | JSON              | JSON buffer       |
| ----------- | ------------------ | ------------------- | ----------------- | ----------------- |
| 1           | 1,071,438 ops/sec  | 1,080,822 ops/sec   | 660,431 ops/sec   | 446,295 ops/sec   |
| 2           | 666,810 ops/sec    | 708,577 ops/sec     | 961,994 ops/sec   | 594,051 ops/sec   |
| 3           | 207,190 ops/sec    | 208,981 ops/sec     | 210,331 ops/sec   | 154,151 ops/sec   |
| 4           | 49,880 ops/sec     | 50,216 ops/sec      | 49,576 ops/sec    | 37,808 ops/sec    |
| 5           | 3,769,661 ops/sec  | 3,872,881 ops/sec   | 2,587,280 ops/sec | 1,278,004 ops/sec |


**Decode**

| Test number | Protobuf.js static | Protobuf.js dynamic | JSON              |
| ----------- | ------------------ | ------------------- | ----------------- |
| 1           | 3,265,200 ops/sec  | 3,217,077 ops/sec   | 507,111 ops/sec   |
| 2           | 1,193,259 ops/sec  | 1,196,880 ops/sec   | 647,123 ops/sec   |
| 3           | 518,736 ops/sec    | 510,835 ops/sec     | 170,961 ops/sec   |
| 4           | 106,481 ops/sec    | 98,279 ops/sec      | 39,290 ops/sec    |
| 5           | 7,130,373 ops/sec  | 7,711,496 ops/sec   | 1,718,673 ops/sec |

**Encode + Decode**

| Test number | Protobuf.js static | Protobuf.js dynamic | JSON              |
| ----------- | ------------------ | ------------------- | ----------------- |
| 1           | 801,022 ops/sec    | 789,940 ops/sec     | 275,982 ops/sec   |
| 2           | 433,918 ops/sec    | 431,293 ops/sec     | 367,719 ops/sec   |
| 3           | 152,820 ops/sec    | 142,465 ops/sec     | 90,477 ops/sec    |
| 4           | 31,079 ops/sec     | 31,365 ops/sec      | 20,809 ops/sec    |
| 5           | 2,341,719 ops/sec  | 2,400,404 ops/sec   | 1,061,531 ops/sec |

In this test, I've tested the data serialization/deserialization speed for both methods. To make an equal comparison, I also included the case where a json is turned into Buffer, because when it is sent over the network it is converted to a binary format at a time. Of course, real performance is a bit better because optimizations are made in node.js and the two operations are not executed sequentially. After this benchmark, it seems that protobuf is superior to JSON on both encoding and decoding.

Conclusions:
- Encoding with JSON can be very slow if you are dealing with numbers, especially with floating points(see test1). An exception is where we have many strings, in which case JSON proved to be faster than protobuf;
- Decoding a protobuf message is **a lot** faster(up to 6x) than decoding a JSON. This is due to the fact that in the case of protobuf the message schema is known;
- In the case of an encoding operation followed by a decoding operation, protobuf was always faster;

## Benchmark 3 - data transmission speed

To run this test, run the following command, where `<no_test>` is the test number you want to test:

```bash
    node server.js <no_test>
```

Then, in another terminal, run the following command, where `no_messages` is for how many messages you want to test:
```bash
    node client_json.js <no_test> <no_messages>
```
or
```bash
    node client_protobuf.js <no_test> <no_messages>
```

In this benchmark, I built a client / server architecture over Websocket. The server can interpret both protobuf and JSON formatted messages. Is being tested how quickly a number of messages can be sent and how quickly a server response is received. For reasons of simplicity, the server only decodes the received message and sends an "ACK" string as a response to the client to confirm that he received and interpreted the message.

No notable differences were found between the two methods methods because the localhost data transmission is extremely fast. When using Throttle[3], a tool that is used to simulate slow network connection when working on localhost, there were found advantages for protobuf when sending a large number of messages (> 100.000) because of the reduced package size. 

## Personal opinions
I think protobuf is a great alternative to JSON, especially in cases where a very large number of packages are sent. Google offers support for a relatively large number of programming languages: C++, Java, Python, C#, JavaScript, Ruby, Go, PHP.

The disadvantages of using protobuf are the lack of documentation, but the open-source development community is on the rise. In addition, unlike JSON, it does not provide a human-readable format, which can make the debug more difficult.

Because Google uses Protobuf internally and considers it a vital component, this format will be very stable.

Possible worries are new message formats, such as FlatBuffers, that promise access to sections of the serialized object without unpacking the entire buffer. 

## References

[1] https://github.com/lisztli/pbjson

[2] https://github.com/protobufjs/protobuf.js

[3] https://github.com/sitespeedio/throttle

[4] https://auth0.com/blog/beating-json-performance-with-protobuf/
