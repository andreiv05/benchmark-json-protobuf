/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.TestMessage = (function() {

    /**
     * Properties of a TestMessage.
     * @exports ITestMessage
     * @interface ITestMessage
     * @property {string|null} [someText] TestMessage someText
     * @property {number|null} [someNumber] TestMessage someNumber
     * @property {number|null} [someNumber3] TestMessage someNumber3
     * @property {number|null} [someNumber4] TestMessage someNumber4
     * @property {number|null} [someNumber5] TestMessage someNumber5
     * @property {number|null} [someNumber6] TestMessage someNumber6
     * @property {number|null} [someNumber7] TestMessage someNumber7
     * @property {number|null} [someNumber8] TestMessage someNumber8
     */

    /**
     * Constructs a new TestMessage.
     * @exports TestMessage
     * @classdesc Represents a TestMessage.
     * @implements ITestMessage
     * @constructor
     * @param {ITestMessage=} [properties] Properties to set
     */
    function TestMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TestMessage someText.
     * @member {string} someText
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.someText = "";

    /**
     * TestMessage someNumber.
     * @member {number} someNumber
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.someNumber = 0;

    /**
     * TestMessage someNumber3.
     * @member {number} someNumber3
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.someNumber3 = 0;

    /**
     * TestMessage someNumber4.
     * @member {number} someNumber4
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.someNumber4 = 0;

    /**
     * TestMessage someNumber5.
     * @member {number} someNumber5
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.someNumber5 = 0;

    /**
     * TestMessage someNumber6.
     * @member {number} someNumber6
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.someNumber6 = 0;

    /**
     * TestMessage someNumber7.
     * @member {number} someNumber7
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.someNumber7 = 0;

    /**
     * TestMessage someNumber8.
     * @member {number} someNumber8
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.someNumber8 = 0;

    /**
     * Creates a new TestMessage instance using the specified properties.
     * @function create
     * @memberof TestMessage
     * @static
     * @param {ITestMessage=} [properties] Properties to set
     * @returns {TestMessage} TestMessage instance
     */
    TestMessage.create = function create(properties) {
        return new TestMessage(properties);
    };

    /**
     * Encodes the specified TestMessage message. Does not implicitly {@link TestMessage.verify|verify} messages.
     * @function encode
     * @memberof TestMessage
     * @static
     * @param {ITestMessage} message TestMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.someText != null && message.hasOwnProperty("someText"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.someText);
        if (message.someNumber != null && message.hasOwnProperty("someNumber"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.someNumber);
        if (message.someNumber3 != null && message.hasOwnProperty("someNumber3"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.someNumber3);
        if (message.someNumber4 != null && message.hasOwnProperty("someNumber4"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.someNumber4);
        if (message.someNumber5 != null && message.hasOwnProperty("someNumber5"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.someNumber5);
        if (message.someNumber6 != null && message.hasOwnProperty("someNumber6"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.someNumber6);
        if (message.someNumber7 != null && message.hasOwnProperty("someNumber7"))
            writer.uint32(/* id 7, wireType 1 =*/57).double(message.someNumber7);
        if (message.someNumber8 != null && message.hasOwnProperty("someNumber8"))
            writer.uint32(/* id 8, wireType 1 =*/65).double(message.someNumber8);
        return writer;
    };

    /**
     * Encodes the specified TestMessage message, length delimited. Does not implicitly {@link TestMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TestMessage
     * @static
     * @param {ITestMessage} message TestMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TestMessage message from the specified reader or buffer.
     * @function decode
     * @memberof TestMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TestMessage} TestMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.someText = reader.string();
                break;
            case 2:
                message.someNumber = reader.int32();
                break;
            case 3:
                message.someNumber3 = reader.double();
                break;
            case 4:
                message.someNumber4 = reader.double();
                break;
            case 5:
                message.someNumber5 = reader.double();
                break;
            case 6:
                message.someNumber6 = reader.double();
                break;
            case 7:
                message.someNumber7 = reader.double();
                break;
            case 8:
                message.someNumber8 = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TestMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TestMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TestMessage} TestMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TestMessage message.
     * @function verify
     * @memberof TestMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TestMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.someText != null && message.hasOwnProperty("someText"))
            if (!$util.isString(message.someText))
                return "someText: string expected";
        if (message.someNumber != null && message.hasOwnProperty("someNumber"))
            if (!$util.isInteger(message.someNumber))
                return "someNumber: integer expected";
        if (message.someNumber3 != null && message.hasOwnProperty("someNumber3"))
            if (typeof message.someNumber3 !== "number")
                return "someNumber3: number expected";
        if (message.someNumber4 != null && message.hasOwnProperty("someNumber4"))
            if (typeof message.someNumber4 !== "number")
                return "someNumber4: number expected";
        if (message.someNumber5 != null && message.hasOwnProperty("someNumber5"))
            if (typeof message.someNumber5 !== "number")
                return "someNumber5: number expected";
        if (message.someNumber6 != null && message.hasOwnProperty("someNumber6"))
            if (typeof message.someNumber6 !== "number")
                return "someNumber6: number expected";
        if (message.someNumber7 != null && message.hasOwnProperty("someNumber7"))
            if (typeof message.someNumber7 !== "number")
                return "someNumber7: number expected";
        if (message.someNumber8 != null && message.hasOwnProperty("someNumber8"))
            if (typeof message.someNumber8 !== "number")
                return "someNumber8: number expected";
        return null;
    };

    /**
     * Creates a TestMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TestMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TestMessage} TestMessage
     */
    TestMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.TestMessage)
            return object;
        var message = new $root.TestMessage();
        if (object.someText != null)
            message.someText = String(object.someText);
        if (object.someNumber != null)
            message.someNumber = object.someNumber | 0;
        if (object.someNumber3 != null)
            message.someNumber3 = Number(object.someNumber3);
        if (object.someNumber4 != null)
            message.someNumber4 = Number(object.someNumber4);
        if (object.someNumber5 != null)
            message.someNumber5 = Number(object.someNumber5);
        if (object.someNumber6 != null)
            message.someNumber6 = Number(object.someNumber6);
        if (object.someNumber7 != null)
            message.someNumber7 = Number(object.someNumber7);
        if (object.someNumber8 != null)
            message.someNumber8 = Number(object.someNumber8);
        return message;
    };

    /**
     * Creates a plain object from a TestMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TestMessage
     * @static
     * @param {TestMessage} message TestMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TestMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.someText = "";
            object.someNumber = 0;
            object.someNumber3 = 0;
            object.someNumber4 = 0;
            object.someNumber5 = 0;
            object.someNumber6 = 0;
            object.someNumber7 = 0;
            object.someNumber8 = 0;
        }
        if (message.someText != null && message.hasOwnProperty("someText"))
            object.someText = message.someText;
        if (message.someNumber != null && message.hasOwnProperty("someNumber"))
            object.someNumber = message.someNumber;
        if (message.someNumber3 != null && message.hasOwnProperty("someNumber3"))
            object.someNumber3 = options.json && !isFinite(message.someNumber3) ? String(message.someNumber3) : message.someNumber3;
        if (message.someNumber4 != null && message.hasOwnProperty("someNumber4"))
            object.someNumber4 = options.json && !isFinite(message.someNumber4) ? String(message.someNumber4) : message.someNumber4;
        if (message.someNumber5 != null && message.hasOwnProperty("someNumber5"))
            object.someNumber5 = options.json && !isFinite(message.someNumber5) ? String(message.someNumber5) : message.someNumber5;
        if (message.someNumber6 != null && message.hasOwnProperty("someNumber6"))
            object.someNumber6 = options.json && !isFinite(message.someNumber6) ? String(message.someNumber6) : message.someNumber6;
        if (message.someNumber7 != null && message.hasOwnProperty("someNumber7"))
            object.someNumber7 = options.json && !isFinite(message.someNumber7) ? String(message.someNumber7) : message.someNumber7;
        if (message.someNumber8 != null && message.hasOwnProperty("someNumber8"))
            object.someNumber8 = options.json && !isFinite(message.someNumber8) ? String(message.someNumber8) : message.someNumber8;
        return object;
    };

    /**
     * Converts this TestMessage to JSON.
     * @function toJSON
     * @memberof TestMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TestMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TestMessage;
})();

module.exports = $root;
