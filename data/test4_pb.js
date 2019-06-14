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
     * @property {number|null} [certain] TestMessage certain
     * @property {string|null} [tonight] TestMessage tonight
     * @property {number|null} [examine] TestMessage examine
     * @property {string|null} [touch] TestMessage touch
     * @property {number|null} [captain] TestMessage captain
     * @property {string|null} ["if"] TestMessage if
     * @property {string|null} [whose] TestMessage whose
     * @property {string|null} [unknown] TestMessage unknown
     * @property {string|null} [pure] TestMessage pure
     * @property {TestMessage.IDRAWN|null} [drawn] TestMessage drawn
     * @property {string|null} [smell] TestMessage smell
     * @property {string|null} [stock] TestMessage stock
     * @property {number|null} [sure] TestMessage sure
     * @property {number|null} [transportation] TestMessage transportation
     * @property {number|null} [familiar] TestMessage familiar
     * @property {number|null} [moment] TestMessage moment
     * @property {string|null} [traffic] TestMessage traffic
     * @property {number|null} [wear] TestMessage wear
     * @property {number|null} [compound] TestMessage compound
     * @property {number|null} [teach] TestMessage teach
     * @property {number|null} [by] TestMessage by
     * @property {string|null} [attempt] TestMessage attempt
     * @property {number|null} [inside] TestMessage inside
     * @property {number|null} [foreign] TestMessage foreign
     * @property {number|null} [collect] TestMessage collect
     * @property {number|null} [balance] TestMessage balance
     * @property {number|null} [bone] TestMessage bone
     * @property {string|null} [first] TestMessage first
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
     * TestMessage certain.
     * @member {number} certain
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.certain = 0;

    /**
     * TestMessage tonight.
     * @member {string} tonight
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.tonight = "";

    /**
     * TestMessage examine.
     * @member {number} examine
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.examine = 0;

    /**
     * TestMessage touch.
     * @member {string} touch
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.touch = "";

    /**
     * TestMessage captain.
     * @member {number} captain
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.captain = 0;

    /**
     * TestMessage if.
     * @member {string} if
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype["if"] = "";

    /**
     * TestMessage whose.
     * @member {string} whose
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.whose = "";

    /**
     * TestMessage unknown.
     * @member {string} unknown
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.unknown = "";

    /**
     * TestMessage pure.
     * @member {string} pure
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.pure = "";

    /**
     * TestMessage drawn.
     * @member {TestMessage.IDRAWN|null|undefined} drawn
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.drawn = null;

    /**
     * TestMessage smell.
     * @member {string} smell
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.smell = "";

    /**
     * TestMessage stock.
     * @member {string} stock
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.stock = "";

    /**
     * TestMessage sure.
     * @member {number} sure
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.sure = 0;

    /**
     * TestMessage transportation.
     * @member {number} transportation
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.transportation = 0;

    /**
     * TestMessage familiar.
     * @member {number} familiar
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.familiar = 0;

    /**
     * TestMessage moment.
     * @member {number} moment
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.moment = 0;

    /**
     * TestMessage traffic.
     * @member {string} traffic
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.traffic = "";

    /**
     * TestMessage wear.
     * @member {number} wear
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.wear = 0;

    /**
     * TestMessage compound.
     * @member {number} compound
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.compound = 0;

    /**
     * TestMessage teach.
     * @member {number} teach
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.teach = 0;

    /**
     * TestMessage by.
     * @member {number} by
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.by = 0;

    /**
     * TestMessage attempt.
     * @member {string} attempt
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.attempt = "";

    /**
     * TestMessage inside.
     * @member {number} inside
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.inside = 0;

    /**
     * TestMessage foreign.
     * @member {number} foreign
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.foreign = 0;

    /**
     * TestMessage collect.
     * @member {number} collect
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.collect = 0;

    /**
     * TestMessage balance.
     * @member {number} balance
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.balance = 0;

    /**
     * TestMessage bone.
     * @member {number} bone
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.bone = 0;

    /**
     * TestMessage first.
     * @member {string} first
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.first = "";

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
        if (message.certain != null && message.hasOwnProperty("certain"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.certain);
        if (message.tonight != null && message.hasOwnProperty("tonight"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tonight);
        if (message.examine != null && message.hasOwnProperty("examine"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.examine);
        if (message.touch != null && message.hasOwnProperty("touch"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.touch);
        if (message.captain != null && message.hasOwnProperty("captain"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.captain);
        if (message["if"] != null && message.hasOwnProperty("if"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message["if"]);
        if (message.whose != null && message.hasOwnProperty("whose"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.whose);
        if (message.unknown != null && message.hasOwnProperty("unknown"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.unknown);
        if (message.pure != null && message.hasOwnProperty("pure"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.pure);
        if (message.drawn != null && message.hasOwnProperty("drawn"))
            $root.TestMessage.DRAWN.encode(message.drawn, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.smell != null && message.hasOwnProperty("smell"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.smell);
        if (message.stock != null && message.hasOwnProperty("stock"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.stock);
        if (message.sure != null && message.hasOwnProperty("sure"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.sure);
        if (message.transportation != null && message.hasOwnProperty("transportation"))
            writer.uint32(/* id 14, wireType 5 =*/117).float(message.transportation);
        if (message.familiar != null && message.hasOwnProperty("familiar"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.familiar);
        if (message.moment != null && message.hasOwnProperty("moment"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.moment);
        if (message.traffic != null && message.hasOwnProperty("traffic"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.traffic);
        if (message.wear != null && message.hasOwnProperty("wear"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.wear);
        if (message.compound != null && message.hasOwnProperty("compound"))
            writer.uint32(/* id 19, wireType 5 =*/157).float(message.compound);
        if (message.teach != null && message.hasOwnProperty("teach"))
            writer.uint32(/* id 20, wireType 5 =*/165).float(message.teach);
        if (message.by != null && message.hasOwnProperty("by"))
            writer.uint32(/* id 21, wireType 5 =*/173).float(message.by);
        if (message.attempt != null && message.hasOwnProperty("attempt"))
            writer.uint32(/* id 22, wireType 2 =*/178).string(message.attempt);
        if (message.inside != null && message.hasOwnProperty("inside"))
            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.inside);
        if (message.foreign != null && message.hasOwnProperty("foreign"))
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.foreign);
        if (message.collect != null && message.hasOwnProperty("collect"))
            writer.uint32(/* id 25, wireType 5 =*/205).float(message.collect);
        if (message.balance != null && message.hasOwnProperty("balance"))
            writer.uint32(/* id 26, wireType 5 =*/213).float(message.balance);
        if (message.bone != null && message.hasOwnProperty("bone"))
            writer.uint32(/* id 27, wireType 0 =*/216).int32(message.bone);
        if (message.first != null && message.hasOwnProperty("first"))
            writer.uint32(/* id 28, wireType 2 =*/226).string(message.first);
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
                message.certain = reader.int32();
                break;
            case 2:
                message.tonight = reader.string();
                break;
            case 3:
                message.examine = reader.float();
                break;
            case 4:
                message.touch = reader.string();
                break;
            case 5:
                message.captain = reader.int32();
                break;
            case 6:
                message["if"] = reader.string();
                break;
            case 7:
                message.whose = reader.string();
                break;
            case 8:
                message.unknown = reader.string();
                break;
            case 9:
                message.pure = reader.string();
                break;
            case 10:
                message.drawn = $root.TestMessage.DRAWN.decode(reader, reader.uint32());
                break;
            case 11:
                message.smell = reader.string();
                break;
            case 12:
                message.stock = reader.string();
                break;
            case 13:
                message.sure = reader.int32();
                break;
            case 14:
                message.transportation = reader.float();
                break;
            case 15:
                message.familiar = reader.int32();
                break;
            case 16:
                message.moment = reader.int32();
                break;
            case 17:
                message.traffic = reader.string();
                break;
            case 18:
                message.wear = reader.int32();
                break;
            case 19:
                message.compound = reader.float();
                break;
            case 20:
                message.teach = reader.float();
                break;
            case 21:
                message.by = reader.float();
                break;
            case 22:
                message.attempt = reader.string();
                break;
            case 23:
                message.inside = reader.int32();
                break;
            case 24:
                message.foreign = reader.int32();
                break;
            case 25:
                message.collect = reader.float();
                break;
            case 26:
                message.balance = reader.float();
                break;
            case 27:
                message.bone = reader.int32();
                break;
            case 28:
                message.first = reader.string();
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
        if (message.certain != null && message.hasOwnProperty("certain"))
            if (!$util.isInteger(message.certain))
                return "certain: integer expected";
        if (message.tonight != null && message.hasOwnProperty("tonight"))
            if (!$util.isString(message.tonight))
                return "tonight: string expected";
        if (message.examine != null && message.hasOwnProperty("examine"))
            if (typeof message.examine !== "number")
                return "examine: number expected";
        if (message.touch != null && message.hasOwnProperty("touch"))
            if (!$util.isString(message.touch))
                return "touch: string expected";
        if (message.captain != null && message.hasOwnProperty("captain"))
            if (!$util.isInteger(message.captain))
                return "captain: integer expected";
        if (message["if"] != null && message.hasOwnProperty("if"))
            if (!$util.isString(message["if"]))
                return "if: string expected";
        if (message.whose != null && message.hasOwnProperty("whose"))
            if (!$util.isString(message.whose))
                return "whose: string expected";
        if (message.unknown != null && message.hasOwnProperty("unknown"))
            if (!$util.isString(message.unknown))
                return "unknown: string expected";
        if (message.pure != null && message.hasOwnProperty("pure"))
            if (!$util.isString(message.pure))
                return "pure: string expected";
        if (message.drawn != null && message.hasOwnProperty("drawn")) {
            var error = $root.TestMessage.DRAWN.verify(message.drawn);
            if (error)
                return "drawn." + error;
        }
        if (message.smell != null && message.hasOwnProperty("smell"))
            if (!$util.isString(message.smell))
                return "smell: string expected";
        if (message.stock != null && message.hasOwnProperty("stock"))
            if (!$util.isString(message.stock))
                return "stock: string expected";
        if (message.sure != null && message.hasOwnProperty("sure"))
            if (!$util.isInteger(message.sure))
                return "sure: integer expected";
        if (message.transportation != null && message.hasOwnProperty("transportation"))
            if (typeof message.transportation !== "number")
                return "transportation: number expected";
        if (message.familiar != null && message.hasOwnProperty("familiar"))
            if (!$util.isInteger(message.familiar))
                return "familiar: integer expected";
        if (message.moment != null && message.hasOwnProperty("moment"))
            if (!$util.isInteger(message.moment))
                return "moment: integer expected";
        if (message.traffic != null && message.hasOwnProperty("traffic"))
            if (!$util.isString(message.traffic))
                return "traffic: string expected";
        if (message.wear != null && message.hasOwnProperty("wear"))
            if (!$util.isInteger(message.wear))
                return "wear: integer expected";
        if (message.compound != null && message.hasOwnProperty("compound"))
            if (typeof message.compound !== "number")
                return "compound: number expected";
        if (message.teach != null && message.hasOwnProperty("teach"))
            if (typeof message.teach !== "number")
                return "teach: number expected";
        if (message.by != null && message.hasOwnProperty("by"))
            if (typeof message.by !== "number")
                return "by: number expected";
        if (message.attempt != null && message.hasOwnProperty("attempt"))
            if (!$util.isString(message.attempt))
                return "attempt: string expected";
        if (message.inside != null && message.hasOwnProperty("inside"))
            if (!$util.isInteger(message.inside))
                return "inside: integer expected";
        if (message.foreign != null && message.hasOwnProperty("foreign"))
            if (!$util.isInteger(message.foreign))
                return "foreign: integer expected";
        if (message.collect != null && message.hasOwnProperty("collect"))
            if (typeof message.collect !== "number")
                return "collect: number expected";
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (typeof message.balance !== "number")
                return "balance: number expected";
        if (message.bone != null && message.hasOwnProperty("bone"))
            if (!$util.isInteger(message.bone))
                return "bone: integer expected";
        if (message.first != null && message.hasOwnProperty("first"))
            if (!$util.isString(message.first))
                return "first: string expected";
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
        if (object.certain != null)
            message.certain = object.certain | 0;
        if (object.tonight != null)
            message.tonight = String(object.tonight);
        if (object.examine != null)
            message.examine = Number(object.examine);
        if (object.touch != null)
            message.touch = String(object.touch);
        if (object.captain != null)
            message.captain = object.captain | 0;
        if (object["if"] != null)
            message["if"] = String(object["if"]);
        if (object.whose != null)
            message.whose = String(object.whose);
        if (object.unknown != null)
            message.unknown = String(object.unknown);
        if (object.pure != null)
            message.pure = String(object.pure);
        if (object.drawn != null) {
            if (typeof object.drawn !== "object")
                throw TypeError(".TestMessage.drawn: object expected");
            message.drawn = $root.TestMessage.DRAWN.fromObject(object.drawn);
        }
        if (object.smell != null)
            message.smell = String(object.smell);
        if (object.stock != null)
            message.stock = String(object.stock);
        if (object.sure != null)
            message.sure = object.sure | 0;
        if (object.transportation != null)
            message.transportation = Number(object.transportation);
        if (object.familiar != null)
            message.familiar = object.familiar | 0;
        if (object.moment != null)
            message.moment = object.moment | 0;
        if (object.traffic != null)
            message.traffic = String(object.traffic);
        if (object.wear != null)
            message.wear = object.wear | 0;
        if (object.compound != null)
            message.compound = Number(object.compound);
        if (object.teach != null)
            message.teach = Number(object.teach);
        if (object.by != null)
            message.by = Number(object.by);
        if (object.attempt != null)
            message.attempt = String(object.attempt);
        if (object.inside != null)
            message.inside = object.inside | 0;
        if (object.foreign != null)
            message.foreign = object.foreign | 0;
        if (object.collect != null)
            message.collect = Number(object.collect);
        if (object.balance != null)
            message.balance = Number(object.balance);
        if (object.bone != null)
            message.bone = object.bone | 0;
        if (object.first != null)
            message.first = String(object.first);
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
            object.certain = 0;
            object.tonight = "";
            object.examine = 0;
            object.touch = "";
            object.captain = 0;
            object["if"] = "";
            object.whose = "";
            object.unknown = "";
            object.pure = "";
            object.drawn = null;
            object.smell = "";
            object.stock = "";
            object.sure = 0;
            object.transportation = 0;
            object.familiar = 0;
            object.moment = 0;
            object.traffic = "";
            object.wear = 0;
            object.compound = 0;
            object.teach = 0;
            object.by = 0;
            object.attempt = "";
            object.inside = 0;
            object.foreign = 0;
            object.collect = 0;
            object.balance = 0;
            object.bone = 0;
            object.first = "";
        }
        if (message.certain != null && message.hasOwnProperty("certain"))
            object.certain = message.certain;
        if (message.tonight != null && message.hasOwnProperty("tonight"))
            object.tonight = message.tonight;
        if (message.examine != null && message.hasOwnProperty("examine"))
            object.examine = options.json && !isFinite(message.examine) ? String(message.examine) : message.examine;
        if (message.touch != null && message.hasOwnProperty("touch"))
            object.touch = message.touch;
        if (message.captain != null && message.hasOwnProperty("captain"))
            object.captain = message.captain;
        if (message["if"] != null && message.hasOwnProperty("if"))
            object["if"] = message["if"];
        if (message.whose != null && message.hasOwnProperty("whose"))
            object.whose = message.whose;
        if (message.unknown != null && message.hasOwnProperty("unknown"))
            object.unknown = message.unknown;
        if (message.pure != null && message.hasOwnProperty("pure"))
            object.pure = message.pure;
        if (message.drawn != null && message.hasOwnProperty("drawn"))
            object.drawn = $root.TestMessage.DRAWN.toObject(message.drawn, options);
        if (message.smell != null && message.hasOwnProperty("smell"))
            object.smell = message.smell;
        if (message.stock != null && message.hasOwnProperty("stock"))
            object.stock = message.stock;
        if (message.sure != null && message.hasOwnProperty("sure"))
            object.sure = message.sure;
        if (message.transportation != null && message.hasOwnProperty("transportation"))
            object.transportation = options.json && !isFinite(message.transportation) ? String(message.transportation) : message.transportation;
        if (message.familiar != null && message.hasOwnProperty("familiar"))
            object.familiar = message.familiar;
        if (message.moment != null && message.hasOwnProperty("moment"))
            object.moment = message.moment;
        if (message.traffic != null && message.hasOwnProperty("traffic"))
            object.traffic = message.traffic;
        if (message.wear != null && message.hasOwnProperty("wear"))
            object.wear = message.wear;
        if (message.compound != null && message.hasOwnProperty("compound"))
            object.compound = options.json && !isFinite(message.compound) ? String(message.compound) : message.compound;
        if (message.teach != null && message.hasOwnProperty("teach"))
            object.teach = options.json && !isFinite(message.teach) ? String(message.teach) : message.teach;
        if (message.by != null && message.hasOwnProperty("by"))
            object.by = options.json && !isFinite(message.by) ? String(message.by) : message.by;
        if (message.attempt != null && message.hasOwnProperty("attempt"))
            object.attempt = message.attempt;
        if (message.inside != null && message.hasOwnProperty("inside"))
            object.inside = message.inside;
        if (message.foreign != null && message.hasOwnProperty("foreign"))
            object.foreign = message.foreign;
        if (message.collect != null && message.hasOwnProperty("collect"))
            object.collect = options.json && !isFinite(message.collect) ? String(message.collect) : message.collect;
        if (message.balance != null && message.hasOwnProperty("balance"))
            object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
        if (message.bone != null && message.hasOwnProperty("bone"))
            object.bone = message.bone;
        if (message.first != null && message.hasOwnProperty("first"))
            object.first = message.first;
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

    TestMessage.DRAWN = (function() {

        /**
         * Properties of a DRAWN.
         * @memberof TestMessage
         * @interface IDRAWN
         * @property {TestMessage.DRAWN.IDONKEY|null} [donkey] DRAWN donkey
         * @property {number|null} [palace] DRAWN palace
         * @property {string|null} [nature] DRAWN nature
         * @property {string|null} [pet] DRAWN pet
         * @property {number|null} [plan] DRAWN plan
         * @property {number|null} [corn] DRAWN corn
         * @property {number|null} [object] DRAWN object
         * @property {number|null} [steady] DRAWN steady
         * @property {number|null} [kind] DRAWN kind
         * @property {string|null} [sign] DRAWN sign
         * @property {string|null} [can] DRAWN can
         * @property {string|null} [struck] DRAWN struck
         * @property {number|null} [height] DRAWN height
         * @property {string|null} [consonant] DRAWN consonant
         * @property {number|null} [kitchen] DRAWN kitchen
         */

        /**
         * Constructs a new DRAWN.
         * @memberof TestMessage
         * @classdesc Represents a DRAWN.
         * @implements IDRAWN
         * @constructor
         * @param {TestMessage.IDRAWN=} [properties] Properties to set
         */
        function DRAWN(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DRAWN donkey.
         * @member {TestMessage.DRAWN.IDONKEY|null|undefined} donkey
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.donkey = null;

        /**
         * DRAWN palace.
         * @member {number} palace
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.palace = 0;

        /**
         * DRAWN nature.
         * @member {string} nature
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.nature = "";

        /**
         * DRAWN pet.
         * @member {string} pet
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.pet = "";

        /**
         * DRAWN plan.
         * @member {number} plan
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.plan = 0;

        /**
         * DRAWN corn.
         * @member {number} corn
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.corn = 0;

        /**
         * DRAWN object.
         * @member {number} object
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.object = 0;

        /**
         * DRAWN steady.
         * @member {number} steady
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.steady = 0;

        /**
         * DRAWN kind.
         * @member {number} kind
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.kind = 0;

        /**
         * DRAWN sign.
         * @member {string} sign
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.sign = "";

        /**
         * DRAWN can.
         * @member {string} can
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.can = "";

        /**
         * DRAWN struck.
         * @member {string} struck
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.struck = "";

        /**
         * DRAWN height.
         * @member {number} height
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.height = 0;

        /**
         * DRAWN consonant.
         * @member {string} consonant
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.consonant = "";

        /**
         * DRAWN kitchen.
         * @member {number} kitchen
         * @memberof TestMessage.DRAWN
         * @instance
         */
        DRAWN.prototype.kitchen = 0;

        /**
         * Creates a new DRAWN instance using the specified properties.
         * @function create
         * @memberof TestMessage.DRAWN
         * @static
         * @param {TestMessage.IDRAWN=} [properties] Properties to set
         * @returns {TestMessage.DRAWN} DRAWN instance
         */
        DRAWN.create = function create(properties) {
            return new DRAWN(properties);
        };

        /**
         * Encodes the specified DRAWN message. Does not implicitly {@link TestMessage.DRAWN.verify|verify} messages.
         * @function encode
         * @memberof TestMessage.DRAWN
         * @static
         * @param {TestMessage.IDRAWN} message DRAWN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DRAWN.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.donkey != null && message.hasOwnProperty("donkey"))
                $root.TestMessage.DRAWN.DONKEY.encode(message.donkey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.palace != null && message.hasOwnProperty("palace"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.palace);
            if (message.nature != null && message.hasOwnProperty("nature"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nature);
            if (message.pet != null && message.hasOwnProperty("pet"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pet);
            if (message.plan != null && message.hasOwnProperty("plan"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.plan);
            if (message.corn != null && message.hasOwnProperty("corn"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.corn);
            if (message.object != null && message.hasOwnProperty("object"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.object);
            if (message.steady != null && message.hasOwnProperty("steady"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.steady);
            if (message.kind != null && message.hasOwnProperty("kind"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.kind);
            if (message.sign != null && message.hasOwnProperty("sign"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.sign);
            if (message.can != null && message.hasOwnProperty("can"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.can);
            if (message.struck != null && message.hasOwnProperty("struck"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.struck);
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.height);
            if (message.consonant != null && message.hasOwnProperty("consonant"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.consonant);
            if (message.kitchen != null && message.hasOwnProperty("kitchen"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.kitchen);
            return writer;
        };

        /**
         * Encodes the specified DRAWN message, length delimited. Does not implicitly {@link TestMessage.DRAWN.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TestMessage.DRAWN
         * @static
         * @param {TestMessage.IDRAWN} message DRAWN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DRAWN.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DRAWN message from the specified reader or buffer.
         * @function decode
         * @memberof TestMessage.DRAWN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TestMessage.DRAWN} DRAWN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DRAWN.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.donkey = $root.TestMessage.DRAWN.DONKEY.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.palace = reader.float();
                    break;
                case 3:
                    message.nature = reader.string();
                    break;
                case 4:
                    message.pet = reader.string();
                    break;
                case 5:
                    message.plan = reader.float();
                    break;
                case 6:
                    message.corn = reader.float();
                    break;
                case 7:
                    message.object = reader.int32();
                    break;
                case 8:
                    message.steady = reader.int32();
                    break;
                case 9:
                    message.kind = reader.int32();
                    break;
                case 10:
                    message.sign = reader.string();
                    break;
                case 11:
                    message.can = reader.string();
                    break;
                case 12:
                    message.struck = reader.string();
                    break;
                case 13:
                    message.height = reader.int32();
                    break;
                case 14:
                    message.consonant = reader.string();
                    break;
                case 15:
                    message.kitchen = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DRAWN message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TestMessage.DRAWN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TestMessage.DRAWN} DRAWN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DRAWN.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DRAWN message.
         * @function verify
         * @memberof TestMessage.DRAWN
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DRAWN.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.donkey != null && message.hasOwnProperty("donkey")) {
                var error = $root.TestMessage.DRAWN.DONKEY.verify(message.donkey);
                if (error)
                    return "donkey." + error;
            }
            if (message.palace != null && message.hasOwnProperty("palace"))
                if (typeof message.palace !== "number")
                    return "palace: number expected";
            if (message.nature != null && message.hasOwnProperty("nature"))
                if (!$util.isString(message.nature))
                    return "nature: string expected";
            if (message.pet != null && message.hasOwnProperty("pet"))
                if (!$util.isString(message.pet))
                    return "pet: string expected";
            if (message.plan != null && message.hasOwnProperty("plan"))
                if (typeof message.plan !== "number")
                    return "plan: number expected";
            if (message.corn != null && message.hasOwnProperty("corn"))
                if (typeof message.corn !== "number")
                    return "corn: number expected";
            if (message.object != null && message.hasOwnProperty("object"))
                if (!$util.isInteger(message.object))
                    return "object: integer expected";
            if (message.steady != null && message.hasOwnProperty("steady"))
                if (!$util.isInteger(message.steady))
                    return "steady: integer expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isInteger(message.kind))
                    return "kind: integer expected";
            if (message.sign != null && message.hasOwnProperty("sign"))
                if (!$util.isString(message.sign))
                    return "sign: string expected";
            if (message.can != null && message.hasOwnProperty("can"))
                if (!$util.isString(message.can))
                    return "can: string expected";
            if (message.struck != null && message.hasOwnProperty("struck"))
                if (!$util.isString(message.struck))
                    return "struck: string expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.consonant != null && message.hasOwnProperty("consonant"))
                if (!$util.isString(message.consonant))
                    return "consonant: string expected";
            if (message.kitchen != null && message.hasOwnProperty("kitchen"))
                if (!$util.isInteger(message.kitchen))
                    return "kitchen: integer expected";
            return null;
        };

        /**
         * Creates a DRAWN message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TestMessage.DRAWN
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TestMessage.DRAWN} DRAWN
         */
        DRAWN.fromObject = function fromObject(object) {
            if (object instanceof $root.TestMessage.DRAWN)
                return object;
            var message = new $root.TestMessage.DRAWN();
            if (object.donkey != null) {
                if (typeof object.donkey !== "object")
                    throw TypeError(".TestMessage.DRAWN.donkey: object expected");
                message.donkey = $root.TestMessage.DRAWN.DONKEY.fromObject(object.donkey);
            }
            if (object.palace != null)
                message.palace = Number(object.palace);
            if (object.nature != null)
                message.nature = String(object.nature);
            if (object.pet != null)
                message.pet = String(object.pet);
            if (object.plan != null)
                message.plan = Number(object.plan);
            if (object.corn != null)
                message.corn = Number(object.corn);
            if (object.object != null)
                message.object = object.object | 0;
            if (object.steady != null)
                message.steady = object.steady | 0;
            if (object.kind != null)
                message.kind = object.kind | 0;
            if (object.sign != null)
                message.sign = String(object.sign);
            if (object.can != null)
                message.can = String(object.can);
            if (object.struck != null)
                message.struck = String(object.struck);
            if (object.height != null)
                message.height = object.height | 0;
            if (object.consonant != null)
                message.consonant = String(object.consonant);
            if (object.kitchen != null)
                message.kitchen = object.kitchen | 0;
            return message;
        };

        /**
         * Creates a plain object from a DRAWN message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TestMessage.DRAWN
         * @static
         * @param {TestMessage.DRAWN} message DRAWN
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DRAWN.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.donkey = null;
                object.palace = 0;
                object.nature = "";
                object.pet = "";
                object.plan = 0;
                object.corn = 0;
                object.object = 0;
                object.steady = 0;
                object.kind = 0;
                object.sign = "";
                object.can = "";
                object.struck = "";
                object.height = 0;
                object.consonant = "";
                object.kitchen = 0;
            }
            if (message.donkey != null && message.hasOwnProperty("donkey"))
                object.donkey = $root.TestMessage.DRAWN.DONKEY.toObject(message.donkey, options);
            if (message.palace != null && message.hasOwnProperty("palace"))
                object.palace = options.json && !isFinite(message.palace) ? String(message.palace) : message.palace;
            if (message.nature != null && message.hasOwnProperty("nature"))
                object.nature = message.nature;
            if (message.pet != null && message.hasOwnProperty("pet"))
                object.pet = message.pet;
            if (message.plan != null && message.hasOwnProperty("plan"))
                object.plan = options.json && !isFinite(message.plan) ? String(message.plan) : message.plan;
            if (message.corn != null && message.hasOwnProperty("corn"))
                object.corn = options.json && !isFinite(message.corn) ? String(message.corn) : message.corn;
            if (message.object != null && message.hasOwnProperty("object"))
                object.object = message.object;
            if (message.steady != null && message.hasOwnProperty("steady"))
                object.steady = message.steady;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.sign != null && message.hasOwnProperty("sign"))
                object.sign = message.sign;
            if (message.can != null && message.hasOwnProperty("can"))
                object.can = message.can;
            if (message.struck != null && message.hasOwnProperty("struck"))
                object.struck = message.struck;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.consonant != null && message.hasOwnProperty("consonant"))
                object.consonant = message.consonant;
            if (message.kitchen != null && message.hasOwnProperty("kitchen"))
                object.kitchen = message.kitchen;
            return object;
        };

        /**
         * Converts this DRAWN to JSON.
         * @function toJSON
         * @memberof TestMessage.DRAWN
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DRAWN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DRAWN.DONKEY = (function() {

            /**
             * Properties of a DONKEY.
             * @memberof TestMessage.DRAWN
             * @interface IDONKEY
             * @property {TestMessage.DRAWN.DONKEY.IPOST|null} [post] DONKEY post
             * @property {number|null} [hard] DONKEY hard
             * @property {string|null} [plus] DONKEY plus
             * @property {number|null} [composition] DONKEY composition
             */

            /**
             * Constructs a new DONKEY.
             * @memberof TestMessage.DRAWN
             * @classdesc Represents a DONKEY.
             * @implements IDONKEY
             * @constructor
             * @param {TestMessage.DRAWN.IDONKEY=} [properties] Properties to set
             */
            function DONKEY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DONKEY post.
             * @member {TestMessage.DRAWN.DONKEY.IPOST|null|undefined} post
             * @memberof TestMessage.DRAWN.DONKEY
             * @instance
             */
            DONKEY.prototype.post = null;

            /**
             * DONKEY hard.
             * @member {number} hard
             * @memberof TestMessage.DRAWN.DONKEY
             * @instance
             */
            DONKEY.prototype.hard = 0;

            /**
             * DONKEY plus.
             * @member {string} plus
             * @memberof TestMessage.DRAWN.DONKEY
             * @instance
             */
            DONKEY.prototype.plus = "";

            /**
             * DONKEY composition.
             * @member {number} composition
             * @memberof TestMessage.DRAWN.DONKEY
             * @instance
             */
            DONKEY.prototype.composition = 0;

            /**
             * Creates a new DONKEY instance using the specified properties.
             * @function create
             * @memberof TestMessage.DRAWN.DONKEY
             * @static
             * @param {TestMessage.DRAWN.IDONKEY=} [properties] Properties to set
             * @returns {TestMessage.DRAWN.DONKEY} DONKEY instance
             */
            DONKEY.create = function create(properties) {
                return new DONKEY(properties);
            };

            /**
             * Encodes the specified DONKEY message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.verify|verify} messages.
             * @function encode
             * @memberof TestMessage.DRAWN.DONKEY
             * @static
             * @param {TestMessage.DRAWN.IDONKEY} message DONKEY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DONKEY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.post != null && message.hasOwnProperty("post"))
                    $root.TestMessage.DRAWN.DONKEY.POST.encode(message.post, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.hard != null && message.hasOwnProperty("hard"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.hard);
                if (message.plus != null && message.hasOwnProperty("plus"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.plus);
                if (message.composition != null && message.hasOwnProperty("composition"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.composition);
                return writer;
            };

            /**
             * Encodes the specified DONKEY message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TestMessage.DRAWN.DONKEY
             * @static
             * @param {TestMessage.DRAWN.IDONKEY} message DONKEY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DONKEY.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DONKEY message from the specified reader or buffer.
             * @function decode
             * @memberof TestMessage.DRAWN.DONKEY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TestMessage.DRAWN.DONKEY} DONKEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DONKEY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.post = $root.TestMessage.DRAWN.DONKEY.POST.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.hard = reader.float();
                        break;
                    case 3:
                        message.plus = reader.string();
                        break;
                    case 4:
                        message.composition = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DONKEY message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TestMessage.DRAWN.DONKEY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TestMessage.DRAWN.DONKEY} DONKEY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DONKEY.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DONKEY message.
             * @function verify
             * @memberof TestMessage.DRAWN.DONKEY
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DONKEY.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.post != null && message.hasOwnProperty("post")) {
                    var error = $root.TestMessage.DRAWN.DONKEY.POST.verify(message.post);
                    if (error)
                        return "post." + error;
                }
                if (message.hard != null && message.hasOwnProperty("hard"))
                    if (typeof message.hard !== "number")
                        return "hard: number expected";
                if (message.plus != null && message.hasOwnProperty("plus"))
                    if (!$util.isString(message.plus))
                        return "plus: string expected";
                if (message.composition != null && message.hasOwnProperty("composition"))
                    if (!$util.isInteger(message.composition))
                        return "composition: integer expected";
                return null;
            };

            /**
             * Creates a DONKEY message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TestMessage.DRAWN.DONKEY
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TestMessage.DRAWN.DONKEY} DONKEY
             */
            DONKEY.fromObject = function fromObject(object) {
                if (object instanceof $root.TestMessage.DRAWN.DONKEY)
                    return object;
                var message = new $root.TestMessage.DRAWN.DONKEY();
                if (object.post != null) {
                    if (typeof object.post !== "object")
                        throw TypeError(".TestMessage.DRAWN.DONKEY.post: object expected");
                    message.post = $root.TestMessage.DRAWN.DONKEY.POST.fromObject(object.post);
                }
                if (object.hard != null)
                    message.hard = Number(object.hard);
                if (object.plus != null)
                    message.plus = String(object.plus);
                if (object.composition != null)
                    message.composition = object.composition | 0;
                return message;
            };

            /**
             * Creates a plain object from a DONKEY message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TestMessage.DRAWN.DONKEY
             * @static
             * @param {TestMessage.DRAWN.DONKEY} message DONKEY
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DONKEY.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.post = null;
                    object.hard = 0;
                    object.plus = "";
                    object.composition = 0;
                }
                if (message.post != null && message.hasOwnProperty("post"))
                    object.post = $root.TestMessage.DRAWN.DONKEY.POST.toObject(message.post, options);
                if (message.hard != null && message.hasOwnProperty("hard"))
                    object.hard = options.json && !isFinite(message.hard) ? String(message.hard) : message.hard;
                if (message.plus != null && message.hasOwnProperty("plus"))
                    object.plus = message.plus;
                if (message.composition != null && message.hasOwnProperty("composition"))
                    object.composition = message.composition;
                return object;
            };

            /**
             * Converts this DONKEY to JSON.
             * @function toJSON
             * @memberof TestMessage.DRAWN.DONKEY
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DONKEY.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DONKEY.POST = (function() {

                /**
                 * Properties of a POST.
                 * @memberof TestMessage.DRAWN.DONKEY
                 * @interface IPOST
                 * @property {number|null} [prevent] POST prevent
                 * @property {string|null} [bent] POST bent
                 * @property {number|null} [spring] POST spring
                 * @property {number|null} [hollow] POST hollow
                 * @property {string|null} [sight] POST sight
                 * @property {string|null} [dress] POST dress
                 * @property {number|null} [birds] POST birds
                 * @property {number|null} [shells] POST shells
                 * @property {number|null} [mouse] POST mouse
                 * @property {string|null} [avoid] POST avoid
                 * @property {string|null} [lake] POST lake
                 * @property {number|null} [saw] POST saw
                 * @property {string|null} [sick] POST sick
                 * @property {string|null} [certain] POST certain
                 * @property {number|null} [ever] POST ever
                 * @property {number|null} [burn] POST burn
                 * @property {string|null} [tune] POST tune
                 * @property {TestMessage.DRAWN.DONKEY.POST.IME|null} [me] POST me
                 * @property {number|null} [island] POST island
                 * @property {string|null} [age] POST age
                 * @property {number|null} [keep] POST keep
                 * @property {string|null} [depth] POST depth
                 * @property {string|null} [clay] POST clay
                 * @property {number|null} [caught] POST caught
                 */

                /**
                 * Constructs a new POST.
                 * @memberof TestMessage.DRAWN.DONKEY
                 * @classdesc Represents a POST.
                 * @implements IPOST
                 * @constructor
                 * @param {TestMessage.DRAWN.DONKEY.IPOST=} [properties] Properties to set
                 */
                function POST(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * POST prevent.
                 * @member {number} prevent
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.prevent = 0;

                /**
                 * POST bent.
                 * @member {string} bent
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.bent = "";

                /**
                 * POST spring.
                 * @member {number} spring
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.spring = 0;

                /**
                 * POST hollow.
                 * @member {number} hollow
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.hollow = 0;

                /**
                 * POST sight.
                 * @member {string} sight
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.sight = "";

                /**
                 * POST dress.
                 * @member {string} dress
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.dress = "";

                /**
                 * POST birds.
                 * @member {number} birds
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.birds = 0;

                /**
                 * POST shells.
                 * @member {number} shells
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.shells = 0;

                /**
                 * POST mouse.
                 * @member {number} mouse
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.mouse = 0;

                /**
                 * POST avoid.
                 * @member {string} avoid
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.avoid = "";

                /**
                 * POST lake.
                 * @member {string} lake
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.lake = "";

                /**
                 * POST saw.
                 * @member {number} saw
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.saw = 0;

                /**
                 * POST sick.
                 * @member {string} sick
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.sick = "";

                /**
                 * POST certain.
                 * @member {string} certain
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.certain = "";

                /**
                 * POST ever.
                 * @member {number} ever
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.ever = 0;

                /**
                 * POST burn.
                 * @member {number} burn
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.burn = 0;

                /**
                 * POST tune.
                 * @member {string} tune
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.tune = "";

                /**
                 * POST me.
                 * @member {TestMessage.DRAWN.DONKEY.POST.IME|null|undefined} me
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.me = null;

                /**
                 * POST island.
                 * @member {number} island
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.island = 0;

                /**
                 * POST age.
                 * @member {string} age
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.age = "";

                /**
                 * POST keep.
                 * @member {number} keep
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.keep = 0;

                /**
                 * POST depth.
                 * @member {string} depth
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.depth = "";

                /**
                 * POST clay.
                 * @member {string} clay
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.clay = "";

                /**
                 * POST caught.
                 * @member {number} caught
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 */
                POST.prototype.caught = 0;

                /**
                 * Creates a new POST instance using the specified properties.
                 * @function create
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @static
                 * @param {TestMessage.DRAWN.DONKEY.IPOST=} [properties] Properties to set
                 * @returns {TestMessage.DRAWN.DONKEY.POST} POST instance
                 */
                POST.create = function create(properties) {
                    return new POST(properties);
                };

                /**
                 * Encodes the specified POST message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.verify|verify} messages.
                 * @function encode
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @static
                 * @param {TestMessage.DRAWN.DONKEY.IPOST} message POST message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                POST.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.prevent != null && message.hasOwnProperty("prevent"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.prevent);
                    if (message.bent != null && message.hasOwnProperty("bent"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.bent);
                    if (message.spring != null && message.hasOwnProperty("spring"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.spring);
                    if (message.hollow != null && message.hasOwnProperty("hollow"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.hollow);
                    if (message.sight != null && message.hasOwnProperty("sight"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.sight);
                    if (message.dress != null && message.hasOwnProperty("dress"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.dress);
                    if (message.birds != null && message.hasOwnProperty("birds"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.birds);
                    if (message.shells != null && message.hasOwnProperty("shells"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.shells);
                    if (message.mouse != null && message.hasOwnProperty("mouse"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.mouse);
                    if (message.avoid != null && message.hasOwnProperty("avoid"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.avoid);
                    if (message.lake != null && message.hasOwnProperty("lake"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.lake);
                    if (message.saw != null && message.hasOwnProperty("saw"))
                        writer.uint32(/* id 12, wireType 5 =*/101).float(message.saw);
                    if (message.sick != null && message.hasOwnProperty("sick"))
                        writer.uint32(/* id 13, wireType 2 =*/106).string(message.sick);
                    if (message.certain != null && message.hasOwnProperty("certain"))
                        writer.uint32(/* id 14, wireType 2 =*/114).string(message.certain);
                    if (message.ever != null && message.hasOwnProperty("ever"))
                        writer.uint32(/* id 15, wireType 0 =*/120).int32(message.ever);
                    if (message.burn != null && message.hasOwnProperty("burn"))
                        writer.uint32(/* id 16, wireType 0 =*/128).int32(message.burn);
                    if (message.tune != null && message.hasOwnProperty("tune"))
                        writer.uint32(/* id 17, wireType 2 =*/138).string(message.tune);
                    if (message.me != null && message.hasOwnProperty("me"))
                        $root.TestMessage.DRAWN.DONKEY.POST.ME.encode(message.me, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                    if (message.island != null && message.hasOwnProperty("island"))
                        writer.uint32(/* id 19, wireType 5 =*/157).float(message.island);
                    if (message.age != null && message.hasOwnProperty("age"))
                        writer.uint32(/* id 20, wireType 2 =*/162).string(message.age);
                    if (message.keep != null && message.hasOwnProperty("keep"))
                        writer.uint32(/* id 21, wireType 5 =*/173).float(message.keep);
                    if (message.depth != null && message.hasOwnProperty("depth"))
                        writer.uint32(/* id 22, wireType 2 =*/178).string(message.depth);
                    if (message.clay != null && message.hasOwnProperty("clay"))
                        writer.uint32(/* id 23, wireType 2 =*/186).string(message.clay);
                    if (message.caught != null && message.hasOwnProperty("caught"))
                        writer.uint32(/* id 24, wireType 5 =*/197).float(message.caught);
                    return writer;
                };

                /**
                 * Encodes the specified POST message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @static
                 * @param {TestMessage.DRAWN.DONKEY.IPOST} message POST message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                POST.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a POST message from the specified reader or buffer.
                 * @function decode
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {TestMessage.DRAWN.DONKEY.POST} POST
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                POST.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY.POST();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.prevent = reader.float();
                            break;
                        case 2:
                            message.bent = reader.string();
                            break;
                        case 3:
                            message.spring = reader.int32();
                            break;
                        case 4:
                            message.hollow = reader.int32();
                            break;
                        case 5:
                            message.sight = reader.string();
                            break;
                        case 6:
                            message.dress = reader.string();
                            break;
                        case 7:
                            message.birds = reader.int32();
                            break;
                        case 8:
                            message.shells = reader.int32();
                            break;
                        case 9:
                            message.mouse = reader.int32();
                            break;
                        case 10:
                            message.avoid = reader.string();
                            break;
                        case 11:
                            message.lake = reader.string();
                            break;
                        case 12:
                            message.saw = reader.float();
                            break;
                        case 13:
                            message.sick = reader.string();
                            break;
                        case 14:
                            message.certain = reader.string();
                            break;
                        case 15:
                            message.ever = reader.int32();
                            break;
                        case 16:
                            message.burn = reader.int32();
                            break;
                        case 17:
                            message.tune = reader.string();
                            break;
                        case 18:
                            message.me = $root.TestMessage.DRAWN.DONKEY.POST.ME.decode(reader, reader.uint32());
                            break;
                        case 19:
                            message.island = reader.float();
                            break;
                        case 20:
                            message.age = reader.string();
                            break;
                        case 21:
                            message.keep = reader.float();
                            break;
                        case 22:
                            message.depth = reader.string();
                            break;
                        case 23:
                            message.clay = reader.string();
                            break;
                        case 24:
                            message.caught = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a POST message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {TestMessage.DRAWN.DONKEY.POST} POST
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                POST.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a POST message.
                 * @function verify
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                POST.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.prevent != null && message.hasOwnProperty("prevent"))
                        if (typeof message.prevent !== "number")
                            return "prevent: number expected";
                    if (message.bent != null && message.hasOwnProperty("bent"))
                        if (!$util.isString(message.bent))
                            return "bent: string expected";
                    if (message.spring != null && message.hasOwnProperty("spring"))
                        if (!$util.isInteger(message.spring))
                            return "spring: integer expected";
                    if (message.hollow != null && message.hasOwnProperty("hollow"))
                        if (!$util.isInteger(message.hollow))
                            return "hollow: integer expected";
                    if (message.sight != null && message.hasOwnProperty("sight"))
                        if (!$util.isString(message.sight))
                            return "sight: string expected";
                    if (message.dress != null && message.hasOwnProperty("dress"))
                        if (!$util.isString(message.dress))
                            return "dress: string expected";
                    if (message.birds != null && message.hasOwnProperty("birds"))
                        if (!$util.isInteger(message.birds))
                            return "birds: integer expected";
                    if (message.shells != null && message.hasOwnProperty("shells"))
                        if (!$util.isInteger(message.shells))
                            return "shells: integer expected";
                    if (message.mouse != null && message.hasOwnProperty("mouse"))
                        if (!$util.isInteger(message.mouse))
                            return "mouse: integer expected";
                    if (message.avoid != null && message.hasOwnProperty("avoid"))
                        if (!$util.isString(message.avoid))
                            return "avoid: string expected";
                    if (message.lake != null && message.hasOwnProperty("lake"))
                        if (!$util.isString(message.lake))
                            return "lake: string expected";
                    if (message.saw != null && message.hasOwnProperty("saw"))
                        if (typeof message.saw !== "number")
                            return "saw: number expected";
                    if (message.sick != null && message.hasOwnProperty("sick"))
                        if (!$util.isString(message.sick))
                            return "sick: string expected";
                    if (message.certain != null && message.hasOwnProperty("certain"))
                        if (!$util.isString(message.certain))
                            return "certain: string expected";
                    if (message.ever != null && message.hasOwnProperty("ever"))
                        if (!$util.isInteger(message.ever))
                            return "ever: integer expected";
                    if (message.burn != null && message.hasOwnProperty("burn"))
                        if (!$util.isInteger(message.burn))
                            return "burn: integer expected";
                    if (message.tune != null && message.hasOwnProperty("tune"))
                        if (!$util.isString(message.tune))
                            return "tune: string expected";
                    if (message.me != null && message.hasOwnProperty("me")) {
                        var error = $root.TestMessage.DRAWN.DONKEY.POST.ME.verify(message.me);
                        if (error)
                            return "me." + error;
                    }
                    if (message.island != null && message.hasOwnProperty("island"))
                        if (typeof message.island !== "number")
                            return "island: number expected";
                    if (message.age != null && message.hasOwnProperty("age"))
                        if (!$util.isString(message.age))
                            return "age: string expected";
                    if (message.keep != null && message.hasOwnProperty("keep"))
                        if (typeof message.keep !== "number")
                            return "keep: number expected";
                    if (message.depth != null && message.hasOwnProperty("depth"))
                        if (!$util.isString(message.depth))
                            return "depth: string expected";
                    if (message.clay != null && message.hasOwnProperty("clay"))
                        if (!$util.isString(message.clay))
                            return "clay: string expected";
                    if (message.caught != null && message.hasOwnProperty("caught"))
                        if (typeof message.caught !== "number")
                            return "caught: number expected";
                    return null;
                };

                /**
                 * Creates a POST message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {TestMessage.DRAWN.DONKEY.POST} POST
                 */
                POST.fromObject = function fromObject(object) {
                    if (object instanceof $root.TestMessage.DRAWN.DONKEY.POST)
                        return object;
                    var message = new $root.TestMessage.DRAWN.DONKEY.POST();
                    if (object.prevent != null)
                        message.prevent = Number(object.prevent);
                    if (object.bent != null)
                        message.bent = String(object.bent);
                    if (object.spring != null)
                        message.spring = object.spring | 0;
                    if (object.hollow != null)
                        message.hollow = object.hollow | 0;
                    if (object.sight != null)
                        message.sight = String(object.sight);
                    if (object.dress != null)
                        message.dress = String(object.dress);
                    if (object.birds != null)
                        message.birds = object.birds | 0;
                    if (object.shells != null)
                        message.shells = object.shells | 0;
                    if (object.mouse != null)
                        message.mouse = object.mouse | 0;
                    if (object.avoid != null)
                        message.avoid = String(object.avoid);
                    if (object.lake != null)
                        message.lake = String(object.lake);
                    if (object.saw != null)
                        message.saw = Number(object.saw);
                    if (object.sick != null)
                        message.sick = String(object.sick);
                    if (object.certain != null)
                        message.certain = String(object.certain);
                    if (object.ever != null)
                        message.ever = object.ever | 0;
                    if (object.burn != null)
                        message.burn = object.burn | 0;
                    if (object.tune != null)
                        message.tune = String(object.tune);
                    if (object.me != null) {
                        if (typeof object.me !== "object")
                            throw TypeError(".TestMessage.DRAWN.DONKEY.POST.me: object expected");
                        message.me = $root.TestMessage.DRAWN.DONKEY.POST.ME.fromObject(object.me);
                    }
                    if (object.island != null)
                        message.island = Number(object.island);
                    if (object.age != null)
                        message.age = String(object.age);
                    if (object.keep != null)
                        message.keep = Number(object.keep);
                    if (object.depth != null)
                        message.depth = String(object.depth);
                    if (object.clay != null)
                        message.clay = String(object.clay);
                    if (object.caught != null)
                        message.caught = Number(object.caught);
                    return message;
                };

                /**
                 * Creates a plain object from a POST message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @static
                 * @param {TestMessage.DRAWN.DONKEY.POST} message POST
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                POST.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.prevent = 0;
                        object.bent = "";
                        object.spring = 0;
                        object.hollow = 0;
                        object.sight = "";
                        object.dress = "";
                        object.birds = 0;
                        object.shells = 0;
                        object.mouse = 0;
                        object.avoid = "";
                        object.lake = "";
                        object.saw = 0;
                        object.sick = "";
                        object.certain = "";
                        object.ever = 0;
                        object.burn = 0;
                        object.tune = "";
                        object.me = null;
                        object.island = 0;
                        object.age = "";
                        object.keep = 0;
                        object.depth = "";
                        object.clay = "";
                        object.caught = 0;
                    }
                    if (message.prevent != null && message.hasOwnProperty("prevent"))
                        object.prevent = options.json && !isFinite(message.prevent) ? String(message.prevent) : message.prevent;
                    if (message.bent != null && message.hasOwnProperty("bent"))
                        object.bent = message.bent;
                    if (message.spring != null && message.hasOwnProperty("spring"))
                        object.spring = message.spring;
                    if (message.hollow != null && message.hasOwnProperty("hollow"))
                        object.hollow = message.hollow;
                    if (message.sight != null && message.hasOwnProperty("sight"))
                        object.sight = message.sight;
                    if (message.dress != null && message.hasOwnProperty("dress"))
                        object.dress = message.dress;
                    if (message.birds != null && message.hasOwnProperty("birds"))
                        object.birds = message.birds;
                    if (message.shells != null && message.hasOwnProperty("shells"))
                        object.shells = message.shells;
                    if (message.mouse != null && message.hasOwnProperty("mouse"))
                        object.mouse = message.mouse;
                    if (message.avoid != null && message.hasOwnProperty("avoid"))
                        object.avoid = message.avoid;
                    if (message.lake != null && message.hasOwnProperty("lake"))
                        object.lake = message.lake;
                    if (message.saw != null && message.hasOwnProperty("saw"))
                        object.saw = options.json && !isFinite(message.saw) ? String(message.saw) : message.saw;
                    if (message.sick != null && message.hasOwnProperty("sick"))
                        object.sick = message.sick;
                    if (message.certain != null && message.hasOwnProperty("certain"))
                        object.certain = message.certain;
                    if (message.ever != null && message.hasOwnProperty("ever"))
                        object.ever = message.ever;
                    if (message.burn != null && message.hasOwnProperty("burn"))
                        object.burn = message.burn;
                    if (message.tune != null && message.hasOwnProperty("tune"))
                        object.tune = message.tune;
                    if (message.me != null && message.hasOwnProperty("me"))
                        object.me = $root.TestMessage.DRAWN.DONKEY.POST.ME.toObject(message.me, options);
                    if (message.island != null && message.hasOwnProperty("island"))
                        object.island = options.json && !isFinite(message.island) ? String(message.island) : message.island;
                    if (message.age != null && message.hasOwnProperty("age"))
                        object.age = message.age;
                    if (message.keep != null && message.hasOwnProperty("keep"))
                        object.keep = options.json && !isFinite(message.keep) ? String(message.keep) : message.keep;
                    if (message.depth != null && message.hasOwnProperty("depth"))
                        object.depth = message.depth;
                    if (message.clay != null && message.hasOwnProperty("clay"))
                        object.clay = message.clay;
                    if (message.caught != null && message.hasOwnProperty("caught"))
                        object.caught = options.json && !isFinite(message.caught) ? String(message.caught) : message.caught;
                    return object;
                };

                /**
                 * Converts this POST to JSON.
                 * @function toJSON
                 * @memberof TestMessage.DRAWN.DONKEY.POST
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                POST.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                POST.ME = (function() {

                    /**
                     * Properties of a ME.
                     * @memberof TestMessage.DRAWN.DONKEY.POST
                     * @interface IME
                     * @property {TestMessage.DRAWN.DONKEY.POST.ME.IPRIMITIVE|null} [primitive] ME primitive
                     * @property {number|null} [useful] ME useful
                     * @property {string|null} [done] ME done
                     * @property {string|null} [mouse] ME mouse
                     * @property {string|null} [species] ME species
                     * @property {number|null} [differ] ME differ
                     * @property {TestMessage.DRAWN.DONKEY.POST.ME.IBITE|null} [bite] ME bite
                     * @property {number|null} [clearly] ME clearly
                     * @property {string|null} [particles] ME particles
                     * @property {number|null} [finger] ME finger
                     * @property {string|null} [answer] ME answer
                     * @property {string|null} [instead] ME instead
                     * @property {number|null} [molecular] ME molecular
                     * @property {number|null} [nice] ME nice
                     * @property {number|null} [product] ME product
                     * @property {number|null} [lonely] ME lonely
                     * @property {string|null} [song] ME song
                     * @property {number|null} [flew] ME flew
                     * @property {string|null} [coast] ME coast
                     * @property {string|null} [apart] ME apart
                     * @property {string|null} [population] ME population
                     * @property {string|null} [car] ME car
                     * @property {number|null} [amount] ME amount
                     * @property {number|null} [so] ME so
                     * @property {string|null} [contain] ME contain
                     * @property {string|null} [push] ME push
                     * @property {string|null} [radio] ME radio
                     * @property {string|null} [south] ME south
                     */

                    /**
                     * Constructs a new ME.
                     * @memberof TestMessage.DRAWN.DONKEY.POST
                     * @classdesc Represents a ME.
                     * @implements IME
                     * @constructor
                     * @param {TestMessage.DRAWN.DONKEY.POST.IME=} [properties] Properties to set
                     */
                    function ME(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ME primitive.
                     * @member {TestMessage.DRAWN.DONKEY.POST.ME.IPRIMITIVE|null|undefined} primitive
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.primitive = null;

                    /**
                     * ME useful.
                     * @member {number} useful
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.useful = 0;

                    /**
                     * ME done.
                     * @member {string} done
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.done = "";

                    /**
                     * ME mouse.
                     * @member {string} mouse
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.mouse = "";

                    /**
                     * ME species.
                     * @member {string} species
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.species = "";

                    /**
                     * ME differ.
                     * @member {number} differ
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.differ = 0;

                    /**
                     * ME bite.
                     * @member {TestMessage.DRAWN.DONKEY.POST.ME.IBITE|null|undefined} bite
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.bite = null;

                    /**
                     * ME clearly.
                     * @member {number} clearly
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.clearly = 0;

                    /**
                     * ME particles.
                     * @member {string} particles
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.particles = "";

                    /**
                     * ME finger.
                     * @member {number} finger
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.finger = 0;

                    /**
                     * ME answer.
                     * @member {string} answer
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.answer = "";

                    /**
                     * ME instead.
                     * @member {string} instead
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.instead = "";

                    /**
                     * ME molecular.
                     * @member {number} molecular
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.molecular = 0;

                    /**
                     * ME nice.
                     * @member {number} nice
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.nice = 0;

                    /**
                     * ME product.
                     * @member {number} product
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.product = 0;

                    /**
                     * ME lonely.
                     * @member {number} lonely
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.lonely = 0;

                    /**
                     * ME song.
                     * @member {string} song
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.song = "";

                    /**
                     * ME flew.
                     * @member {number} flew
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.flew = 0;

                    /**
                     * ME coast.
                     * @member {string} coast
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.coast = "";

                    /**
                     * ME apart.
                     * @member {string} apart
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.apart = "";

                    /**
                     * ME population.
                     * @member {string} population
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.population = "";

                    /**
                     * ME car.
                     * @member {string} car
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.car = "";

                    /**
                     * ME amount.
                     * @member {number} amount
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.amount = 0;

                    /**
                     * ME so.
                     * @member {number} so
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.so = 0;

                    /**
                     * ME contain.
                     * @member {string} contain
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.contain = "";

                    /**
                     * ME push.
                     * @member {string} push
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.push = "";

                    /**
                     * ME radio.
                     * @member {string} radio
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.radio = "";

                    /**
                     * ME south.
                     * @member {string} south
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     */
                    ME.prototype.south = "";

                    /**
                     * Creates a new ME instance using the specified properties.
                     * @function create
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @static
                     * @param {TestMessage.DRAWN.DONKEY.POST.IME=} [properties] Properties to set
                     * @returns {TestMessage.DRAWN.DONKEY.POST.ME} ME instance
                     */
                    ME.create = function create(properties) {
                        return new ME(properties);
                    };

                    /**
                     * Encodes the specified ME message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.verify|verify} messages.
                     * @function encode
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @static
                     * @param {TestMessage.DRAWN.DONKEY.POST.IME} message ME message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ME.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.primitive != null && message.hasOwnProperty("primitive"))
                            $root.TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE.encode(message.primitive, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.useful != null && message.hasOwnProperty("useful"))
                            writer.uint32(/* id 2, wireType 5 =*/21).float(message.useful);
                        if (message.done != null && message.hasOwnProperty("done"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.done);
                        if (message.mouse != null && message.hasOwnProperty("mouse"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.mouse);
                        if (message.species != null && message.hasOwnProperty("species"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.species);
                        if (message.differ != null && message.hasOwnProperty("differ"))
                            writer.uint32(/* id 6, wireType 5 =*/53).float(message.differ);
                        if (message.bite != null && message.hasOwnProperty("bite"))
                            $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.encode(message.bite, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.clearly != null && message.hasOwnProperty("clearly"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.clearly);
                        if (message.particles != null && message.hasOwnProperty("particles"))
                            writer.uint32(/* id 9, wireType 2 =*/74).string(message.particles);
                        if (message.finger != null && message.hasOwnProperty("finger"))
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.finger);
                        if (message.answer != null && message.hasOwnProperty("answer"))
                            writer.uint32(/* id 11, wireType 2 =*/90).string(message.answer);
                        if (message.instead != null && message.hasOwnProperty("instead"))
                            writer.uint32(/* id 12, wireType 2 =*/98).string(message.instead);
                        if (message.molecular != null && message.hasOwnProperty("molecular"))
                            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.molecular);
                        if (message.nice != null && message.hasOwnProperty("nice"))
                            writer.uint32(/* id 14, wireType 5 =*/117).float(message.nice);
                        if (message.product != null && message.hasOwnProperty("product"))
                            writer.uint32(/* id 15, wireType 5 =*/125).float(message.product);
                        if (message.lonely != null && message.hasOwnProperty("lonely"))
                            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.lonely);
                        if (message.song != null && message.hasOwnProperty("song"))
                            writer.uint32(/* id 17, wireType 2 =*/138).string(message.song);
                        if (message.flew != null && message.hasOwnProperty("flew"))
                            writer.uint32(/* id 18, wireType 5 =*/149).float(message.flew);
                        if (message.coast != null && message.hasOwnProperty("coast"))
                            writer.uint32(/* id 19, wireType 2 =*/154).string(message.coast);
                        if (message.apart != null && message.hasOwnProperty("apart"))
                            writer.uint32(/* id 20, wireType 2 =*/162).string(message.apart);
                        if (message.population != null && message.hasOwnProperty("population"))
                            writer.uint32(/* id 21, wireType 2 =*/170).string(message.population);
                        if (message.car != null && message.hasOwnProperty("car"))
                            writer.uint32(/* id 22, wireType 2 =*/178).string(message.car);
                        if (message.amount != null && message.hasOwnProperty("amount"))
                            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.amount);
                        if (message.so != null && message.hasOwnProperty("so"))
                            writer.uint32(/* id 24, wireType 5 =*/197).float(message.so);
                        if (message.contain != null && message.hasOwnProperty("contain"))
                            writer.uint32(/* id 25, wireType 2 =*/202).string(message.contain);
                        if (message.push != null && message.hasOwnProperty("push"))
                            writer.uint32(/* id 26, wireType 2 =*/210).string(message.push);
                        if (message.radio != null && message.hasOwnProperty("radio"))
                            writer.uint32(/* id 27, wireType 2 =*/218).string(message.radio);
                        if (message.south != null && message.hasOwnProperty("south"))
                            writer.uint32(/* id 28, wireType 2 =*/226).string(message.south);
                        return writer;
                    };

                    /**
                     * Encodes the specified ME message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @static
                     * @param {TestMessage.DRAWN.DONKEY.POST.IME} message ME message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ME.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ME message from the specified reader or buffer.
                     * @function decode
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {TestMessage.DRAWN.DONKEY.POST.ME} ME
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ME.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY.POST.ME();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.primitive = $root.TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.useful = reader.float();
                                break;
                            case 3:
                                message.done = reader.string();
                                break;
                            case 4:
                                message.mouse = reader.string();
                                break;
                            case 5:
                                message.species = reader.string();
                                break;
                            case 6:
                                message.differ = reader.float();
                                break;
                            case 7:
                                message.bite = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.clearly = reader.int32();
                                break;
                            case 9:
                                message.particles = reader.string();
                                break;
                            case 10:
                                message.finger = reader.int32();
                                break;
                            case 11:
                                message.answer = reader.string();
                                break;
                            case 12:
                                message.instead = reader.string();
                                break;
                            case 13:
                                message.molecular = reader.int32();
                                break;
                            case 14:
                                message.nice = reader.float();
                                break;
                            case 15:
                                message.product = reader.float();
                                break;
                            case 16:
                                message.lonely = reader.int32();
                                break;
                            case 17:
                                message.song = reader.string();
                                break;
                            case 18:
                                message.flew = reader.float();
                                break;
                            case 19:
                                message.coast = reader.string();
                                break;
                            case 20:
                                message.apart = reader.string();
                                break;
                            case 21:
                                message.population = reader.string();
                                break;
                            case 22:
                                message.car = reader.string();
                                break;
                            case 23:
                                message.amount = reader.int32();
                                break;
                            case 24:
                                message.so = reader.float();
                                break;
                            case 25:
                                message.contain = reader.string();
                                break;
                            case 26:
                                message.push = reader.string();
                                break;
                            case 27:
                                message.radio = reader.string();
                                break;
                            case 28:
                                message.south = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ME message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {TestMessage.DRAWN.DONKEY.POST.ME} ME
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ME.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ME message.
                     * @function verify
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ME.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.primitive != null && message.hasOwnProperty("primitive")) {
                            var error = $root.TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE.verify(message.primitive);
                            if (error)
                                return "primitive." + error;
                        }
                        if (message.useful != null && message.hasOwnProperty("useful"))
                            if (typeof message.useful !== "number")
                                return "useful: number expected";
                        if (message.done != null && message.hasOwnProperty("done"))
                            if (!$util.isString(message.done))
                                return "done: string expected";
                        if (message.mouse != null && message.hasOwnProperty("mouse"))
                            if (!$util.isString(message.mouse))
                                return "mouse: string expected";
                        if (message.species != null && message.hasOwnProperty("species"))
                            if (!$util.isString(message.species))
                                return "species: string expected";
                        if (message.differ != null && message.hasOwnProperty("differ"))
                            if (typeof message.differ !== "number")
                                return "differ: number expected";
                        if (message.bite != null && message.hasOwnProperty("bite")) {
                            var error = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.verify(message.bite);
                            if (error)
                                return "bite." + error;
                        }
                        if (message.clearly != null && message.hasOwnProperty("clearly"))
                            if (!$util.isInteger(message.clearly))
                                return "clearly: integer expected";
                        if (message.particles != null && message.hasOwnProperty("particles"))
                            if (!$util.isString(message.particles))
                                return "particles: string expected";
                        if (message.finger != null && message.hasOwnProperty("finger"))
                            if (!$util.isInteger(message.finger))
                                return "finger: integer expected";
                        if (message.answer != null && message.hasOwnProperty("answer"))
                            if (!$util.isString(message.answer))
                                return "answer: string expected";
                        if (message.instead != null && message.hasOwnProperty("instead"))
                            if (!$util.isString(message.instead))
                                return "instead: string expected";
                        if (message.molecular != null && message.hasOwnProperty("molecular"))
                            if (!$util.isInteger(message.molecular))
                                return "molecular: integer expected";
                        if (message.nice != null && message.hasOwnProperty("nice"))
                            if (typeof message.nice !== "number")
                                return "nice: number expected";
                        if (message.product != null && message.hasOwnProperty("product"))
                            if (typeof message.product !== "number")
                                return "product: number expected";
                        if (message.lonely != null && message.hasOwnProperty("lonely"))
                            if (!$util.isInteger(message.lonely))
                                return "lonely: integer expected";
                        if (message.song != null && message.hasOwnProperty("song"))
                            if (!$util.isString(message.song))
                                return "song: string expected";
                        if (message.flew != null && message.hasOwnProperty("flew"))
                            if (typeof message.flew !== "number")
                                return "flew: number expected";
                        if (message.coast != null && message.hasOwnProperty("coast"))
                            if (!$util.isString(message.coast))
                                return "coast: string expected";
                        if (message.apart != null && message.hasOwnProperty("apart"))
                            if (!$util.isString(message.apart))
                                return "apart: string expected";
                        if (message.population != null && message.hasOwnProperty("population"))
                            if (!$util.isString(message.population))
                                return "population: string expected";
                        if (message.car != null && message.hasOwnProperty("car"))
                            if (!$util.isString(message.car))
                                return "car: string expected";
                        if (message.amount != null && message.hasOwnProperty("amount"))
                            if (!$util.isInteger(message.amount))
                                return "amount: integer expected";
                        if (message.so != null && message.hasOwnProperty("so"))
                            if (typeof message.so !== "number")
                                return "so: number expected";
                        if (message.contain != null && message.hasOwnProperty("contain"))
                            if (!$util.isString(message.contain))
                                return "contain: string expected";
                        if (message.push != null && message.hasOwnProperty("push"))
                            if (!$util.isString(message.push))
                                return "push: string expected";
                        if (message.radio != null && message.hasOwnProperty("radio"))
                            if (!$util.isString(message.radio))
                                return "radio: string expected";
                        if (message.south != null && message.hasOwnProperty("south"))
                            if (!$util.isString(message.south))
                                return "south: string expected";
                        return null;
                    };

                    /**
                     * Creates a ME message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {TestMessage.DRAWN.DONKEY.POST.ME} ME
                     */
                    ME.fromObject = function fromObject(object) {
                        if (object instanceof $root.TestMessage.DRAWN.DONKEY.POST.ME)
                            return object;
                        var message = new $root.TestMessage.DRAWN.DONKEY.POST.ME();
                        if (object.primitive != null) {
                            if (typeof object.primitive !== "object")
                                throw TypeError(".TestMessage.DRAWN.DONKEY.POST.ME.primitive: object expected");
                            message.primitive = $root.TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE.fromObject(object.primitive);
                        }
                        if (object.useful != null)
                            message.useful = Number(object.useful);
                        if (object.done != null)
                            message.done = String(object.done);
                        if (object.mouse != null)
                            message.mouse = String(object.mouse);
                        if (object.species != null)
                            message.species = String(object.species);
                        if (object.differ != null)
                            message.differ = Number(object.differ);
                        if (object.bite != null) {
                            if (typeof object.bite !== "object")
                                throw TypeError(".TestMessage.DRAWN.DONKEY.POST.ME.bite: object expected");
                            message.bite = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.fromObject(object.bite);
                        }
                        if (object.clearly != null)
                            message.clearly = object.clearly | 0;
                        if (object.particles != null)
                            message.particles = String(object.particles);
                        if (object.finger != null)
                            message.finger = object.finger | 0;
                        if (object.answer != null)
                            message.answer = String(object.answer);
                        if (object.instead != null)
                            message.instead = String(object.instead);
                        if (object.molecular != null)
                            message.molecular = object.molecular | 0;
                        if (object.nice != null)
                            message.nice = Number(object.nice);
                        if (object.product != null)
                            message.product = Number(object.product);
                        if (object.lonely != null)
                            message.lonely = object.lonely | 0;
                        if (object.song != null)
                            message.song = String(object.song);
                        if (object.flew != null)
                            message.flew = Number(object.flew);
                        if (object.coast != null)
                            message.coast = String(object.coast);
                        if (object.apart != null)
                            message.apart = String(object.apart);
                        if (object.population != null)
                            message.population = String(object.population);
                        if (object.car != null)
                            message.car = String(object.car);
                        if (object.amount != null)
                            message.amount = object.amount | 0;
                        if (object.so != null)
                            message.so = Number(object.so);
                        if (object.contain != null)
                            message.contain = String(object.contain);
                        if (object.push != null)
                            message.push = String(object.push);
                        if (object.radio != null)
                            message.radio = String(object.radio);
                        if (object.south != null)
                            message.south = String(object.south);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ME message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @static
                     * @param {TestMessage.DRAWN.DONKEY.POST.ME} message ME
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ME.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.primitive = null;
                            object.useful = 0;
                            object.done = "";
                            object.mouse = "";
                            object.species = "";
                            object.differ = 0;
                            object.bite = null;
                            object.clearly = 0;
                            object.particles = "";
                            object.finger = 0;
                            object.answer = "";
                            object.instead = "";
                            object.molecular = 0;
                            object.nice = 0;
                            object.product = 0;
                            object.lonely = 0;
                            object.song = "";
                            object.flew = 0;
                            object.coast = "";
                            object.apart = "";
                            object.population = "";
                            object.car = "";
                            object.amount = 0;
                            object.so = 0;
                            object.contain = "";
                            object.push = "";
                            object.radio = "";
                            object.south = "";
                        }
                        if (message.primitive != null && message.hasOwnProperty("primitive"))
                            object.primitive = $root.TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE.toObject(message.primitive, options);
                        if (message.useful != null && message.hasOwnProperty("useful"))
                            object.useful = options.json && !isFinite(message.useful) ? String(message.useful) : message.useful;
                        if (message.done != null && message.hasOwnProperty("done"))
                            object.done = message.done;
                        if (message.mouse != null && message.hasOwnProperty("mouse"))
                            object.mouse = message.mouse;
                        if (message.species != null && message.hasOwnProperty("species"))
                            object.species = message.species;
                        if (message.differ != null && message.hasOwnProperty("differ"))
                            object.differ = options.json && !isFinite(message.differ) ? String(message.differ) : message.differ;
                        if (message.bite != null && message.hasOwnProperty("bite"))
                            object.bite = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.toObject(message.bite, options);
                        if (message.clearly != null && message.hasOwnProperty("clearly"))
                            object.clearly = message.clearly;
                        if (message.particles != null && message.hasOwnProperty("particles"))
                            object.particles = message.particles;
                        if (message.finger != null && message.hasOwnProperty("finger"))
                            object.finger = message.finger;
                        if (message.answer != null && message.hasOwnProperty("answer"))
                            object.answer = message.answer;
                        if (message.instead != null && message.hasOwnProperty("instead"))
                            object.instead = message.instead;
                        if (message.molecular != null && message.hasOwnProperty("molecular"))
                            object.molecular = message.molecular;
                        if (message.nice != null && message.hasOwnProperty("nice"))
                            object.nice = options.json && !isFinite(message.nice) ? String(message.nice) : message.nice;
                        if (message.product != null && message.hasOwnProperty("product"))
                            object.product = options.json && !isFinite(message.product) ? String(message.product) : message.product;
                        if (message.lonely != null && message.hasOwnProperty("lonely"))
                            object.lonely = message.lonely;
                        if (message.song != null && message.hasOwnProperty("song"))
                            object.song = message.song;
                        if (message.flew != null && message.hasOwnProperty("flew"))
                            object.flew = options.json && !isFinite(message.flew) ? String(message.flew) : message.flew;
                        if (message.coast != null && message.hasOwnProperty("coast"))
                            object.coast = message.coast;
                        if (message.apart != null && message.hasOwnProperty("apart"))
                            object.apart = message.apart;
                        if (message.population != null && message.hasOwnProperty("population"))
                            object.population = message.population;
                        if (message.car != null && message.hasOwnProperty("car"))
                            object.car = message.car;
                        if (message.amount != null && message.hasOwnProperty("amount"))
                            object.amount = message.amount;
                        if (message.so != null && message.hasOwnProperty("so"))
                            object.so = options.json && !isFinite(message.so) ? String(message.so) : message.so;
                        if (message.contain != null && message.hasOwnProperty("contain"))
                            object.contain = message.contain;
                        if (message.push != null && message.hasOwnProperty("push"))
                            object.push = message.push;
                        if (message.radio != null && message.hasOwnProperty("radio"))
                            object.radio = message.radio;
                        if (message.south != null && message.hasOwnProperty("south"))
                            object.south = message.south;
                        return object;
                    };

                    /**
                     * Converts this ME to JSON.
                     * @function toJSON
                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ME.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    ME.PRIMITIVE = (function() {

                        /**
                         * Properties of a PRIMITIVE.
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                         * @interface IPRIMITIVE
                         * @property {number|null} [president] PRIMITIVE president
                         * @property {string|null} [flow] PRIMITIVE flow
                         * @property {number|null} [heading] PRIMITIVE heading
                         */

                        /**
                         * Constructs a new PRIMITIVE.
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                         * @classdesc Represents a PRIMITIVE.
                         * @implements IPRIMITIVE
                         * @constructor
                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.IPRIMITIVE=} [properties] Properties to set
                         */
                        function PRIMITIVE(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * PRIMITIVE president.
                         * @member {number} president
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @instance
                         */
                        PRIMITIVE.prototype.president = 0;

                        /**
                         * PRIMITIVE flow.
                         * @member {string} flow
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @instance
                         */
                        PRIMITIVE.prototype.flow = "";

                        /**
                         * PRIMITIVE heading.
                         * @member {number} heading
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @instance
                         */
                        PRIMITIVE.prototype.heading = 0;

                        /**
                         * Creates a new PRIMITIVE instance using the specified properties.
                         * @function create
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @static
                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.IPRIMITIVE=} [properties] Properties to set
                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE} PRIMITIVE instance
                         */
                        PRIMITIVE.create = function create(properties) {
                            return new PRIMITIVE(properties);
                        };

                        /**
                         * Encodes the specified PRIMITIVE message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE.verify|verify} messages.
                         * @function encode
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @static
                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.IPRIMITIVE} message PRIMITIVE message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PRIMITIVE.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.president != null && message.hasOwnProperty("president"))
                                writer.uint32(/* id 1, wireType 5 =*/13).float(message.president);
                            if (message.flow != null && message.hasOwnProperty("flow"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.flow);
                            if (message.heading != null && message.hasOwnProperty("heading"))
                                writer.uint32(/* id 3, wireType 5 =*/29).float(message.heading);
                            return writer;
                        };

                        /**
                         * Encodes the specified PRIMITIVE message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @static
                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.IPRIMITIVE} message PRIMITIVE message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PRIMITIVE.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a PRIMITIVE message from the specified reader or buffer.
                         * @function decode
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE} PRIMITIVE
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PRIMITIVE.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.president = reader.float();
                                    break;
                                case 2:
                                    message.flow = reader.string();
                                    break;
                                case 3:
                                    message.heading = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a PRIMITIVE message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE} PRIMITIVE
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PRIMITIVE.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a PRIMITIVE message.
                         * @function verify
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PRIMITIVE.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.president != null && message.hasOwnProperty("president"))
                                if (typeof message.president !== "number")
                                    return "president: number expected";
                            if (message.flow != null && message.hasOwnProperty("flow"))
                                if (!$util.isString(message.flow))
                                    return "flow: string expected";
                            if (message.heading != null && message.hasOwnProperty("heading"))
                                if (typeof message.heading !== "number")
                                    return "heading: number expected";
                            return null;
                        };

                        /**
                         * Creates a PRIMITIVE message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE} PRIMITIVE
                         */
                        PRIMITIVE.fromObject = function fromObject(object) {
                            if (object instanceof $root.TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE)
                                return object;
                            var message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE();
                            if (object.president != null)
                                message.president = Number(object.president);
                            if (object.flow != null)
                                message.flow = String(object.flow);
                            if (object.heading != null)
                                message.heading = Number(object.heading);
                            return message;
                        };

                        /**
                         * Creates a plain object from a PRIMITIVE message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @static
                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE} message PRIMITIVE
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PRIMITIVE.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.president = 0;
                                object.flow = "";
                                object.heading = 0;
                            }
                            if (message.president != null && message.hasOwnProperty("president"))
                                object.president = options.json && !isFinite(message.president) ? String(message.president) : message.president;
                            if (message.flow != null && message.hasOwnProperty("flow"))
                                object.flow = message.flow;
                            if (message.heading != null && message.hasOwnProperty("heading"))
                                object.heading = options.json && !isFinite(message.heading) ? String(message.heading) : message.heading;
                            return object;
                        };

                        /**
                         * Converts this PRIMITIVE to JSON.
                         * @function toJSON
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.PRIMITIVE
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PRIMITIVE.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return PRIMITIVE;
                    })();

                    ME.BITE = (function() {

                        /**
                         * Properties of a BITE.
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                         * @interface IBITE
                         * @property {string|null} [be] BITE be
                         * @property {TestMessage.DRAWN.DONKEY.POST.ME.BITE.IROUGH|null} [rough] BITE rough
                         * @property {string|null} [special] BITE special
                         * @property {string|null} [here] BITE here
                         */

                        /**
                         * Constructs a new BITE.
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME
                         * @classdesc Represents a BITE.
                         * @implements IBITE
                         * @constructor
                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.IBITE=} [properties] Properties to set
                         */
                        function BITE(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * BITE be.
                         * @member {string} be
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @instance
                         */
                        BITE.prototype.be = "";

                        /**
                         * BITE rough.
                         * @member {TestMessage.DRAWN.DONKEY.POST.ME.BITE.IROUGH|null|undefined} rough
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @instance
                         */
                        BITE.prototype.rough = null;

                        /**
                         * BITE special.
                         * @member {string} special
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @instance
                         */
                        BITE.prototype.special = "";

                        /**
                         * BITE here.
                         * @member {string} here
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @instance
                         */
                        BITE.prototype.here = "";

                        /**
                         * Creates a new BITE instance using the specified properties.
                         * @function create
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @static
                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.IBITE=} [properties] Properties to set
                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE} BITE instance
                         */
                        BITE.create = function create(properties) {
                            return new BITE(properties);
                        };

                        /**
                         * Encodes the specified BITE message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.verify|verify} messages.
                         * @function encode
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @static
                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.IBITE} message BITE message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BITE.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.be != null && message.hasOwnProperty("be"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.be);
                            if (message.rough != null && message.hasOwnProperty("rough"))
                                $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.encode(message.rough, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.special != null && message.hasOwnProperty("special"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.special);
                            if (message.here != null && message.hasOwnProperty("here"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.here);
                            return writer;
                        };

                        /**
                         * Encodes the specified BITE message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @static
                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.IBITE} message BITE message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BITE.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a BITE message from the specified reader or buffer.
                         * @function decode
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE} BITE
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BITE.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.be = reader.string();
                                    break;
                                case 2:
                                    message.rough = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.special = reader.string();
                                    break;
                                case 4:
                                    message.here = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a BITE message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE} BITE
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BITE.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a BITE message.
                         * @function verify
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BITE.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.be != null && message.hasOwnProperty("be"))
                                if (!$util.isString(message.be))
                                    return "be: string expected";
                            if (message.rough != null && message.hasOwnProperty("rough")) {
                                var error = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.verify(message.rough);
                                if (error)
                                    return "rough." + error;
                            }
                            if (message.special != null && message.hasOwnProperty("special"))
                                if (!$util.isString(message.special))
                                    return "special: string expected";
                            if (message.here != null && message.hasOwnProperty("here"))
                                if (!$util.isString(message.here))
                                    return "here: string expected";
                            return null;
                        };

                        /**
                         * Creates a BITE message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE} BITE
                         */
                        BITE.fromObject = function fromObject(object) {
                            if (object instanceof $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE)
                                return object;
                            var message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE();
                            if (object.be != null)
                                message.be = String(object.be);
                            if (object.rough != null) {
                                if (typeof object.rough !== "object")
                                    throw TypeError(".TestMessage.DRAWN.DONKEY.POST.ME.BITE.rough: object expected");
                                message.rough = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.fromObject(object.rough);
                            }
                            if (object.special != null)
                                message.special = String(object.special);
                            if (object.here != null)
                                message.here = String(object.here);
                            return message;
                        };

                        /**
                         * Creates a plain object from a BITE message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @static
                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE} message BITE
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BITE.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.be = "";
                                object.rough = null;
                                object.special = "";
                                object.here = "";
                            }
                            if (message.be != null && message.hasOwnProperty("be"))
                                object.be = message.be;
                            if (message.rough != null && message.hasOwnProperty("rough"))
                                object.rough = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.toObject(message.rough, options);
                            if (message.special != null && message.hasOwnProperty("special"))
                                object.special = message.special;
                            if (message.here != null && message.hasOwnProperty("here"))
                                object.here = message.here;
                            return object;
                        };

                        /**
                         * Converts this BITE to JSON.
                         * @function toJSON
                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BITE.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        BITE.ROUGH = (function() {

                            /**
                             * Properties of a ROUGH.
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                             * @interface IROUGH
                             * @property {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.IEND|null} [end] ROUGH end
                             * @property {number|null} [wing] ROUGH wing
                             * @property {number|null} [doll] ROUGH doll
                             */

                            /**
                             * Constructs a new ROUGH.
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE
                             * @classdesc Represents a ROUGH.
                             * @implements IROUGH
                             * @constructor
                             * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.IROUGH=} [properties] Properties to set
                             */
                            function ROUGH(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * ROUGH end.
                             * @member {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.IEND|null|undefined} end
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @instance
                             */
                            ROUGH.prototype.end = null;

                            /**
                             * ROUGH wing.
                             * @member {number} wing
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @instance
                             */
                            ROUGH.prototype.wing = 0;

                            /**
                             * ROUGH doll.
                             * @member {number} doll
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @instance
                             */
                            ROUGH.prototype.doll = 0;

                            /**
                             * Creates a new ROUGH instance using the specified properties.
                             * @function create
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @static
                             * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.IROUGH=} [properties] Properties to set
                             * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH} ROUGH instance
                             */
                            ROUGH.create = function create(properties) {
                                return new ROUGH(properties);
                            };

                            /**
                             * Encodes the specified ROUGH message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.verify|verify} messages.
                             * @function encode
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @static
                             * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.IROUGH} message ROUGH message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ROUGH.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.end != null && message.hasOwnProperty("end"))
                                    $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.encode(message.end, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.wing != null && message.hasOwnProperty("wing"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wing);
                                if (message.doll != null && message.hasOwnProperty("doll"))
                                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.doll);
                                return writer;
                            };

                            /**
                             * Encodes the specified ROUGH message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @static
                             * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.IROUGH} message ROUGH message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ROUGH.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a ROUGH message from the specified reader or buffer.
                             * @function decode
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH} ROUGH
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ROUGH.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.end = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.wing = reader.int32();
                                        break;
                                    case 3:
                                        message.doll = reader.int32();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a ROUGH message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH} ROUGH
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ROUGH.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a ROUGH message.
                             * @function verify
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            ROUGH.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.end != null && message.hasOwnProperty("end")) {
                                    var error = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.verify(message.end);
                                    if (error)
                                        return "end." + error;
                                }
                                if (message.wing != null && message.hasOwnProperty("wing"))
                                    if (!$util.isInteger(message.wing))
                                        return "wing: integer expected";
                                if (message.doll != null && message.hasOwnProperty("doll"))
                                    if (!$util.isInteger(message.doll))
                                        return "doll: integer expected";
                                return null;
                            };

                            /**
                             * Creates a ROUGH message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH} ROUGH
                             */
                            ROUGH.fromObject = function fromObject(object) {
                                if (object instanceof $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH)
                                    return object;
                                var message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH();
                                if (object.end != null) {
                                    if (typeof object.end !== "object")
                                        throw TypeError(".TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.end: object expected");
                                    message.end = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.fromObject(object.end);
                                }
                                if (object.wing != null)
                                    message.wing = object.wing | 0;
                                if (object.doll != null)
                                    message.doll = object.doll | 0;
                                return message;
                            };

                            /**
                             * Creates a plain object from a ROUGH message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @static
                             * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH} message ROUGH
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            ROUGH.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.end = null;
                                    object.wing = 0;
                                    object.doll = 0;
                                }
                                if (message.end != null && message.hasOwnProperty("end"))
                                    object.end = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.toObject(message.end, options);
                                if (message.wing != null && message.hasOwnProperty("wing"))
                                    object.wing = message.wing;
                                if (message.doll != null && message.hasOwnProperty("doll"))
                                    object.doll = message.doll;
                                return object;
                            };

                            /**
                             * Converts this ROUGH to JSON.
                             * @function toJSON
                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            ROUGH.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            ROUGH.END = (function() {

                                /**
                                 * Properties of a END.
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                                 * @interface IEND
                                 * @property {number|null} [immediately] END immediately
                                 * @property {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.IDREAM|null} [dream] END dream
                                 */

                                /**
                                 * Constructs a new END.
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH
                                 * @classdesc Represents a END.
                                 * @implements IEND
                                 * @constructor
                                 * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.IEND=} [properties] Properties to set
                                 */
                                function END(properties) {
                                    if (properties)
                                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                            if (properties[keys[i]] != null)
                                                this[keys[i]] = properties[keys[i]];
                                }

                                /**
                                 * END immediately.
                                 * @member {number} immediately
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @instance
                                 */
                                END.prototype.immediately = 0;

                                /**
                                 * END dream.
                                 * @member {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.IDREAM|null|undefined} dream
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @instance
                                 */
                                END.prototype.dream = null;

                                /**
                                 * Creates a new END instance using the specified properties.
                                 * @function create
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @static
                                 * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.IEND=} [properties] Properties to set
                                 * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END} END instance
                                 */
                                END.create = function create(properties) {
                                    return new END(properties);
                                };

                                /**
                                 * Encodes the specified END message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.verify|verify} messages.
                                 * @function encode
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @static
                                 * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.IEND} message END message or plain object to encode
                                 * @param {$protobuf.Writer} [writer] Writer to encode to
                                 * @returns {$protobuf.Writer} Writer
                                 */
                                END.encode = function encode(message, writer) {
                                    if (!writer)
                                        writer = $Writer.create();
                                    if (message.immediately != null && message.hasOwnProperty("immediately"))
                                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.immediately);
                                    if (message.dream != null && message.hasOwnProperty("dream"))
                                        $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.encode(message.dream, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                    return writer;
                                };

                                /**
                                 * Encodes the specified END message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.verify|verify} messages.
                                 * @function encodeDelimited
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @static
                                 * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.IEND} message END message or plain object to encode
                                 * @param {$protobuf.Writer} [writer] Writer to encode to
                                 * @returns {$protobuf.Writer} Writer
                                 */
                                END.encodeDelimited = function encodeDelimited(message, writer) {
                                    return this.encode(message, writer).ldelim();
                                };

                                /**
                                 * Decodes a END message from the specified reader or buffer.
                                 * @function decode
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @static
                                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                 * @param {number} [length] Message length if known beforehand
                                 * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END} END
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                END.decode = function decode(reader, length) {
                                    if (!(reader instanceof $Reader))
                                        reader = $Reader.create(reader);
                                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END();
                                    while (reader.pos < end) {
                                        var tag = reader.uint32();
                                        switch (tag >>> 3) {
                                        case 1:
                                            message.immediately = reader.int32();
                                            break;
                                        case 2:
                                            message.dream = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.decode(reader, reader.uint32());
                                            break;
                                        default:
                                            reader.skipType(tag & 7);
                                            break;
                                        }
                                    }
                                    return message;
                                };

                                /**
                                 * Decodes a END message from the specified reader or buffer, length delimited.
                                 * @function decodeDelimited
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @static
                                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                 * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END} END
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                END.decodeDelimited = function decodeDelimited(reader) {
                                    if (!(reader instanceof $Reader))
                                        reader = new $Reader(reader);
                                    return this.decode(reader, reader.uint32());
                                };

                                /**
                                 * Verifies a END message.
                                 * @function verify
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @static
                                 * @param {Object.<string,*>} message Plain object to verify
                                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                                 */
                                END.verify = function verify(message) {
                                    if (typeof message !== "object" || message === null)
                                        return "object expected";
                                    if (message.immediately != null && message.hasOwnProperty("immediately"))
                                        if (!$util.isInteger(message.immediately))
                                            return "immediately: integer expected";
                                    if (message.dream != null && message.hasOwnProperty("dream")) {
                                        var error = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.verify(message.dream);
                                        if (error)
                                            return "dream." + error;
                                    }
                                    return null;
                                };

                                /**
                                 * Creates a END message from a plain object. Also converts values to their respective internal types.
                                 * @function fromObject
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @static
                                 * @param {Object.<string,*>} object Plain object
                                 * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END} END
                                 */
                                END.fromObject = function fromObject(object) {
                                    if (object instanceof $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END)
                                        return object;
                                    var message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END();
                                    if (object.immediately != null)
                                        message.immediately = object.immediately | 0;
                                    if (object.dream != null) {
                                        if (typeof object.dream !== "object")
                                            throw TypeError(".TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.dream: object expected");
                                        message.dream = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.fromObject(object.dream);
                                    }
                                    return message;
                                };

                                /**
                                 * Creates a plain object from a END message. Also converts values to other types if specified.
                                 * @function toObject
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @static
                                 * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END} message END
                                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                                 * @returns {Object.<string,*>} Plain object
                                 */
                                END.toObject = function toObject(message, options) {
                                    if (!options)
                                        options = {};
                                    var object = {};
                                    if (options.defaults) {
                                        object.immediately = 0;
                                        object.dream = null;
                                    }
                                    if (message.immediately != null && message.hasOwnProperty("immediately"))
                                        object.immediately = message.immediately;
                                    if (message.dream != null && message.hasOwnProperty("dream"))
                                        object.dream = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.toObject(message.dream, options);
                                    return object;
                                };

                                /**
                                 * Converts this END to JSON.
                                 * @function toJSON
                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                 * @instance
                                 * @returns {Object.<string,*>} JSON object
                                 */
                                END.prototype.toJSON = function toJSON() {
                                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                                };

                                END.DREAM = (function() {

                                    /**
                                     * Properties of a DREAM.
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                     * @interface IDREAM
                                     * @property {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.ICASE|null} ["case"] DREAM case
                                     * @property {string|null} [wave] DREAM wave
                                     * @property {string|null} [myself] DREAM myself
                                     * @property {number|null} [cap] DREAM cap
                                     * @property {string|null} [exclaimed] DREAM exclaimed
                                     * @property {string|null} [require] DREAM require
                                     * @property {string|null} [camp] DREAM camp
                                     * @property {number|null} [park] DREAM park
                                     * @property {number|null} [fifty] DREAM fifty
                                     * @property {number|null} [setting] DREAM setting
                                     * @property {string|null} [trunk] DREAM trunk
                                     * @property {string|null} [sport] DREAM sport
                                     * @property {string|null} [tune] DREAM tune
                                     */

                                    /**
                                     * Constructs a new DREAM.
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END
                                     * @classdesc Represents a DREAM.
                                     * @implements IDREAM
                                     * @constructor
                                     * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.IDREAM=} [properties] Properties to set
                                     */
                                    function DREAM(properties) {
                                        if (properties)
                                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                                if (properties[keys[i]] != null)
                                                    this[keys[i]] = properties[keys[i]];
                                    }

                                    /**
                                     * DREAM case.
                                     * @member {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.ICASE|null|undefined} case
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype["case"] = null;

                                    /**
                                     * DREAM wave.
                                     * @member {string} wave
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.wave = "";

                                    /**
                                     * DREAM myself.
                                     * @member {string} myself
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.myself = "";

                                    /**
                                     * DREAM cap.
                                     * @member {number} cap
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.cap = 0;

                                    /**
                                     * DREAM exclaimed.
                                     * @member {string} exclaimed
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.exclaimed = "";

                                    /**
                                     * DREAM require.
                                     * @member {string} require
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.require = "";

                                    /**
                                     * DREAM camp.
                                     * @member {string} camp
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.camp = "";

                                    /**
                                     * DREAM park.
                                     * @member {number} park
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.park = 0;

                                    /**
                                     * DREAM fifty.
                                     * @member {number} fifty
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.fifty = 0;

                                    /**
                                     * DREAM setting.
                                     * @member {number} setting
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.setting = 0;

                                    /**
                                     * DREAM trunk.
                                     * @member {string} trunk
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.trunk = "";

                                    /**
                                     * DREAM sport.
                                     * @member {string} sport
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.sport = "";

                                    /**
                                     * DREAM tune.
                                     * @member {string} tune
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     */
                                    DREAM.prototype.tune = "";

                                    /**
                                     * Creates a new DREAM instance using the specified properties.
                                     * @function create
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @static
                                     * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.IDREAM=} [properties] Properties to set
                                     * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM} DREAM instance
                                     */
                                    DREAM.create = function create(properties) {
                                        return new DREAM(properties);
                                    };

                                    /**
                                     * Encodes the specified DREAM message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.verify|verify} messages.
                                     * @function encode
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @static
                                     * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.IDREAM} message DREAM message or plain object to encode
                                     * @param {$protobuf.Writer} [writer] Writer to encode to
                                     * @returns {$protobuf.Writer} Writer
                                     */
                                    DREAM.encode = function encode(message, writer) {
                                        if (!writer)
                                            writer = $Writer.create();
                                        if (message["case"] != null && message.hasOwnProperty("case"))
                                            $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.encode(message["case"], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                        if (message.wave != null && message.hasOwnProperty("wave"))
                                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.wave);
                                        if (message.myself != null && message.hasOwnProperty("myself"))
                                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.myself);
                                        if (message.cap != null && message.hasOwnProperty("cap"))
                                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cap);
                                        if (message.exclaimed != null && message.hasOwnProperty("exclaimed"))
                                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.exclaimed);
                                        if (message.require != null && message.hasOwnProperty("require"))
                                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.require);
                                        if (message.camp != null && message.hasOwnProperty("camp"))
                                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.camp);
                                        if (message.park != null && message.hasOwnProperty("park"))
                                            writer.uint32(/* id 8, wireType 5 =*/69).float(message.park);
                                        if (message.fifty != null && message.hasOwnProperty("fifty"))
                                            writer.uint32(/* id 9, wireType 5 =*/77).float(message.fifty);
                                        if (message.setting != null && message.hasOwnProperty("setting"))
                                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.setting);
                                        if (message.trunk != null && message.hasOwnProperty("trunk"))
                                            writer.uint32(/* id 11, wireType 2 =*/90).string(message.trunk);
                                        if (message.sport != null && message.hasOwnProperty("sport"))
                                            writer.uint32(/* id 12, wireType 2 =*/98).string(message.sport);
                                        if (message.tune != null && message.hasOwnProperty("tune"))
                                            writer.uint32(/* id 13, wireType 2 =*/106).string(message.tune);
                                        return writer;
                                    };

                                    /**
                                     * Encodes the specified DREAM message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.verify|verify} messages.
                                     * @function encodeDelimited
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @static
                                     * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.IDREAM} message DREAM message or plain object to encode
                                     * @param {$protobuf.Writer} [writer] Writer to encode to
                                     * @returns {$protobuf.Writer} Writer
                                     */
                                    DREAM.encodeDelimited = function encodeDelimited(message, writer) {
                                        return this.encode(message, writer).ldelim();
                                    };

                                    /**
                                     * Decodes a DREAM message from the specified reader or buffer.
                                     * @function decode
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @static
                                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                     * @param {number} [length] Message length if known beforehand
                                     * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM} DREAM
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    DREAM.decode = function decode(reader, length) {
                                        if (!(reader instanceof $Reader))
                                            reader = $Reader.create(reader);
                                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM();
                                        while (reader.pos < end) {
                                            var tag = reader.uint32();
                                            switch (tag >>> 3) {
                                            case 1:
                                                message["case"] = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.decode(reader, reader.uint32());
                                                break;
                                            case 2:
                                                message.wave = reader.string();
                                                break;
                                            case 3:
                                                message.myself = reader.string();
                                                break;
                                            case 4:
                                                message.cap = reader.int32();
                                                break;
                                            case 5:
                                                message.exclaimed = reader.string();
                                                break;
                                            case 6:
                                                message.require = reader.string();
                                                break;
                                            case 7:
                                                message.camp = reader.string();
                                                break;
                                            case 8:
                                                message.park = reader.float();
                                                break;
                                            case 9:
                                                message.fifty = reader.float();
                                                break;
                                            case 10:
                                                message.setting = reader.int32();
                                                break;
                                            case 11:
                                                message.trunk = reader.string();
                                                break;
                                            case 12:
                                                message.sport = reader.string();
                                                break;
                                            case 13:
                                                message.tune = reader.string();
                                                break;
                                            default:
                                                reader.skipType(tag & 7);
                                                break;
                                            }
                                        }
                                        return message;
                                    };

                                    /**
                                     * Decodes a DREAM message from the specified reader or buffer, length delimited.
                                     * @function decodeDelimited
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @static
                                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                     * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM} DREAM
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    DREAM.decodeDelimited = function decodeDelimited(reader) {
                                        if (!(reader instanceof $Reader))
                                            reader = new $Reader(reader);
                                        return this.decode(reader, reader.uint32());
                                    };

                                    /**
                                     * Verifies a DREAM message.
                                     * @function verify
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @static
                                     * @param {Object.<string,*>} message Plain object to verify
                                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                                     */
                                    DREAM.verify = function verify(message) {
                                        if (typeof message !== "object" || message === null)
                                            return "object expected";
                                        if (message["case"] != null && message.hasOwnProperty("case")) {
                                            var error = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.verify(message["case"]);
                                            if (error)
                                                return "case." + error;
                                        }
                                        if (message.wave != null && message.hasOwnProperty("wave"))
                                            if (!$util.isString(message.wave))
                                                return "wave: string expected";
                                        if (message.myself != null && message.hasOwnProperty("myself"))
                                            if (!$util.isString(message.myself))
                                                return "myself: string expected";
                                        if (message.cap != null && message.hasOwnProperty("cap"))
                                            if (!$util.isInteger(message.cap))
                                                return "cap: integer expected";
                                        if (message.exclaimed != null && message.hasOwnProperty("exclaimed"))
                                            if (!$util.isString(message.exclaimed))
                                                return "exclaimed: string expected";
                                        if (message.require != null && message.hasOwnProperty("require"))
                                            if (!$util.isString(message.require))
                                                return "require: string expected";
                                        if (message.camp != null && message.hasOwnProperty("camp"))
                                            if (!$util.isString(message.camp))
                                                return "camp: string expected";
                                        if (message.park != null && message.hasOwnProperty("park"))
                                            if (typeof message.park !== "number")
                                                return "park: number expected";
                                        if (message.fifty != null && message.hasOwnProperty("fifty"))
                                            if (typeof message.fifty !== "number")
                                                return "fifty: number expected";
                                        if (message.setting != null && message.hasOwnProperty("setting"))
                                            if (!$util.isInteger(message.setting))
                                                return "setting: integer expected";
                                        if (message.trunk != null && message.hasOwnProperty("trunk"))
                                            if (!$util.isString(message.trunk))
                                                return "trunk: string expected";
                                        if (message.sport != null && message.hasOwnProperty("sport"))
                                            if (!$util.isString(message.sport))
                                                return "sport: string expected";
                                        if (message.tune != null && message.hasOwnProperty("tune"))
                                            if (!$util.isString(message.tune))
                                                return "tune: string expected";
                                        return null;
                                    };

                                    /**
                                     * Creates a DREAM message from a plain object. Also converts values to their respective internal types.
                                     * @function fromObject
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @static
                                     * @param {Object.<string,*>} object Plain object
                                     * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM} DREAM
                                     */
                                    DREAM.fromObject = function fromObject(object) {
                                        if (object instanceof $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM)
                                            return object;
                                        var message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM();
                                        if (object["case"] != null) {
                                            if (typeof object["case"] !== "object")
                                                throw TypeError(".TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.case: object expected");
                                            message["case"] = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.fromObject(object["case"]);
                                        }
                                        if (object.wave != null)
                                            message.wave = String(object.wave);
                                        if (object.myself != null)
                                            message.myself = String(object.myself);
                                        if (object.cap != null)
                                            message.cap = object.cap | 0;
                                        if (object.exclaimed != null)
                                            message.exclaimed = String(object.exclaimed);
                                        if (object.require != null)
                                            message.require = String(object.require);
                                        if (object.camp != null)
                                            message.camp = String(object.camp);
                                        if (object.park != null)
                                            message.park = Number(object.park);
                                        if (object.fifty != null)
                                            message.fifty = Number(object.fifty);
                                        if (object.setting != null)
                                            message.setting = object.setting | 0;
                                        if (object.trunk != null)
                                            message.trunk = String(object.trunk);
                                        if (object.sport != null)
                                            message.sport = String(object.sport);
                                        if (object.tune != null)
                                            message.tune = String(object.tune);
                                        return message;
                                    };

                                    /**
                                     * Creates a plain object from a DREAM message. Also converts values to other types if specified.
                                     * @function toObject
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @static
                                     * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM} message DREAM
                                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                                     * @returns {Object.<string,*>} Plain object
                                     */
                                    DREAM.toObject = function toObject(message, options) {
                                        if (!options)
                                            options = {};
                                        var object = {};
                                        if (options.defaults) {
                                            object["case"] = null;
                                            object.wave = "";
                                            object.myself = "";
                                            object.cap = 0;
                                            object.exclaimed = "";
                                            object.require = "";
                                            object.camp = "";
                                            object.park = 0;
                                            object.fifty = 0;
                                            object.setting = 0;
                                            object.trunk = "";
                                            object.sport = "";
                                            object.tune = "";
                                        }
                                        if (message["case"] != null && message.hasOwnProperty("case"))
                                            object["case"] = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.toObject(message["case"], options);
                                        if (message.wave != null && message.hasOwnProperty("wave"))
                                            object.wave = message.wave;
                                        if (message.myself != null && message.hasOwnProperty("myself"))
                                            object.myself = message.myself;
                                        if (message.cap != null && message.hasOwnProperty("cap"))
                                            object.cap = message.cap;
                                        if (message.exclaimed != null && message.hasOwnProperty("exclaimed"))
                                            object.exclaimed = message.exclaimed;
                                        if (message.require != null && message.hasOwnProperty("require"))
                                            object.require = message.require;
                                        if (message.camp != null && message.hasOwnProperty("camp"))
                                            object.camp = message.camp;
                                        if (message.park != null && message.hasOwnProperty("park"))
                                            object.park = options.json && !isFinite(message.park) ? String(message.park) : message.park;
                                        if (message.fifty != null && message.hasOwnProperty("fifty"))
                                            object.fifty = options.json && !isFinite(message.fifty) ? String(message.fifty) : message.fifty;
                                        if (message.setting != null && message.hasOwnProperty("setting"))
                                            object.setting = message.setting;
                                        if (message.trunk != null && message.hasOwnProperty("trunk"))
                                            object.trunk = message.trunk;
                                        if (message.sport != null && message.hasOwnProperty("sport"))
                                            object.sport = message.sport;
                                        if (message.tune != null && message.hasOwnProperty("tune"))
                                            object.tune = message.tune;
                                        return object;
                                    };

                                    /**
                                     * Converts this DREAM to JSON.
                                     * @function toJSON
                                     * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                     * @instance
                                     * @returns {Object.<string,*>} JSON object
                                     */
                                    DREAM.prototype.toJSON = function toJSON() {
                                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                                    };

                                    DREAM.CASE = (function() {

                                        /**
                                         * Properties of a CASE.
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                         * @interface ICASE
                                         * @property {string|null} [myself] CASE myself
                                         * @property {number|null} [outer] CASE outer
                                         * @property {string|null} [level] CASE level
                                         * @property {number|null} [rising] CASE rising
                                         * @property {string|null} [bottom] CASE bottom
                                         * @property {string|null} [browserling] CASE browserling
                                         * @property {string|null} [needed] CASE needed
                                         * @property {number|null} [call] CASE call
                                         * @property {number|null} [man] CASE man
                                         * @property {number|null} [cook] CASE cook
                                         * @property {number|null} [party] CASE party
                                         * @property {string|null} [railroad] CASE railroad
                                         * @property {string|null} [gave] CASE gave
                                         * @property {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.IMEAN|null} [mean] CASE mean
                                         */

                                        /**
                                         * Constructs a new CASE.
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM
                                         * @classdesc Represents a CASE.
                                         * @implements ICASE
                                         * @constructor
                                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.ICASE=} [properties] Properties to set
                                         */
                                        function CASE(properties) {
                                            if (properties)
                                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                                    if (properties[keys[i]] != null)
                                                        this[keys[i]] = properties[keys[i]];
                                        }

                                        /**
                                         * CASE myself.
                                         * @member {string} myself
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.myself = "";

                                        /**
                                         * CASE outer.
                                         * @member {number} outer
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.outer = 0;

                                        /**
                                         * CASE level.
                                         * @member {string} level
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.level = "";

                                        /**
                                         * CASE rising.
                                         * @member {number} rising
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.rising = 0;

                                        /**
                                         * CASE bottom.
                                         * @member {string} bottom
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.bottom = "";

                                        /**
                                         * CASE browserling.
                                         * @member {string} browserling
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.browserling = "";

                                        /**
                                         * CASE needed.
                                         * @member {string} needed
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.needed = "";

                                        /**
                                         * CASE call.
                                         * @member {number} call
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.call = 0;

                                        /**
                                         * CASE man.
                                         * @member {number} man
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.man = 0;

                                        /**
                                         * CASE cook.
                                         * @member {number} cook
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.cook = 0;

                                        /**
                                         * CASE party.
                                         * @member {number} party
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.party = 0;

                                        /**
                                         * CASE railroad.
                                         * @member {string} railroad
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.railroad = "";

                                        /**
                                         * CASE gave.
                                         * @member {string} gave
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.gave = "";

                                        /**
                                         * CASE mean.
                                         * @member {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.IMEAN|null|undefined} mean
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         */
                                        CASE.prototype.mean = null;

                                        /**
                                         * Creates a new CASE instance using the specified properties.
                                         * @function create
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @static
                                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.ICASE=} [properties] Properties to set
                                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE} CASE instance
                                         */
                                        CASE.create = function create(properties) {
                                            return new CASE(properties);
                                        };

                                        /**
                                         * Encodes the specified CASE message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.verify|verify} messages.
                                         * @function encode
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @static
                                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.ICASE} message CASE message or plain object to encode
                                         * @param {$protobuf.Writer} [writer] Writer to encode to
                                         * @returns {$protobuf.Writer} Writer
                                         */
                                        CASE.encode = function encode(message, writer) {
                                            if (!writer)
                                                writer = $Writer.create();
                                            if (message.myself != null && message.hasOwnProperty("myself"))
                                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.myself);
                                            if (message.outer != null && message.hasOwnProperty("outer"))
                                                writer.uint32(/* id 2, wireType 5 =*/21).float(message.outer);
                                            if (message.level != null && message.hasOwnProperty("level"))
                                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.level);
                                            if (message.rising != null && message.hasOwnProperty("rising"))
                                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rising);
                                            if (message.bottom != null && message.hasOwnProperty("bottom"))
                                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.bottom);
                                            if (message.browserling != null && message.hasOwnProperty("browserling"))
                                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.browserling);
                                            if (message.needed != null && message.hasOwnProperty("needed"))
                                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.needed);
                                            if (message.call != null && message.hasOwnProperty("call"))
                                                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.call);
                                            if (message.man != null && message.hasOwnProperty("man"))
                                                writer.uint32(/* id 9, wireType 5 =*/77).float(message.man);
                                            if (message.cook != null && message.hasOwnProperty("cook"))
                                                writer.uint32(/* id 10, wireType 5 =*/85).float(message.cook);
                                            if (message.party != null && message.hasOwnProperty("party"))
                                                writer.uint32(/* id 11, wireType 5 =*/93).float(message.party);
                                            if (message.railroad != null && message.hasOwnProperty("railroad"))
                                                writer.uint32(/* id 12, wireType 2 =*/98).string(message.railroad);
                                            if (message.gave != null && message.hasOwnProperty("gave"))
                                                writer.uint32(/* id 13, wireType 2 =*/106).string(message.gave);
                                            if (message.mean != null && message.hasOwnProperty("mean"))
                                                $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.encode(message.mean, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                                            return writer;
                                        };

                                        /**
                                         * Encodes the specified CASE message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.verify|verify} messages.
                                         * @function encodeDelimited
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @static
                                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.ICASE} message CASE message or plain object to encode
                                         * @param {$protobuf.Writer} [writer] Writer to encode to
                                         * @returns {$protobuf.Writer} Writer
                                         */
                                        CASE.encodeDelimited = function encodeDelimited(message, writer) {
                                            return this.encode(message, writer).ldelim();
                                        };

                                        /**
                                         * Decodes a CASE message from the specified reader or buffer.
                                         * @function decode
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @static
                                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                         * @param {number} [length] Message length if known beforehand
                                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE} CASE
                                         * @throws {Error} If the payload is not a reader or valid buffer
                                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                         */
                                        CASE.decode = function decode(reader, length) {
                                            if (!(reader instanceof $Reader))
                                                reader = $Reader.create(reader);
                                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE();
                                            while (reader.pos < end) {
                                                var tag = reader.uint32();
                                                switch (tag >>> 3) {
                                                case 1:
                                                    message.myself = reader.string();
                                                    break;
                                                case 2:
                                                    message.outer = reader.float();
                                                    break;
                                                case 3:
                                                    message.level = reader.string();
                                                    break;
                                                case 4:
                                                    message.rising = reader.int32();
                                                    break;
                                                case 5:
                                                    message.bottom = reader.string();
                                                    break;
                                                case 6:
                                                    message.browserling = reader.string();
                                                    break;
                                                case 7:
                                                    message.needed = reader.string();
                                                    break;
                                                case 8:
                                                    message.call = reader.int32();
                                                    break;
                                                case 9:
                                                    message.man = reader.float();
                                                    break;
                                                case 10:
                                                    message.cook = reader.float();
                                                    break;
                                                case 11:
                                                    message.party = reader.float();
                                                    break;
                                                case 12:
                                                    message.railroad = reader.string();
                                                    break;
                                                case 13:
                                                    message.gave = reader.string();
                                                    break;
                                                case 14:
                                                    message.mean = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.decode(reader, reader.uint32());
                                                    break;
                                                default:
                                                    reader.skipType(tag & 7);
                                                    break;
                                                }
                                            }
                                            return message;
                                        };

                                        /**
                                         * Decodes a CASE message from the specified reader or buffer, length delimited.
                                         * @function decodeDelimited
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @static
                                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE} CASE
                                         * @throws {Error} If the payload is not a reader or valid buffer
                                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                         */
                                        CASE.decodeDelimited = function decodeDelimited(reader) {
                                            if (!(reader instanceof $Reader))
                                                reader = new $Reader(reader);
                                            return this.decode(reader, reader.uint32());
                                        };

                                        /**
                                         * Verifies a CASE message.
                                         * @function verify
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @static
                                         * @param {Object.<string,*>} message Plain object to verify
                                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                                         */
                                        CASE.verify = function verify(message) {
                                            if (typeof message !== "object" || message === null)
                                                return "object expected";
                                            if (message.myself != null && message.hasOwnProperty("myself"))
                                                if (!$util.isString(message.myself))
                                                    return "myself: string expected";
                                            if (message.outer != null && message.hasOwnProperty("outer"))
                                                if (typeof message.outer !== "number")
                                                    return "outer: number expected";
                                            if (message.level != null && message.hasOwnProperty("level"))
                                                if (!$util.isString(message.level))
                                                    return "level: string expected";
                                            if (message.rising != null && message.hasOwnProperty("rising"))
                                                if (!$util.isInteger(message.rising))
                                                    return "rising: integer expected";
                                            if (message.bottom != null && message.hasOwnProperty("bottom"))
                                                if (!$util.isString(message.bottom))
                                                    return "bottom: string expected";
                                            if (message.browserling != null && message.hasOwnProperty("browserling"))
                                                if (!$util.isString(message.browserling))
                                                    return "browserling: string expected";
                                            if (message.needed != null && message.hasOwnProperty("needed"))
                                                if (!$util.isString(message.needed))
                                                    return "needed: string expected";
                                            if (message.call != null && message.hasOwnProperty("call"))
                                                if (!$util.isInteger(message.call))
                                                    return "call: integer expected";
                                            if (message.man != null && message.hasOwnProperty("man"))
                                                if (typeof message.man !== "number")
                                                    return "man: number expected";
                                            if (message.cook != null && message.hasOwnProperty("cook"))
                                                if (typeof message.cook !== "number")
                                                    return "cook: number expected";
                                            if (message.party != null && message.hasOwnProperty("party"))
                                                if (typeof message.party !== "number")
                                                    return "party: number expected";
                                            if (message.railroad != null && message.hasOwnProperty("railroad"))
                                                if (!$util.isString(message.railroad))
                                                    return "railroad: string expected";
                                            if (message.gave != null && message.hasOwnProperty("gave"))
                                                if (!$util.isString(message.gave))
                                                    return "gave: string expected";
                                            if (message.mean != null && message.hasOwnProperty("mean")) {
                                                var error = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.verify(message.mean);
                                                if (error)
                                                    return "mean." + error;
                                            }
                                            return null;
                                        };

                                        /**
                                         * Creates a CASE message from a plain object. Also converts values to their respective internal types.
                                         * @function fromObject
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @static
                                         * @param {Object.<string,*>} object Plain object
                                         * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE} CASE
                                         */
                                        CASE.fromObject = function fromObject(object) {
                                            if (object instanceof $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE)
                                                return object;
                                            var message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE();
                                            if (object.myself != null)
                                                message.myself = String(object.myself);
                                            if (object.outer != null)
                                                message.outer = Number(object.outer);
                                            if (object.level != null)
                                                message.level = String(object.level);
                                            if (object.rising != null)
                                                message.rising = object.rising | 0;
                                            if (object.bottom != null)
                                                message.bottom = String(object.bottom);
                                            if (object.browserling != null)
                                                message.browserling = String(object.browserling);
                                            if (object.needed != null)
                                                message.needed = String(object.needed);
                                            if (object.call != null)
                                                message.call = object.call | 0;
                                            if (object.man != null)
                                                message.man = Number(object.man);
                                            if (object.cook != null)
                                                message.cook = Number(object.cook);
                                            if (object.party != null)
                                                message.party = Number(object.party);
                                            if (object.railroad != null)
                                                message.railroad = String(object.railroad);
                                            if (object.gave != null)
                                                message.gave = String(object.gave);
                                            if (object.mean != null) {
                                                if (typeof object.mean !== "object")
                                                    throw TypeError(".TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.mean: object expected");
                                                message.mean = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.fromObject(object.mean);
                                            }
                                            return message;
                                        };

                                        /**
                                         * Creates a plain object from a CASE message. Also converts values to other types if specified.
                                         * @function toObject
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @static
                                         * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE} message CASE
                                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                                         * @returns {Object.<string,*>} Plain object
                                         */
                                        CASE.toObject = function toObject(message, options) {
                                            if (!options)
                                                options = {};
                                            var object = {};
                                            if (options.defaults) {
                                                object.myself = "";
                                                object.outer = 0;
                                                object.level = "";
                                                object.rising = 0;
                                                object.bottom = "";
                                                object.browserling = "";
                                                object.needed = "";
                                                object.call = 0;
                                                object.man = 0;
                                                object.cook = 0;
                                                object.party = 0;
                                                object.railroad = "";
                                                object.gave = "";
                                                object.mean = null;
                                            }
                                            if (message.myself != null && message.hasOwnProperty("myself"))
                                                object.myself = message.myself;
                                            if (message.outer != null && message.hasOwnProperty("outer"))
                                                object.outer = options.json && !isFinite(message.outer) ? String(message.outer) : message.outer;
                                            if (message.level != null && message.hasOwnProperty("level"))
                                                object.level = message.level;
                                            if (message.rising != null && message.hasOwnProperty("rising"))
                                                object.rising = message.rising;
                                            if (message.bottom != null && message.hasOwnProperty("bottom"))
                                                object.bottom = message.bottom;
                                            if (message.browserling != null && message.hasOwnProperty("browserling"))
                                                object.browserling = message.browserling;
                                            if (message.needed != null && message.hasOwnProperty("needed"))
                                                object.needed = message.needed;
                                            if (message.call != null && message.hasOwnProperty("call"))
                                                object.call = message.call;
                                            if (message.man != null && message.hasOwnProperty("man"))
                                                object.man = options.json && !isFinite(message.man) ? String(message.man) : message.man;
                                            if (message.cook != null && message.hasOwnProperty("cook"))
                                                object.cook = options.json && !isFinite(message.cook) ? String(message.cook) : message.cook;
                                            if (message.party != null && message.hasOwnProperty("party"))
                                                object.party = options.json && !isFinite(message.party) ? String(message.party) : message.party;
                                            if (message.railroad != null && message.hasOwnProperty("railroad"))
                                                object.railroad = message.railroad;
                                            if (message.gave != null && message.hasOwnProperty("gave"))
                                                object.gave = message.gave;
                                            if (message.mean != null && message.hasOwnProperty("mean"))
                                                object.mean = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.toObject(message.mean, options);
                                            return object;
                                        };

                                        /**
                                         * Converts this CASE to JSON.
                                         * @function toJSON
                                         * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                         * @instance
                                         * @returns {Object.<string,*>} JSON object
                                         */
                                        CASE.prototype.toJSON = function toJSON() {
                                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                                        };

                                        CASE.MEAN = (function() {

                                            /**
                                             * Properties of a MEAN.
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                             * @interface IMEAN
                                             * @property {number|null} [fastened] MEAN fastened
                                             * @property {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.IFARM|null} [farm] MEAN farm
                                             * @property {string|null} [thee] MEAN thee
                                             * @property {string|null} [work] MEAN work
                                             * @property {number|null} [library] MEAN library
                                             * @property {string|null} ["break"] MEAN break
                                             * @property {number|null} [stuck] MEAN stuck
                                             * @property {number|null} [other] MEAN other
                                             * @property {string|null} ["let"] MEAN let
                                             * @property {number|null} [know] MEAN know
                                             * @property {number|null} [dance] MEAN dance
                                             * @property {number|null} [problem] MEAN problem
                                             * @property {number|null} [valley] MEAN valley
                                             * @property {string|null} [loud] MEAN loud
                                             */

                                            /**
                                             * Constructs a new MEAN.
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE
                                             * @classdesc Represents a MEAN.
                                             * @implements IMEAN
                                             * @constructor
                                             * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.IMEAN=} [properties] Properties to set
                                             */
                                            function MEAN(properties) {
                                                if (properties)
                                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                                        if (properties[keys[i]] != null)
                                                            this[keys[i]] = properties[keys[i]];
                                            }

                                            /**
                                             * MEAN fastened.
                                             * @member {number} fastened
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.fastened = 0;

                                            /**
                                             * MEAN farm.
                                             * @member {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.IFARM|null|undefined} farm
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.farm = null;

                                            /**
                                             * MEAN thee.
                                             * @member {string} thee
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.thee = "";

                                            /**
                                             * MEAN work.
                                             * @member {string} work
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.work = "";

                                            /**
                                             * MEAN library.
                                             * @member {number} library
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.library = 0;

                                            /**
                                             * MEAN break.
                                             * @member {string} break
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype["break"] = "";

                                            /**
                                             * MEAN stuck.
                                             * @member {number} stuck
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.stuck = 0;

                                            /**
                                             * MEAN other.
                                             * @member {number} other
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.other = 0;

                                            /**
                                             * MEAN let.
                                             * @member {string} let
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype["let"] = "";

                                            /**
                                             * MEAN know.
                                             * @member {number} know
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.know = 0;

                                            /**
                                             * MEAN dance.
                                             * @member {number} dance
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.dance = 0;

                                            /**
                                             * MEAN problem.
                                             * @member {number} problem
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.problem = 0;

                                            /**
                                             * MEAN valley.
                                             * @member {number} valley
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.valley = 0;

                                            /**
                                             * MEAN loud.
                                             * @member {string} loud
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             */
                                            MEAN.prototype.loud = "";

                                            /**
                                             * Creates a new MEAN instance using the specified properties.
                                             * @function create
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @static
                                             * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.IMEAN=} [properties] Properties to set
                                             * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN} MEAN instance
                                             */
                                            MEAN.create = function create(properties) {
                                                return new MEAN(properties);
                                            };

                                            /**
                                             * Encodes the specified MEAN message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.verify|verify} messages.
                                             * @function encode
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @static
                                             * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.IMEAN} message MEAN message or plain object to encode
                                             * @param {$protobuf.Writer} [writer] Writer to encode to
                                             * @returns {$protobuf.Writer} Writer
                                             */
                                            MEAN.encode = function encode(message, writer) {
                                                if (!writer)
                                                    writer = $Writer.create();
                                                if (message.fastened != null && message.hasOwnProperty("fastened"))
                                                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.fastened);
                                                if (message.farm != null && message.hasOwnProperty("farm"))
                                                    $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM.encode(message.farm, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                                if (message.thee != null && message.hasOwnProperty("thee"))
                                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.thee);
                                                if (message.work != null && message.hasOwnProperty("work"))
                                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.work);
                                                if (message.library != null && message.hasOwnProperty("library"))
                                                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.library);
                                                if (message["break"] != null && message.hasOwnProperty("break"))
                                                    writer.uint32(/* id 6, wireType 2 =*/50).string(message["break"]);
                                                if (message.stuck != null && message.hasOwnProperty("stuck"))
                                                    writer.uint32(/* id 7, wireType 5 =*/61).float(message.stuck);
                                                if (message.other != null && message.hasOwnProperty("other"))
                                                    writer.uint32(/* id 8, wireType 5 =*/69).float(message.other);
                                                if (message["let"] != null && message.hasOwnProperty("let"))
                                                    writer.uint32(/* id 9, wireType 2 =*/74).string(message["let"]);
                                                if (message.know != null && message.hasOwnProperty("know"))
                                                    writer.uint32(/* id 10, wireType 5 =*/85).float(message.know);
                                                if (message.dance != null && message.hasOwnProperty("dance"))
                                                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.dance);
                                                if (message.problem != null && message.hasOwnProperty("problem"))
                                                    writer.uint32(/* id 12, wireType 5 =*/101).float(message.problem);
                                                if (message.valley != null && message.hasOwnProperty("valley"))
                                                    writer.uint32(/* id 13, wireType 5 =*/109).float(message.valley);
                                                if (message.loud != null && message.hasOwnProperty("loud"))
                                                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.loud);
                                                return writer;
                                            };

                                            /**
                                             * Encodes the specified MEAN message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.verify|verify} messages.
                                             * @function encodeDelimited
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @static
                                             * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.IMEAN} message MEAN message or plain object to encode
                                             * @param {$protobuf.Writer} [writer] Writer to encode to
                                             * @returns {$protobuf.Writer} Writer
                                             */
                                            MEAN.encodeDelimited = function encodeDelimited(message, writer) {
                                                return this.encode(message, writer).ldelim();
                                            };

                                            /**
                                             * Decodes a MEAN message from the specified reader or buffer.
                                             * @function decode
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @static
                                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                             * @param {number} [length] Message length if known beforehand
                                             * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN} MEAN
                                             * @throws {Error} If the payload is not a reader or valid buffer
                                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                             */
                                            MEAN.decode = function decode(reader, length) {
                                                if (!(reader instanceof $Reader))
                                                    reader = $Reader.create(reader);
                                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN();
                                                while (reader.pos < end) {
                                                    var tag = reader.uint32();
                                                    switch (tag >>> 3) {
                                                    case 1:
                                                        message.fastened = reader.float();
                                                        break;
                                                    case 2:
                                                        message.farm = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM.decode(reader, reader.uint32());
                                                        break;
                                                    case 3:
                                                        message.thee = reader.string();
                                                        break;
                                                    case 4:
                                                        message.work = reader.string();
                                                        break;
                                                    case 5:
                                                        message.library = reader.int32();
                                                        break;
                                                    case 6:
                                                        message["break"] = reader.string();
                                                        break;
                                                    case 7:
                                                        message.stuck = reader.float();
                                                        break;
                                                    case 8:
                                                        message.other = reader.float();
                                                        break;
                                                    case 9:
                                                        message["let"] = reader.string();
                                                        break;
                                                    case 10:
                                                        message.know = reader.float();
                                                        break;
                                                    case 11:
                                                        message.dance = reader.int32();
                                                        break;
                                                    case 12:
                                                        message.problem = reader.float();
                                                        break;
                                                    case 13:
                                                        message.valley = reader.float();
                                                        break;
                                                    case 14:
                                                        message.loud = reader.string();
                                                        break;
                                                    default:
                                                        reader.skipType(tag & 7);
                                                        break;
                                                    }
                                                }
                                                return message;
                                            };

                                            /**
                                             * Decodes a MEAN message from the specified reader or buffer, length delimited.
                                             * @function decodeDelimited
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @static
                                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                             * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN} MEAN
                                             * @throws {Error} If the payload is not a reader or valid buffer
                                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                             */
                                            MEAN.decodeDelimited = function decodeDelimited(reader) {
                                                if (!(reader instanceof $Reader))
                                                    reader = new $Reader(reader);
                                                return this.decode(reader, reader.uint32());
                                            };

                                            /**
                                             * Verifies a MEAN message.
                                             * @function verify
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @static
                                             * @param {Object.<string,*>} message Plain object to verify
                                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                                             */
                                            MEAN.verify = function verify(message) {
                                                if (typeof message !== "object" || message === null)
                                                    return "object expected";
                                                if (message.fastened != null && message.hasOwnProperty("fastened"))
                                                    if (typeof message.fastened !== "number")
                                                        return "fastened: number expected";
                                                if (message.farm != null && message.hasOwnProperty("farm")) {
                                                    var error = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM.verify(message.farm);
                                                    if (error)
                                                        return "farm." + error;
                                                }
                                                if (message.thee != null && message.hasOwnProperty("thee"))
                                                    if (!$util.isString(message.thee))
                                                        return "thee: string expected";
                                                if (message.work != null && message.hasOwnProperty("work"))
                                                    if (!$util.isString(message.work))
                                                        return "work: string expected";
                                                if (message.library != null && message.hasOwnProperty("library"))
                                                    if (!$util.isInteger(message.library))
                                                        return "library: integer expected";
                                                if (message["break"] != null && message.hasOwnProperty("break"))
                                                    if (!$util.isString(message["break"]))
                                                        return "break: string expected";
                                                if (message.stuck != null && message.hasOwnProperty("stuck"))
                                                    if (typeof message.stuck !== "number")
                                                        return "stuck: number expected";
                                                if (message.other != null && message.hasOwnProperty("other"))
                                                    if (typeof message.other !== "number")
                                                        return "other: number expected";
                                                if (message["let"] != null && message.hasOwnProperty("let"))
                                                    if (!$util.isString(message["let"]))
                                                        return "let: string expected";
                                                if (message.know != null && message.hasOwnProperty("know"))
                                                    if (typeof message.know !== "number")
                                                        return "know: number expected";
                                                if (message.dance != null && message.hasOwnProperty("dance"))
                                                    if (!$util.isInteger(message.dance))
                                                        return "dance: integer expected";
                                                if (message.problem != null && message.hasOwnProperty("problem"))
                                                    if (typeof message.problem !== "number")
                                                        return "problem: number expected";
                                                if (message.valley != null && message.hasOwnProperty("valley"))
                                                    if (typeof message.valley !== "number")
                                                        return "valley: number expected";
                                                if (message.loud != null && message.hasOwnProperty("loud"))
                                                    if (!$util.isString(message.loud))
                                                        return "loud: string expected";
                                                return null;
                                            };

                                            /**
                                             * Creates a MEAN message from a plain object. Also converts values to their respective internal types.
                                             * @function fromObject
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @static
                                             * @param {Object.<string,*>} object Plain object
                                             * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN} MEAN
                                             */
                                            MEAN.fromObject = function fromObject(object) {
                                                if (object instanceof $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN)
                                                    return object;
                                                var message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN();
                                                if (object.fastened != null)
                                                    message.fastened = Number(object.fastened);
                                                if (object.farm != null) {
                                                    if (typeof object.farm !== "object")
                                                        throw TypeError(".TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.farm: object expected");
                                                    message.farm = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM.fromObject(object.farm);
                                                }
                                                if (object.thee != null)
                                                    message.thee = String(object.thee);
                                                if (object.work != null)
                                                    message.work = String(object.work);
                                                if (object.library != null)
                                                    message.library = object.library | 0;
                                                if (object["break"] != null)
                                                    message["break"] = String(object["break"]);
                                                if (object.stuck != null)
                                                    message.stuck = Number(object.stuck);
                                                if (object.other != null)
                                                    message.other = Number(object.other);
                                                if (object["let"] != null)
                                                    message["let"] = String(object["let"]);
                                                if (object.know != null)
                                                    message.know = Number(object.know);
                                                if (object.dance != null)
                                                    message.dance = object.dance | 0;
                                                if (object.problem != null)
                                                    message.problem = Number(object.problem);
                                                if (object.valley != null)
                                                    message.valley = Number(object.valley);
                                                if (object.loud != null)
                                                    message.loud = String(object.loud);
                                                return message;
                                            };

                                            /**
                                             * Creates a plain object from a MEAN message. Also converts values to other types if specified.
                                             * @function toObject
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @static
                                             * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN} message MEAN
                                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                                             * @returns {Object.<string,*>} Plain object
                                             */
                                            MEAN.toObject = function toObject(message, options) {
                                                if (!options)
                                                    options = {};
                                                var object = {};
                                                if (options.defaults) {
                                                    object.fastened = 0;
                                                    object.farm = null;
                                                    object.thee = "";
                                                    object.work = "";
                                                    object.library = 0;
                                                    object["break"] = "";
                                                    object.stuck = 0;
                                                    object.other = 0;
                                                    object["let"] = "";
                                                    object.know = 0;
                                                    object.dance = 0;
                                                    object.problem = 0;
                                                    object.valley = 0;
                                                    object.loud = "";
                                                }
                                                if (message.fastened != null && message.hasOwnProperty("fastened"))
                                                    object.fastened = options.json && !isFinite(message.fastened) ? String(message.fastened) : message.fastened;
                                                if (message.farm != null && message.hasOwnProperty("farm"))
                                                    object.farm = $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM.toObject(message.farm, options);
                                                if (message.thee != null && message.hasOwnProperty("thee"))
                                                    object.thee = message.thee;
                                                if (message.work != null && message.hasOwnProperty("work"))
                                                    object.work = message.work;
                                                if (message.library != null && message.hasOwnProperty("library"))
                                                    object.library = message.library;
                                                if (message["break"] != null && message.hasOwnProperty("break"))
                                                    object["break"] = message["break"];
                                                if (message.stuck != null && message.hasOwnProperty("stuck"))
                                                    object.stuck = options.json && !isFinite(message.stuck) ? String(message.stuck) : message.stuck;
                                                if (message.other != null && message.hasOwnProperty("other"))
                                                    object.other = options.json && !isFinite(message.other) ? String(message.other) : message.other;
                                                if (message["let"] != null && message.hasOwnProperty("let"))
                                                    object["let"] = message["let"];
                                                if (message.know != null && message.hasOwnProperty("know"))
                                                    object.know = options.json && !isFinite(message.know) ? String(message.know) : message.know;
                                                if (message.dance != null && message.hasOwnProperty("dance"))
                                                    object.dance = message.dance;
                                                if (message.problem != null && message.hasOwnProperty("problem"))
                                                    object.problem = options.json && !isFinite(message.problem) ? String(message.problem) : message.problem;
                                                if (message.valley != null && message.hasOwnProperty("valley"))
                                                    object.valley = options.json && !isFinite(message.valley) ? String(message.valley) : message.valley;
                                                if (message.loud != null && message.hasOwnProperty("loud"))
                                                    object.loud = message.loud;
                                                return object;
                                            };

                                            /**
                                             * Converts this MEAN to JSON.
                                             * @function toJSON
                                             * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                             * @instance
                                             * @returns {Object.<string,*>} JSON object
                                             */
                                            MEAN.prototype.toJSON = function toJSON() {
                                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                                            };

                                            MEAN.FARM = (function() {

                                                /**
                                                 * Properties of a FARM.
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                                 * @interface IFARM
                                                 * @property {string|null} [off] FARM off
                                                 * @property {number|null} [nervous] FARM nervous
                                                 * @property {number|null} [practical] FARM practical
                                                 * @property {number|null} [bring] FARM bring
                                                 * @property {string|null} [you] FARM you
                                                 * @property {number|null} [clothes] FARM clothes
                                                 */

                                                /**
                                                 * Constructs a new FARM.
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN
                                                 * @classdesc Represents a FARM.
                                                 * @implements IFARM
                                                 * @constructor
                                                 * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.IFARM=} [properties] Properties to set
                                                 */
                                                function FARM(properties) {
                                                    if (properties)
                                                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                                            if (properties[keys[i]] != null)
                                                                this[keys[i]] = properties[keys[i]];
                                                }

                                                /**
                                                 * FARM off.
                                                 * @member {string} off
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @instance
                                                 */
                                                FARM.prototype.off = "";

                                                /**
                                                 * FARM nervous.
                                                 * @member {number} nervous
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @instance
                                                 */
                                                FARM.prototype.nervous = 0;

                                                /**
                                                 * FARM practical.
                                                 * @member {number} practical
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @instance
                                                 */
                                                FARM.prototype.practical = 0;

                                                /**
                                                 * FARM bring.
                                                 * @member {number} bring
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @instance
                                                 */
                                                FARM.prototype.bring = 0;

                                                /**
                                                 * FARM you.
                                                 * @member {string} you
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @instance
                                                 */
                                                FARM.prototype.you = "";

                                                /**
                                                 * FARM clothes.
                                                 * @member {number} clothes
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @instance
                                                 */
                                                FARM.prototype.clothes = 0;

                                                /**
                                                 * Creates a new FARM instance using the specified properties.
                                                 * @function create
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @static
                                                 * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.IFARM=} [properties] Properties to set
                                                 * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM} FARM instance
                                                 */
                                                FARM.create = function create(properties) {
                                                    return new FARM(properties);
                                                };

                                                /**
                                                 * Encodes the specified FARM message. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM.verify|verify} messages.
                                                 * @function encode
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @static
                                                 * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.IFARM} message FARM message or plain object to encode
                                                 * @param {$protobuf.Writer} [writer] Writer to encode to
                                                 * @returns {$protobuf.Writer} Writer
                                                 */
                                                FARM.encode = function encode(message, writer) {
                                                    if (!writer)
                                                        writer = $Writer.create();
                                                    if (message.off != null && message.hasOwnProperty("off"))
                                                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.off);
                                                    if (message.nervous != null && message.hasOwnProperty("nervous"))
                                                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.nervous);
                                                    if (message.practical != null && message.hasOwnProperty("practical"))
                                                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.practical);
                                                    if (message.bring != null && message.hasOwnProperty("bring"))
                                                        writer.uint32(/* id 4, wireType 5 =*/37).float(message.bring);
                                                    if (message.you != null && message.hasOwnProperty("you"))
                                                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.you);
                                                    if (message.clothes != null && message.hasOwnProperty("clothes"))
                                                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.clothes);
                                                    return writer;
                                                };

                                                /**
                                                 * Encodes the specified FARM message, length delimited. Does not implicitly {@link TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM.verify|verify} messages.
                                                 * @function encodeDelimited
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @static
                                                 * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.IFARM} message FARM message or plain object to encode
                                                 * @param {$protobuf.Writer} [writer] Writer to encode to
                                                 * @returns {$protobuf.Writer} Writer
                                                 */
                                                FARM.encodeDelimited = function encodeDelimited(message, writer) {
                                                    return this.encode(message, writer).ldelim();
                                                };

                                                /**
                                                 * Decodes a FARM message from the specified reader or buffer.
                                                 * @function decode
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @static
                                                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                                 * @param {number} [length] Message length if known beforehand
                                                 * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM} FARM
                                                 * @throws {Error} If the payload is not a reader or valid buffer
                                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                                 */
                                                FARM.decode = function decode(reader, length) {
                                                    if (!(reader instanceof $Reader))
                                                        reader = $Reader.create(reader);
                                                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM();
                                                    while (reader.pos < end) {
                                                        var tag = reader.uint32();
                                                        switch (tag >>> 3) {
                                                        case 1:
                                                            message.off = reader.string();
                                                            break;
                                                        case 2:
                                                            message.nervous = reader.float();
                                                            break;
                                                        case 3:
                                                            message.practical = reader.float();
                                                            break;
                                                        case 4:
                                                            message.bring = reader.float();
                                                            break;
                                                        case 5:
                                                            message.you = reader.string();
                                                            break;
                                                        case 6:
                                                            message.clothes = reader.int32();
                                                            break;
                                                        default:
                                                            reader.skipType(tag & 7);
                                                            break;
                                                        }
                                                    }
                                                    return message;
                                                };

                                                /**
                                                 * Decodes a FARM message from the specified reader or buffer, length delimited.
                                                 * @function decodeDelimited
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @static
                                                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                                                 * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM} FARM
                                                 * @throws {Error} If the payload is not a reader or valid buffer
                                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                                 */
                                                FARM.decodeDelimited = function decodeDelimited(reader) {
                                                    if (!(reader instanceof $Reader))
                                                        reader = new $Reader(reader);
                                                    return this.decode(reader, reader.uint32());
                                                };

                                                /**
                                                 * Verifies a FARM message.
                                                 * @function verify
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @static
                                                 * @param {Object.<string,*>} message Plain object to verify
                                                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                                                 */
                                                FARM.verify = function verify(message) {
                                                    if (typeof message !== "object" || message === null)
                                                        return "object expected";
                                                    if (message.off != null && message.hasOwnProperty("off"))
                                                        if (!$util.isString(message.off))
                                                            return "off: string expected";
                                                    if (message.nervous != null && message.hasOwnProperty("nervous"))
                                                        if (typeof message.nervous !== "number")
                                                            return "nervous: number expected";
                                                    if (message.practical != null && message.hasOwnProperty("practical"))
                                                        if (typeof message.practical !== "number")
                                                            return "practical: number expected";
                                                    if (message.bring != null && message.hasOwnProperty("bring"))
                                                        if (typeof message.bring !== "number")
                                                            return "bring: number expected";
                                                    if (message.you != null && message.hasOwnProperty("you"))
                                                        if (!$util.isString(message.you))
                                                            return "you: string expected";
                                                    if (message.clothes != null && message.hasOwnProperty("clothes"))
                                                        if (!$util.isInteger(message.clothes))
                                                            return "clothes: integer expected";
                                                    return null;
                                                };

                                                /**
                                                 * Creates a FARM message from a plain object. Also converts values to their respective internal types.
                                                 * @function fromObject
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @static
                                                 * @param {Object.<string,*>} object Plain object
                                                 * @returns {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM} FARM
                                                 */
                                                FARM.fromObject = function fromObject(object) {
                                                    if (object instanceof $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM)
                                                        return object;
                                                    var message = new $root.TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM();
                                                    if (object.off != null)
                                                        message.off = String(object.off);
                                                    if (object.nervous != null)
                                                        message.nervous = Number(object.nervous);
                                                    if (object.practical != null)
                                                        message.practical = Number(object.practical);
                                                    if (object.bring != null)
                                                        message.bring = Number(object.bring);
                                                    if (object.you != null)
                                                        message.you = String(object.you);
                                                    if (object.clothes != null)
                                                        message.clothes = object.clothes | 0;
                                                    return message;
                                                };

                                                /**
                                                 * Creates a plain object from a FARM message. Also converts values to other types if specified.
                                                 * @function toObject
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @static
                                                 * @param {TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM} message FARM
                                                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                                                 * @returns {Object.<string,*>} Plain object
                                                 */
                                                FARM.toObject = function toObject(message, options) {
                                                    if (!options)
                                                        options = {};
                                                    var object = {};
                                                    if (options.defaults) {
                                                        object.off = "";
                                                        object.nervous = 0;
                                                        object.practical = 0;
                                                        object.bring = 0;
                                                        object.you = "";
                                                        object.clothes = 0;
                                                    }
                                                    if (message.off != null && message.hasOwnProperty("off"))
                                                        object.off = message.off;
                                                    if (message.nervous != null && message.hasOwnProperty("nervous"))
                                                        object.nervous = options.json && !isFinite(message.nervous) ? String(message.nervous) : message.nervous;
                                                    if (message.practical != null && message.hasOwnProperty("practical"))
                                                        object.practical = options.json && !isFinite(message.practical) ? String(message.practical) : message.practical;
                                                    if (message.bring != null && message.hasOwnProperty("bring"))
                                                        object.bring = options.json && !isFinite(message.bring) ? String(message.bring) : message.bring;
                                                    if (message.you != null && message.hasOwnProperty("you"))
                                                        object.you = message.you;
                                                    if (message.clothes != null && message.hasOwnProperty("clothes"))
                                                        object.clothes = message.clothes;
                                                    return object;
                                                };

                                                /**
                                                 * Converts this FARM to JSON.
                                                 * @function toJSON
                                                 * @memberof TestMessage.DRAWN.DONKEY.POST.ME.BITE.ROUGH.END.DREAM.CASE.MEAN.FARM
                                                 * @instance
                                                 * @returns {Object.<string,*>} JSON object
                                                 */
                                                FARM.prototype.toJSON = function toJSON() {
                                                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                                                };

                                                return FARM;
                                            })();

                                            return MEAN;
                                        })();

                                        return CASE;
                                    })();

                                    return DREAM;
                                })();

                                return END;
                            })();

                            return ROUGH;
                        })();

                        return BITE;
                    })();

                    return ME;
                })();

                return POST;
            })();

            return DONKEY;
        })();

        return DRAWN;
    })();

    return TestMessage;
})();

module.exports = $root;
