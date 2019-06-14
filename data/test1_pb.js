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
     * @property {number|null} [rather] TestMessage rather
     * @property {number|null} [taught] TestMessage taught
     * @property {TestMessage.IWORKER|null} [worker] TestMessage worker
     * @property {number|null} [dirty] TestMessage dirty
     * @property {number|null} [extra] TestMessage extra
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
     * TestMessage rather.
     * @member {number} rather
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.rather = 0;

    /**
     * TestMessage taught.
     * @member {number} taught
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.taught = 0;

    /**
     * TestMessage worker.
     * @member {TestMessage.IWORKER|null|undefined} worker
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.worker = null;

    /**
     * TestMessage dirty.
     * @member {number} dirty
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.dirty = 0;

    /**
     * TestMessage extra.
     * @member {number} extra
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.extra = 0;

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
        if (message.rather != null && message.hasOwnProperty("rather"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rather);
        if (message.taught != null && message.hasOwnProperty("taught"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.taught);
        if (message.worker != null && message.hasOwnProperty("worker"))
            $root.TestMessage.WORKER.encode(message.worker, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.dirty != null && message.hasOwnProperty("dirty"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dirty);
        if (message.extra != null && message.hasOwnProperty("extra"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.extra);
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
                message.rather = reader.int32();
                break;
            case 2:
                message.taught = reader.int32();
                break;
            case 3:
                message.worker = $root.TestMessage.WORKER.decode(reader, reader.uint32());
                break;
            case 4:
                message.dirty = reader.int32();
                break;
            case 5:
                message.extra = reader.float();
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
        if (message.rather != null && message.hasOwnProperty("rather"))
            if (!$util.isInteger(message.rather))
                return "rather: integer expected";
        if (message.taught != null && message.hasOwnProperty("taught"))
            if (!$util.isInteger(message.taught))
                return "taught: integer expected";
        if (message.worker != null && message.hasOwnProperty("worker")) {
            var error = $root.TestMessage.WORKER.verify(message.worker);
            if (error)
                return "worker." + error;
        }
        if (message.dirty != null && message.hasOwnProperty("dirty"))
            if (!$util.isInteger(message.dirty))
                return "dirty: integer expected";
        if (message.extra != null && message.hasOwnProperty("extra"))
            if (typeof message.extra !== "number")
                return "extra: number expected";
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
        if (object.rather != null)
            message.rather = object.rather | 0;
        if (object.taught != null)
            message.taught = object.taught | 0;
        if (object.worker != null) {
            if (typeof object.worker !== "object")
                throw TypeError(".TestMessage.worker: object expected");
            message.worker = $root.TestMessage.WORKER.fromObject(object.worker);
        }
        if (object.dirty != null)
            message.dirty = object.dirty | 0;
        if (object.extra != null)
            message.extra = Number(object.extra);
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
            object.rather = 0;
            object.taught = 0;
            object.worker = null;
            object.dirty = 0;
            object.extra = 0;
        }
        if (message.rather != null && message.hasOwnProperty("rather"))
            object.rather = message.rather;
        if (message.taught != null && message.hasOwnProperty("taught"))
            object.taught = message.taught;
        if (message.worker != null && message.hasOwnProperty("worker"))
            object.worker = $root.TestMessage.WORKER.toObject(message.worker, options);
        if (message.dirty != null && message.hasOwnProperty("dirty"))
            object.dirty = message.dirty;
        if (message.extra != null && message.hasOwnProperty("extra"))
            object.extra = options.json && !isFinite(message.extra) ? String(message.extra) : message.extra;
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

    TestMessage.WORKER = (function() {

        /**
         * Properties of a WORKER.
         * @memberof TestMessage
         * @interface IWORKER
         * @property {number|null} [slope] WORKER slope
         * @property {number|null} ["finally"] WORKER finally
         * @property {number|null} [sail] WORKER sail
         * @property {number|null} [deep] WORKER deep
         * @property {number|null} [bet] WORKER bet
         */

        /**
         * Constructs a new WORKER.
         * @memberof TestMessage
         * @classdesc Represents a WORKER.
         * @implements IWORKER
         * @constructor
         * @param {TestMessage.IWORKER=} [properties] Properties to set
         */
        function WORKER(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WORKER slope.
         * @member {number} slope
         * @memberof TestMessage.WORKER
         * @instance
         */
        WORKER.prototype.slope = 0;

        /**
         * WORKER finally.
         * @member {number} finally
         * @memberof TestMessage.WORKER
         * @instance
         */
        WORKER.prototype["finally"] = 0;

        /**
         * WORKER sail.
         * @member {number} sail
         * @memberof TestMessage.WORKER
         * @instance
         */
        WORKER.prototype.sail = 0;

        /**
         * WORKER deep.
         * @member {number} deep
         * @memberof TestMessage.WORKER
         * @instance
         */
        WORKER.prototype.deep = 0;

        /**
         * WORKER bet.
         * @member {number} bet
         * @memberof TestMessage.WORKER
         * @instance
         */
        WORKER.prototype.bet = 0;

        /**
         * Creates a new WORKER instance using the specified properties.
         * @function create
         * @memberof TestMessage.WORKER
         * @static
         * @param {TestMessage.IWORKER=} [properties] Properties to set
         * @returns {TestMessage.WORKER} WORKER instance
         */
        WORKER.create = function create(properties) {
            return new WORKER(properties);
        };

        /**
         * Encodes the specified WORKER message. Does not implicitly {@link TestMessage.WORKER.verify|verify} messages.
         * @function encode
         * @memberof TestMessage.WORKER
         * @static
         * @param {TestMessage.IWORKER} message WORKER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WORKER.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slope != null && message.hasOwnProperty("slope"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.slope);
            if (message["finally"] != null && message.hasOwnProperty("finally"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message["finally"]);
            if (message.sail != null && message.hasOwnProperty("sail"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sail);
            if (message.deep != null && message.hasOwnProperty("deep"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.deep);
            if (message.bet != null && message.hasOwnProperty("bet"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.bet);
            return writer;
        };

        /**
         * Encodes the specified WORKER message, length delimited. Does not implicitly {@link TestMessage.WORKER.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TestMessage.WORKER
         * @static
         * @param {TestMessage.IWORKER} message WORKER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WORKER.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WORKER message from the specified reader or buffer.
         * @function decode
         * @memberof TestMessage.WORKER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TestMessage.WORKER} WORKER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WORKER.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.WORKER();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.slope = reader.float();
                    break;
                case 2:
                    message["finally"] = reader.int32();
                    break;
                case 3:
                    message.sail = reader.int32();
                    break;
                case 4:
                    message.deep = reader.float();
                    break;
                case 5:
                    message.bet = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WORKER message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TestMessage.WORKER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TestMessage.WORKER} WORKER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WORKER.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WORKER message.
         * @function verify
         * @memberof TestMessage.WORKER
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WORKER.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.slope != null && message.hasOwnProperty("slope"))
                if (typeof message.slope !== "number")
                    return "slope: number expected";
            if (message["finally"] != null && message.hasOwnProperty("finally"))
                if (!$util.isInteger(message["finally"]))
                    return "finally: integer expected";
            if (message.sail != null && message.hasOwnProperty("sail"))
                if (!$util.isInteger(message.sail))
                    return "sail: integer expected";
            if (message.deep != null && message.hasOwnProperty("deep"))
                if (typeof message.deep !== "number")
                    return "deep: number expected";
            if (message.bet != null && message.hasOwnProperty("bet"))
                if (!$util.isInteger(message.bet))
                    return "bet: integer expected";
            return null;
        };

        /**
         * Creates a WORKER message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TestMessage.WORKER
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TestMessage.WORKER} WORKER
         */
        WORKER.fromObject = function fromObject(object) {
            if (object instanceof $root.TestMessage.WORKER)
                return object;
            var message = new $root.TestMessage.WORKER();
            if (object.slope != null)
                message.slope = Number(object.slope);
            if (object["finally"] != null)
                message["finally"] = object["finally"] | 0;
            if (object.sail != null)
                message.sail = object.sail | 0;
            if (object.deep != null)
                message.deep = Number(object.deep);
            if (object.bet != null)
                message.bet = object.bet | 0;
            return message;
        };

        /**
         * Creates a plain object from a WORKER message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TestMessage.WORKER
         * @static
         * @param {TestMessage.WORKER} message WORKER
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WORKER.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.slope = 0;
                object["finally"] = 0;
                object.sail = 0;
                object.deep = 0;
                object.bet = 0;
            }
            if (message.slope != null && message.hasOwnProperty("slope"))
                object.slope = options.json && !isFinite(message.slope) ? String(message.slope) : message.slope;
            if (message["finally"] != null && message.hasOwnProperty("finally"))
                object["finally"] = message["finally"];
            if (message.sail != null && message.hasOwnProperty("sail"))
                object.sail = message.sail;
            if (message.deep != null && message.hasOwnProperty("deep"))
                object.deep = options.json && !isFinite(message.deep) ? String(message.deep) : message.deep;
            if (message.bet != null && message.hasOwnProperty("bet"))
                object.bet = message.bet;
            return object;
        };

        /**
         * Converts this WORKER to JSON.
         * @function toJSON
         * @memberof TestMessage.WORKER
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WORKER.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WORKER;
    })();

    return TestMessage;
})();

module.exports = $root;
