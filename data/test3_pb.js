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
     * @property {number|null} [syllable] TestMessage syllable
     * @property {number|null} [rocket] TestMessage rocket
     * @property {TestMessage.IPALACE|null} [palace] TestMessage palace
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
     * TestMessage syllable.
     * @member {number} syllable
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.syllable = 0;

    /**
     * TestMessage rocket.
     * @member {number} rocket
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.rocket = 0;

    /**
     * TestMessage palace.
     * @member {TestMessage.IPALACE|null|undefined} palace
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.palace = null;

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
        if (message.syllable != null && message.hasOwnProperty("syllable"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.syllable);
        if (message.rocket != null && message.hasOwnProperty("rocket"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.rocket);
        if (message.palace != null && message.hasOwnProperty("palace"))
            $root.TestMessage.PALACE.encode(message.palace, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                message.syllable = reader.int32();
                break;
            case 2:
                message.rocket = reader.float();
                break;
            case 3:
                message.palace = $root.TestMessage.PALACE.decode(reader, reader.uint32());
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
        if (message.syllable != null && message.hasOwnProperty("syllable"))
            if (!$util.isInteger(message.syllable))
                return "syllable: integer expected";
        if (message.rocket != null && message.hasOwnProperty("rocket"))
            if (typeof message.rocket !== "number")
                return "rocket: number expected";
        if (message.palace != null && message.hasOwnProperty("palace")) {
            var error = $root.TestMessage.PALACE.verify(message.palace);
            if (error)
                return "palace." + error;
        }
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
        if (object.syllable != null)
            message.syllable = object.syllable | 0;
        if (object.rocket != null)
            message.rocket = Number(object.rocket);
        if (object.palace != null) {
            if (typeof object.palace !== "object")
                throw TypeError(".TestMessage.palace: object expected");
            message.palace = $root.TestMessage.PALACE.fromObject(object.palace);
        }
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
            object.syllable = 0;
            object.rocket = 0;
            object.palace = null;
        }
        if (message.syllable != null && message.hasOwnProperty("syllable"))
            object.syllable = message.syllable;
        if (message.rocket != null && message.hasOwnProperty("rocket"))
            object.rocket = options.json && !isFinite(message.rocket) ? String(message.rocket) : message.rocket;
        if (message.palace != null && message.hasOwnProperty("palace"))
            object.palace = $root.TestMessage.PALACE.toObject(message.palace, options);
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

    TestMessage.PALACE = (function() {

        /**
         * Properties of a PALACE.
         * @memberof TestMessage
         * @interface IPALACE
         * @property {number|null} [brown] PALACE brown
         * @property {number|null} [none] PALACE none
         * @property {string|null} [transportation] PALACE transportation
         * @property {string|null} [final] PALACE final
         * @property {TestMessage.PALACE.IWEIGHT|null} [weight] PALACE weight
         * @property {string|null} [constantly] PALACE constantly
         * @property {TestMessage.PALACE.IDEPTH|null} [depth] PALACE depth
         * @property {string|null} [heading] PALACE heading
         * @property {number|null} [held] PALACE held
         * @property {number|null} [rate] PALACE rate
         * @property {number|null} [nearly] PALACE nearly
         * @property {number|null} [church] PALACE church
         * @property {number|null} [it] PALACE it
         * @property {string|null} [silk] PALACE silk
         * @property {string|null} [day] PALACE day
         * @property {number|null} [bank] PALACE bank
         * @property {number|null} [built] PALACE built
         */

        /**
         * Constructs a new PALACE.
         * @memberof TestMessage
         * @classdesc Represents a PALACE.
         * @implements IPALACE
         * @constructor
         * @param {TestMessage.IPALACE=} [properties] Properties to set
         */
        function PALACE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PALACE brown.
         * @member {number} brown
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.brown = 0;

        /**
         * PALACE none.
         * @member {number} none
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.none = 0;

        /**
         * PALACE transportation.
         * @member {string} transportation
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.transportation = "";

        /**
         * PALACE final.
         * @member {string} final
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.final = "";

        /**
         * PALACE weight.
         * @member {TestMessage.PALACE.IWEIGHT|null|undefined} weight
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.weight = null;

        /**
         * PALACE constantly.
         * @member {string} constantly
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.constantly = "";

        /**
         * PALACE depth.
         * @member {TestMessage.PALACE.IDEPTH|null|undefined} depth
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.depth = null;

        /**
         * PALACE heading.
         * @member {string} heading
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.heading = "";

        /**
         * PALACE held.
         * @member {number} held
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.held = 0;

        /**
         * PALACE rate.
         * @member {number} rate
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.rate = 0;

        /**
         * PALACE nearly.
         * @member {number} nearly
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.nearly = 0;

        /**
         * PALACE church.
         * @member {number} church
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.church = 0;

        /**
         * PALACE it.
         * @member {number} it
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.it = 0;

        /**
         * PALACE silk.
         * @member {string} silk
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.silk = "";

        /**
         * PALACE day.
         * @member {string} day
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.day = "";

        /**
         * PALACE bank.
         * @member {number} bank
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.bank = 0;

        /**
         * PALACE built.
         * @member {number} built
         * @memberof TestMessage.PALACE
         * @instance
         */
        PALACE.prototype.built = 0;

        /**
         * Creates a new PALACE instance using the specified properties.
         * @function create
         * @memberof TestMessage.PALACE
         * @static
         * @param {TestMessage.IPALACE=} [properties] Properties to set
         * @returns {TestMessage.PALACE} PALACE instance
         */
        PALACE.create = function create(properties) {
            return new PALACE(properties);
        };

        /**
         * Encodes the specified PALACE message. Does not implicitly {@link TestMessage.PALACE.verify|verify} messages.
         * @function encode
         * @memberof TestMessage.PALACE
         * @static
         * @param {TestMessage.IPALACE} message PALACE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PALACE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.brown != null && message.hasOwnProperty("brown"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.brown);
            if (message.none != null && message.hasOwnProperty("none"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.none);
            if (message.transportation != null && message.hasOwnProperty("transportation"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.transportation);
            if (message.final != null && message.hasOwnProperty("final"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.final);
            if (message.weight != null && message.hasOwnProperty("weight"))
                $root.TestMessage.PALACE.WEIGHT.encode(message.weight, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.constantly != null && message.hasOwnProperty("constantly"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.constantly);
            if (message.depth != null && message.hasOwnProperty("depth"))
                $root.TestMessage.PALACE.DEPTH.encode(message.depth, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.heading != null && message.hasOwnProperty("heading"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.heading);
            if (message.held != null && message.hasOwnProperty("held"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.held);
            if (message.rate != null && message.hasOwnProperty("rate"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.rate);
            if (message.nearly != null && message.hasOwnProperty("nearly"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.nearly);
            if (message.church != null && message.hasOwnProperty("church"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.church);
            if (message.it != null && message.hasOwnProperty("it"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.it);
            if (message.silk != null && message.hasOwnProperty("silk"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.silk);
            if (message.day != null && message.hasOwnProperty("day"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.day);
            if (message.bank != null && message.hasOwnProperty("bank"))
                writer.uint32(/* id 16, wireType 5 =*/133).float(message.bank);
            if (message.built != null && message.hasOwnProperty("built"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.built);
            return writer;
        };

        /**
         * Encodes the specified PALACE message, length delimited. Does not implicitly {@link TestMessage.PALACE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TestMessage.PALACE
         * @static
         * @param {TestMessage.IPALACE} message PALACE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PALACE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PALACE message from the specified reader or buffer.
         * @function decode
         * @memberof TestMessage.PALACE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TestMessage.PALACE} PALACE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PALACE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.PALACE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.brown = reader.int32();
                    break;
                case 2:
                    message.none = reader.float();
                    break;
                case 3:
                    message.transportation = reader.string();
                    break;
                case 4:
                    message.final = reader.string();
                    break;
                case 5:
                    message.weight = $root.TestMessage.PALACE.WEIGHT.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.constantly = reader.string();
                    break;
                case 7:
                    message.depth = $root.TestMessage.PALACE.DEPTH.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.heading = reader.string();
                    break;
                case 9:
                    message.held = reader.int32();
                    break;
                case 10:
                    message.rate = reader.int32();
                    break;
                case 11:
                    message.nearly = reader.int32();
                    break;
                case 12:
                    message.church = reader.int32();
                    break;
                case 13:
                    message.it = reader.int32();
                    break;
                case 14:
                    message.silk = reader.string();
                    break;
                case 15:
                    message.day = reader.string();
                    break;
                case 16:
                    message.bank = reader.float();
                    break;
                case 17:
                    message.built = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PALACE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TestMessage.PALACE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TestMessage.PALACE} PALACE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PALACE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PALACE message.
         * @function verify
         * @memberof TestMessage.PALACE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PALACE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.brown != null && message.hasOwnProperty("brown"))
                if (!$util.isInteger(message.brown))
                    return "brown: integer expected";
            if (message.none != null && message.hasOwnProperty("none"))
                if (typeof message.none !== "number")
                    return "none: number expected";
            if (message.transportation != null && message.hasOwnProperty("transportation"))
                if (!$util.isString(message.transportation))
                    return "transportation: string expected";
            if (message.final != null && message.hasOwnProperty("final"))
                if (!$util.isString(message.final))
                    return "final: string expected";
            if (message.weight != null && message.hasOwnProperty("weight")) {
                var error = $root.TestMessage.PALACE.WEIGHT.verify(message.weight);
                if (error)
                    return "weight." + error;
            }
            if (message.constantly != null && message.hasOwnProperty("constantly"))
                if (!$util.isString(message.constantly))
                    return "constantly: string expected";
            if (message.depth != null && message.hasOwnProperty("depth")) {
                var error = $root.TestMessage.PALACE.DEPTH.verify(message.depth);
                if (error)
                    return "depth." + error;
            }
            if (message.heading != null && message.hasOwnProperty("heading"))
                if (!$util.isString(message.heading))
                    return "heading: string expected";
            if (message.held != null && message.hasOwnProperty("held"))
                if (!$util.isInteger(message.held))
                    return "held: integer expected";
            if (message.rate != null && message.hasOwnProperty("rate"))
                if (!$util.isInteger(message.rate))
                    return "rate: integer expected";
            if (message.nearly != null && message.hasOwnProperty("nearly"))
                if (!$util.isInteger(message.nearly))
                    return "nearly: integer expected";
            if (message.church != null && message.hasOwnProperty("church"))
                if (!$util.isInteger(message.church))
                    return "church: integer expected";
            if (message.it != null && message.hasOwnProperty("it"))
                if (!$util.isInteger(message.it))
                    return "it: integer expected";
            if (message.silk != null && message.hasOwnProperty("silk"))
                if (!$util.isString(message.silk))
                    return "silk: string expected";
            if (message.day != null && message.hasOwnProperty("day"))
                if (!$util.isString(message.day))
                    return "day: string expected";
            if (message.bank != null && message.hasOwnProperty("bank"))
                if (typeof message.bank !== "number")
                    return "bank: number expected";
            if (message.built != null && message.hasOwnProperty("built"))
                if (!$util.isInteger(message.built))
                    return "built: integer expected";
            return null;
        };

        /**
         * Creates a PALACE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TestMessage.PALACE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TestMessage.PALACE} PALACE
         */
        PALACE.fromObject = function fromObject(object) {
            if (object instanceof $root.TestMessage.PALACE)
                return object;
            var message = new $root.TestMessage.PALACE();
            if (object.brown != null)
                message.brown = object.brown | 0;
            if (object.none != null)
                message.none = Number(object.none);
            if (object.transportation != null)
                message.transportation = String(object.transportation);
            if (object.final != null)
                message.final = String(object.final);
            if (object.weight != null) {
                if (typeof object.weight !== "object")
                    throw TypeError(".TestMessage.PALACE.weight: object expected");
                message.weight = $root.TestMessage.PALACE.WEIGHT.fromObject(object.weight);
            }
            if (object.constantly != null)
                message.constantly = String(object.constantly);
            if (object.depth != null) {
                if (typeof object.depth !== "object")
                    throw TypeError(".TestMessage.PALACE.depth: object expected");
                message.depth = $root.TestMessage.PALACE.DEPTH.fromObject(object.depth);
            }
            if (object.heading != null)
                message.heading = String(object.heading);
            if (object.held != null)
                message.held = object.held | 0;
            if (object.rate != null)
                message.rate = object.rate | 0;
            if (object.nearly != null)
                message.nearly = object.nearly | 0;
            if (object.church != null)
                message.church = object.church | 0;
            if (object.it != null)
                message.it = object.it | 0;
            if (object.silk != null)
                message.silk = String(object.silk);
            if (object.day != null)
                message.day = String(object.day);
            if (object.bank != null)
                message.bank = Number(object.bank);
            if (object.built != null)
                message.built = object.built | 0;
            return message;
        };

        /**
         * Creates a plain object from a PALACE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TestMessage.PALACE
         * @static
         * @param {TestMessage.PALACE} message PALACE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PALACE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.brown = 0;
                object.none = 0;
                object.transportation = "";
                object.final = "";
                object.weight = null;
                object.constantly = "";
                object.depth = null;
                object.heading = "";
                object.held = 0;
                object.rate = 0;
                object.nearly = 0;
                object.church = 0;
                object.it = 0;
                object.silk = "";
                object.day = "";
                object.bank = 0;
                object.built = 0;
            }
            if (message.brown != null && message.hasOwnProperty("brown"))
                object.brown = message.brown;
            if (message.none != null && message.hasOwnProperty("none"))
                object.none = options.json && !isFinite(message.none) ? String(message.none) : message.none;
            if (message.transportation != null && message.hasOwnProperty("transportation"))
                object.transportation = message.transportation;
            if (message.final != null && message.hasOwnProperty("final"))
                object.final = message.final;
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = $root.TestMessage.PALACE.WEIGHT.toObject(message.weight, options);
            if (message.constantly != null && message.hasOwnProperty("constantly"))
                object.constantly = message.constantly;
            if (message.depth != null && message.hasOwnProperty("depth"))
                object.depth = $root.TestMessage.PALACE.DEPTH.toObject(message.depth, options);
            if (message.heading != null && message.hasOwnProperty("heading"))
                object.heading = message.heading;
            if (message.held != null && message.hasOwnProperty("held"))
                object.held = message.held;
            if (message.rate != null && message.hasOwnProperty("rate"))
                object.rate = message.rate;
            if (message.nearly != null && message.hasOwnProperty("nearly"))
                object.nearly = message.nearly;
            if (message.church != null && message.hasOwnProperty("church"))
                object.church = message.church;
            if (message.it != null && message.hasOwnProperty("it"))
                object.it = message.it;
            if (message.silk != null && message.hasOwnProperty("silk"))
                object.silk = message.silk;
            if (message.day != null && message.hasOwnProperty("day"))
                object.day = message.day;
            if (message.bank != null && message.hasOwnProperty("bank"))
                object.bank = options.json && !isFinite(message.bank) ? String(message.bank) : message.bank;
            if (message.built != null && message.hasOwnProperty("built"))
                object.built = message.built;
            return object;
        };

        /**
         * Converts this PALACE to JSON.
         * @function toJSON
         * @memberof TestMessage.PALACE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PALACE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PALACE.WEIGHT = (function() {

            /**
             * Properties of a WEIGHT.
             * @memberof TestMessage.PALACE
             * @interface IWEIGHT
             * @property {number|null} [pattern] WEIGHT pattern
             * @property {string|null} [feathers] WEIGHT feathers
             */

            /**
             * Constructs a new WEIGHT.
             * @memberof TestMessage.PALACE
             * @classdesc Represents a WEIGHT.
             * @implements IWEIGHT
             * @constructor
             * @param {TestMessage.PALACE.IWEIGHT=} [properties] Properties to set
             */
            function WEIGHT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WEIGHT pattern.
             * @member {number} pattern
             * @memberof TestMessage.PALACE.WEIGHT
             * @instance
             */
            WEIGHT.prototype.pattern = 0;

            /**
             * WEIGHT feathers.
             * @member {string} feathers
             * @memberof TestMessage.PALACE.WEIGHT
             * @instance
             */
            WEIGHT.prototype.feathers = "";

            /**
             * Creates a new WEIGHT instance using the specified properties.
             * @function create
             * @memberof TestMessage.PALACE.WEIGHT
             * @static
             * @param {TestMessage.PALACE.IWEIGHT=} [properties] Properties to set
             * @returns {TestMessage.PALACE.WEIGHT} WEIGHT instance
             */
            WEIGHT.create = function create(properties) {
                return new WEIGHT(properties);
            };

            /**
             * Encodes the specified WEIGHT message. Does not implicitly {@link TestMessage.PALACE.WEIGHT.verify|verify} messages.
             * @function encode
             * @memberof TestMessage.PALACE.WEIGHT
             * @static
             * @param {TestMessage.PALACE.IWEIGHT} message WEIGHT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WEIGHT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pattern != null && message.hasOwnProperty("pattern"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pattern);
                if (message.feathers != null && message.hasOwnProperty("feathers"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.feathers);
                return writer;
            };

            /**
             * Encodes the specified WEIGHT message, length delimited. Does not implicitly {@link TestMessage.PALACE.WEIGHT.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TestMessage.PALACE.WEIGHT
             * @static
             * @param {TestMessage.PALACE.IWEIGHT} message WEIGHT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WEIGHT.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WEIGHT message from the specified reader or buffer.
             * @function decode
             * @memberof TestMessage.PALACE.WEIGHT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TestMessage.PALACE.WEIGHT} WEIGHT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WEIGHT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.PALACE.WEIGHT();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.pattern = reader.int32();
                        break;
                    case 2:
                        message.feathers = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WEIGHT message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TestMessage.PALACE.WEIGHT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TestMessage.PALACE.WEIGHT} WEIGHT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WEIGHT.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WEIGHT message.
             * @function verify
             * @memberof TestMessage.PALACE.WEIGHT
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WEIGHT.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pattern != null && message.hasOwnProperty("pattern"))
                    if (!$util.isInteger(message.pattern))
                        return "pattern: integer expected";
                if (message.feathers != null && message.hasOwnProperty("feathers"))
                    if (!$util.isString(message.feathers))
                        return "feathers: string expected";
                return null;
            };

            /**
             * Creates a WEIGHT message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TestMessage.PALACE.WEIGHT
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TestMessage.PALACE.WEIGHT} WEIGHT
             */
            WEIGHT.fromObject = function fromObject(object) {
                if (object instanceof $root.TestMessage.PALACE.WEIGHT)
                    return object;
                var message = new $root.TestMessage.PALACE.WEIGHT();
                if (object.pattern != null)
                    message.pattern = object.pattern | 0;
                if (object.feathers != null)
                    message.feathers = String(object.feathers);
                return message;
            };

            /**
             * Creates a plain object from a WEIGHT message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TestMessage.PALACE.WEIGHT
             * @static
             * @param {TestMessage.PALACE.WEIGHT} message WEIGHT
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WEIGHT.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.pattern = 0;
                    object.feathers = "";
                }
                if (message.pattern != null && message.hasOwnProperty("pattern"))
                    object.pattern = message.pattern;
                if (message.feathers != null && message.hasOwnProperty("feathers"))
                    object.feathers = message.feathers;
                return object;
            };

            /**
             * Converts this WEIGHT to JSON.
             * @function toJSON
             * @memberof TestMessage.PALACE.WEIGHT
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WEIGHT.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WEIGHT;
        })();

        PALACE.DEPTH = (function() {

            /**
             * Properties of a DEPTH.
             * @memberof TestMessage.PALACE
             * @interface IDEPTH
             * @property {string|null} [house] DEPTH house
             * @property {string|null} [see] DEPTH see
             * @property {number|null} [simply] DEPTH simply
             * @property {number|null} [are] DEPTH are
             * @property {string|null} [sport] DEPTH sport
             * @property {number|null} [tomorrow] DEPTH tomorrow
             * @property {number|null} [native] DEPTH native
             * @property {string|null} [canal] DEPTH canal
             * @property {number|null} [grabbed] DEPTH grabbed
             * @property {number|null} [smile] DEPTH smile
             * @property {number|null} [wait] DEPTH wait
             * @property {number|null} [meant] DEPTH meant
             * @property {number|null} [greater] DEPTH greater
             * @property {number|null} [who] DEPTH who
             * @property {number|null} [heat] DEPTH heat
             * @property {number|null} [plane] DEPTH plane
             * @property {string|null} [trouble] DEPTH trouble
             * @property {number|null} [lady] DEPTH lady
             * @property {number|null} [stage] DEPTH stage
             * @property {number|null} [many] DEPTH many
             * @property {number|null} [single] DEPTH single
             * @property {number|null} [she] DEPTH she
             * @property {number|null} [each] DEPTH each
             * @property {string|null} [root] DEPTH root
             * @property {number|null} [essential] DEPTH essential
             */

            /**
             * Constructs a new DEPTH.
             * @memberof TestMessage.PALACE
             * @classdesc Represents a DEPTH.
             * @implements IDEPTH
             * @constructor
             * @param {TestMessage.PALACE.IDEPTH=} [properties] Properties to set
             */
            function DEPTH(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DEPTH house.
             * @member {string} house
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.house = "";

            /**
             * DEPTH see.
             * @member {string} see
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.see = "";

            /**
             * DEPTH simply.
             * @member {number} simply
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.simply = 0;

            /**
             * DEPTH are.
             * @member {number} are
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.are = 0;

            /**
             * DEPTH sport.
             * @member {string} sport
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.sport = "";

            /**
             * DEPTH tomorrow.
             * @member {number} tomorrow
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.tomorrow = 0;

            /**
             * DEPTH native.
             * @member {number} native
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.native = 0;

            /**
             * DEPTH canal.
             * @member {string} canal
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.canal = "";

            /**
             * DEPTH grabbed.
             * @member {number} grabbed
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.grabbed = 0;

            /**
             * DEPTH smile.
             * @member {number} smile
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.smile = 0;

            /**
             * DEPTH wait.
             * @member {number} wait
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.wait = 0;

            /**
             * DEPTH meant.
             * @member {number} meant
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.meant = 0;

            /**
             * DEPTH greater.
             * @member {number} greater
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.greater = 0;

            /**
             * DEPTH who.
             * @member {number} who
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.who = 0;

            /**
             * DEPTH heat.
             * @member {number} heat
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.heat = 0;

            /**
             * DEPTH plane.
             * @member {number} plane
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.plane = 0;

            /**
             * DEPTH trouble.
             * @member {string} trouble
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.trouble = "";

            /**
             * DEPTH lady.
             * @member {number} lady
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.lady = 0;

            /**
             * DEPTH stage.
             * @member {number} stage
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.stage = 0;

            /**
             * DEPTH many.
             * @member {number} many
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.many = 0;

            /**
             * DEPTH single.
             * @member {number} single
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.single = 0;

            /**
             * DEPTH she.
             * @member {number} she
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.she = 0;

            /**
             * DEPTH each.
             * @member {number} each
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.each = 0;

            /**
             * DEPTH root.
             * @member {string} root
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.root = "";

            /**
             * DEPTH essential.
             * @member {number} essential
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             */
            DEPTH.prototype.essential = 0;

            /**
             * Creates a new DEPTH instance using the specified properties.
             * @function create
             * @memberof TestMessage.PALACE.DEPTH
             * @static
             * @param {TestMessage.PALACE.IDEPTH=} [properties] Properties to set
             * @returns {TestMessage.PALACE.DEPTH} DEPTH instance
             */
            DEPTH.create = function create(properties) {
                return new DEPTH(properties);
            };

            /**
             * Encodes the specified DEPTH message. Does not implicitly {@link TestMessage.PALACE.DEPTH.verify|verify} messages.
             * @function encode
             * @memberof TestMessage.PALACE.DEPTH
             * @static
             * @param {TestMessage.PALACE.IDEPTH} message DEPTH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DEPTH.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.house != null && message.hasOwnProperty("house"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.house);
                if (message.see != null && message.hasOwnProperty("see"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.see);
                if (message.simply != null && message.hasOwnProperty("simply"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.simply);
                if (message.are != null && message.hasOwnProperty("are"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.are);
                if (message.sport != null && message.hasOwnProperty("sport"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.sport);
                if (message.tomorrow != null && message.hasOwnProperty("tomorrow"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.tomorrow);
                if (message.native != null && message.hasOwnProperty("native"))
                    writer.uint32(/* id 7, wireType 5 =*/61).float(message.native);
                if (message.canal != null && message.hasOwnProperty("canal"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.canal);
                if (message.grabbed != null && message.hasOwnProperty("grabbed"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.grabbed);
                if (message.smile != null && message.hasOwnProperty("smile"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.smile);
                if (message.wait != null && message.hasOwnProperty("wait"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.wait);
                if (message.meant != null && message.hasOwnProperty("meant"))
                    writer.uint32(/* id 12, wireType 5 =*/101).float(message.meant);
                if (message.greater != null && message.hasOwnProperty("greater"))
                    writer.uint32(/* id 13, wireType 0 =*/104).int32(message.greater);
                if (message.who != null && message.hasOwnProperty("who"))
                    writer.uint32(/* id 14, wireType 5 =*/117).float(message.who);
                if (message.heat != null && message.hasOwnProperty("heat"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.heat);
                if (message.plane != null && message.hasOwnProperty("plane"))
                    writer.uint32(/* id 16, wireType 0 =*/128).int32(message.plane);
                if (message.trouble != null && message.hasOwnProperty("trouble"))
                    writer.uint32(/* id 17, wireType 2 =*/138).string(message.trouble);
                if (message.lady != null && message.hasOwnProperty("lady"))
                    writer.uint32(/* id 18, wireType 0 =*/144).int32(message.lady);
                if (message.stage != null && message.hasOwnProperty("stage"))
                    writer.uint32(/* id 19, wireType 0 =*/152).int32(message.stage);
                if (message.many != null && message.hasOwnProperty("many"))
                    writer.uint32(/* id 20, wireType 0 =*/160).int32(message.many);
                if (message.single != null && message.hasOwnProperty("single"))
                    writer.uint32(/* id 21, wireType 0 =*/168).int32(message.single);
                if (message.she != null && message.hasOwnProperty("she"))
                    writer.uint32(/* id 22, wireType 0 =*/176).int32(message.she);
                if (message.each != null && message.hasOwnProperty("each"))
                    writer.uint32(/* id 23, wireType 0 =*/184).int32(message.each);
                if (message.root != null && message.hasOwnProperty("root"))
                    writer.uint32(/* id 24, wireType 2 =*/194).string(message.root);
                if (message.essential != null && message.hasOwnProperty("essential"))
                    writer.uint32(/* id 25, wireType 0 =*/200).int32(message.essential);
                return writer;
            };

            /**
             * Encodes the specified DEPTH message, length delimited. Does not implicitly {@link TestMessage.PALACE.DEPTH.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TestMessage.PALACE.DEPTH
             * @static
             * @param {TestMessage.PALACE.IDEPTH} message DEPTH message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DEPTH.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DEPTH message from the specified reader or buffer.
             * @function decode
             * @memberof TestMessage.PALACE.DEPTH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TestMessage.PALACE.DEPTH} DEPTH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DEPTH.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.PALACE.DEPTH();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.house = reader.string();
                        break;
                    case 2:
                        message.see = reader.string();
                        break;
                    case 3:
                        message.simply = reader.int32();
                        break;
                    case 4:
                        message.are = reader.int32();
                        break;
                    case 5:
                        message.sport = reader.string();
                        break;
                    case 6:
                        message.tomorrow = reader.int32();
                        break;
                    case 7:
                        message.native = reader.float();
                        break;
                    case 8:
                        message.canal = reader.string();
                        break;
                    case 9:
                        message.grabbed = reader.int32();
                        break;
                    case 10:
                        message.smile = reader.int32();
                        break;
                    case 11:
                        message.wait = reader.int32();
                        break;
                    case 12:
                        message.meant = reader.float();
                        break;
                    case 13:
                        message.greater = reader.int32();
                        break;
                    case 14:
                        message.who = reader.float();
                        break;
                    case 15:
                        message.heat = reader.int32();
                        break;
                    case 16:
                        message.plane = reader.int32();
                        break;
                    case 17:
                        message.trouble = reader.string();
                        break;
                    case 18:
                        message.lady = reader.int32();
                        break;
                    case 19:
                        message.stage = reader.int32();
                        break;
                    case 20:
                        message.many = reader.int32();
                        break;
                    case 21:
                        message.single = reader.int32();
                        break;
                    case 22:
                        message.she = reader.int32();
                        break;
                    case 23:
                        message.each = reader.int32();
                        break;
                    case 24:
                        message.root = reader.string();
                        break;
                    case 25:
                        message.essential = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DEPTH message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TestMessage.PALACE.DEPTH
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TestMessage.PALACE.DEPTH} DEPTH
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DEPTH.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DEPTH message.
             * @function verify
             * @memberof TestMessage.PALACE.DEPTH
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DEPTH.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.house != null && message.hasOwnProperty("house"))
                    if (!$util.isString(message.house))
                        return "house: string expected";
                if (message.see != null && message.hasOwnProperty("see"))
                    if (!$util.isString(message.see))
                        return "see: string expected";
                if (message.simply != null && message.hasOwnProperty("simply"))
                    if (!$util.isInteger(message.simply))
                        return "simply: integer expected";
                if (message.are != null && message.hasOwnProperty("are"))
                    if (!$util.isInteger(message.are))
                        return "are: integer expected";
                if (message.sport != null && message.hasOwnProperty("sport"))
                    if (!$util.isString(message.sport))
                        return "sport: string expected";
                if (message.tomorrow != null && message.hasOwnProperty("tomorrow"))
                    if (!$util.isInteger(message.tomorrow))
                        return "tomorrow: integer expected";
                if (message.native != null && message.hasOwnProperty("native"))
                    if (typeof message.native !== "number")
                        return "native: number expected";
                if (message.canal != null && message.hasOwnProperty("canal"))
                    if (!$util.isString(message.canal))
                        return "canal: string expected";
                if (message.grabbed != null && message.hasOwnProperty("grabbed"))
                    if (!$util.isInteger(message.grabbed))
                        return "grabbed: integer expected";
                if (message.smile != null && message.hasOwnProperty("smile"))
                    if (!$util.isInteger(message.smile))
                        return "smile: integer expected";
                if (message.wait != null && message.hasOwnProperty("wait"))
                    if (!$util.isInteger(message.wait))
                        return "wait: integer expected";
                if (message.meant != null && message.hasOwnProperty("meant"))
                    if (typeof message.meant !== "number")
                        return "meant: number expected";
                if (message.greater != null && message.hasOwnProperty("greater"))
                    if (!$util.isInteger(message.greater))
                        return "greater: integer expected";
                if (message.who != null && message.hasOwnProperty("who"))
                    if (typeof message.who !== "number")
                        return "who: number expected";
                if (message.heat != null && message.hasOwnProperty("heat"))
                    if (!$util.isInteger(message.heat))
                        return "heat: integer expected";
                if (message.plane != null && message.hasOwnProperty("plane"))
                    if (!$util.isInteger(message.plane))
                        return "plane: integer expected";
                if (message.trouble != null && message.hasOwnProperty("trouble"))
                    if (!$util.isString(message.trouble))
                        return "trouble: string expected";
                if (message.lady != null && message.hasOwnProperty("lady"))
                    if (!$util.isInteger(message.lady))
                        return "lady: integer expected";
                if (message.stage != null && message.hasOwnProperty("stage"))
                    if (!$util.isInteger(message.stage))
                        return "stage: integer expected";
                if (message.many != null && message.hasOwnProperty("many"))
                    if (!$util.isInteger(message.many))
                        return "many: integer expected";
                if (message.single != null && message.hasOwnProperty("single"))
                    if (!$util.isInteger(message.single))
                        return "single: integer expected";
                if (message.she != null && message.hasOwnProperty("she"))
                    if (!$util.isInteger(message.she))
                        return "she: integer expected";
                if (message.each != null && message.hasOwnProperty("each"))
                    if (!$util.isInteger(message.each))
                        return "each: integer expected";
                if (message.root != null && message.hasOwnProperty("root"))
                    if (!$util.isString(message.root))
                        return "root: string expected";
                if (message.essential != null && message.hasOwnProperty("essential"))
                    if (!$util.isInteger(message.essential))
                        return "essential: integer expected";
                return null;
            };

            /**
             * Creates a DEPTH message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TestMessage.PALACE.DEPTH
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TestMessage.PALACE.DEPTH} DEPTH
             */
            DEPTH.fromObject = function fromObject(object) {
                if (object instanceof $root.TestMessage.PALACE.DEPTH)
                    return object;
                var message = new $root.TestMessage.PALACE.DEPTH();
                if (object.house != null)
                    message.house = String(object.house);
                if (object.see != null)
                    message.see = String(object.see);
                if (object.simply != null)
                    message.simply = object.simply | 0;
                if (object.are != null)
                    message.are = object.are | 0;
                if (object.sport != null)
                    message.sport = String(object.sport);
                if (object.tomorrow != null)
                    message.tomorrow = object.tomorrow | 0;
                if (object.native != null)
                    message.native = Number(object.native);
                if (object.canal != null)
                    message.canal = String(object.canal);
                if (object.grabbed != null)
                    message.grabbed = object.grabbed | 0;
                if (object.smile != null)
                    message.smile = object.smile | 0;
                if (object.wait != null)
                    message.wait = object.wait | 0;
                if (object.meant != null)
                    message.meant = Number(object.meant);
                if (object.greater != null)
                    message.greater = object.greater | 0;
                if (object.who != null)
                    message.who = Number(object.who);
                if (object.heat != null)
                    message.heat = object.heat | 0;
                if (object.plane != null)
                    message.plane = object.plane | 0;
                if (object.trouble != null)
                    message.trouble = String(object.trouble);
                if (object.lady != null)
                    message.lady = object.lady | 0;
                if (object.stage != null)
                    message.stage = object.stage | 0;
                if (object.many != null)
                    message.many = object.many | 0;
                if (object.single != null)
                    message.single = object.single | 0;
                if (object.she != null)
                    message.she = object.she | 0;
                if (object.each != null)
                    message.each = object.each | 0;
                if (object.root != null)
                    message.root = String(object.root);
                if (object.essential != null)
                    message.essential = object.essential | 0;
                return message;
            };

            /**
             * Creates a plain object from a DEPTH message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TestMessage.PALACE.DEPTH
             * @static
             * @param {TestMessage.PALACE.DEPTH} message DEPTH
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DEPTH.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.house = "";
                    object.see = "";
                    object.simply = 0;
                    object.are = 0;
                    object.sport = "";
                    object.tomorrow = 0;
                    object.native = 0;
                    object.canal = "";
                    object.grabbed = 0;
                    object.smile = 0;
                    object.wait = 0;
                    object.meant = 0;
                    object.greater = 0;
                    object.who = 0;
                    object.heat = 0;
                    object.plane = 0;
                    object.trouble = "";
                    object.lady = 0;
                    object.stage = 0;
                    object.many = 0;
                    object.single = 0;
                    object.she = 0;
                    object.each = 0;
                    object.root = "";
                    object.essential = 0;
                }
                if (message.house != null && message.hasOwnProperty("house"))
                    object.house = message.house;
                if (message.see != null && message.hasOwnProperty("see"))
                    object.see = message.see;
                if (message.simply != null && message.hasOwnProperty("simply"))
                    object.simply = message.simply;
                if (message.are != null && message.hasOwnProperty("are"))
                    object.are = message.are;
                if (message.sport != null && message.hasOwnProperty("sport"))
                    object.sport = message.sport;
                if (message.tomorrow != null && message.hasOwnProperty("tomorrow"))
                    object.tomorrow = message.tomorrow;
                if (message.native != null && message.hasOwnProperty("native"))
                    object.native = options.json && !isFinite(message.native) ? String(message.native) : message.native;
                if (message.canal != null && message.hasOwnProperty("canal"))
                    object.canal = message.canal;
                if (message.grabbed != null && message.hasOwnProperty("grabbed"))
                    object.grabbed = message.grabbed;
                if (message.smile != null && message.hasOwnProperty("smile"))
                    object.smile = message.smile;
                if (message.wait != null && message.hasOwnProperty("wait"))
                    object.wait = message.wait;
                if (message.meant != null && message.hasOwnProperty("meant"))
                    object.meant = options.json && !isFinite(message.meant) ? String(message.meant) : message.meant;
                if (message.greater != null && message.hasOwnProperty("greater"))
                    object.greater = message.greater;
                if (message.who != null && message.hasOwnProperty("who"))
                    object.who = options.json && !isFinite(message.who) ? String(message.who) : message.who;
                if (message.heat != null && message.hasOwnProperty("heat"))
                    object.heat = message.heat;
                if (message.plane != null && message.hasOwnProperty("plane"))
                    object.plane = message.plane;
                if (message.trouble != null && message.hasOwnProperty("trouble"))
                    object.trouble = message.trouble;
                if (message.lady != null && message.hasOwnProperty("lady"))
                    object.lady = message.lady;
                if (message.stage != null && message.hasOwnProperty("stage"))
                    object.stage = message.stage;
                if (message.many != null && message.hasOwnProperty("many"))
                    object.many = message.many;
                if (message.single != null && message.hasOwnProperty("single"))
                    object.single = message.single;
                if (message.she != null && message.hasOwnProperty("she"))
                    object.she = message.she;
                if (message.each != null && message.hasOwnProperty("each"))
                    object.each = message.each;
                if (message.root != null && message.hasOwnProperty("root"))
                    object.root = message.root;
                if (message.essential != null && message.hasOwnProperty("essential"))
                    object.essential = message.essential;
                return object;
            };

            /**
             * Converts this DEPTH to JSON.
             * @function toJSON
             * @memberof TestMessage.PALACE.DEPTH
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DEPTH.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DEPTH;
        })();

        return PALACE;
    })();

    return TestMessage;
})();

module.exports = $root;
