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
     * @property {string|null} [hair] TestMessage hair
     * @property {string|null} [shelf] TestMessage shelf
     * @property {TestMessage.IINFLUENCE|null} [influence] TestMessage influence
     * @property {string|null} [arm] TestMessage arm
     * @property {string|null} [student] TestMessage student
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
     * TestMessage hair.
     * @member {string} hair
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.hair = "";

    /**
     * TestMessage shelf.
     * @member {string} shelf
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.shelf = "";

    /**
     * TestMessage influence.
     * @member {TestMessage.IINFLUENCE|null|undefined} influence
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.influence = null;

    /**
     * TestMessage arm.
     * @member {string} arm
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.arm = "";

    /**
     * TestMessage student.
     * @member {string} student
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.student = "";

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
        if (message.hair != null && message.hasOwnProperty("hair"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hair);
        if (message.shelf != null && message.hasOwnProperty("shelf"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.shelf);
        if (message.influence != null && message.hasOwnProperty("influence"))
            $root.TestMessage.INFLUENCE.encode(message.influence, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.arm != null && message.hasOwnProperty("arm"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.arm);
        if (message.student != null && message.hasOwnProperty("student"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.student);
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
                message.hair = reader.string();
                break;
            case 2:
                message.shelf = reader.string();
                break;
            case 3:
                message.influence = $root.TestMessage.INFLUENCE.decode(reader, reader.uint32());
                break;
            case 4:
                message.arm = reader.string();
                break;
            case 5:
                message.student = reader.string();
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
        if (message.hair != null && message.hasOwnProperty("hair"))
            if (!$util.isString(message.hair))
                return "hair: string expected";
        if (message.shelf != null && message.hasOwnProperty("shelf"))
            if (!$util.isString(message.shelf))
                return "shelf: string expected";
        if (message.influence != null && message.hasOwnProperty("influence")) {
            var error = $root.TestMessage.INFLUENCE.verify(message.influence);
            if (error)
                return "influence." + error;
        }
        if (message.arm != null && message.hasOwnProperty("arm"))
            if (!$util.isString(message.arm))
                return "arm: string expected";
        if (message.student != null && message.hasOwnProperty("student"))
            if (!$util.isString(message.student))
                return "student: string expected";
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
        if (object.hair != null)
            message.hair = String(object.hair);
        if (object.shelf != null)
            message.shelf = String(object.shelf);
        if (object.influence != null) {
            if (typeof object.influence !== "object")
                throw TypeError(".TestMessage.influence: object expected");
            message.influence = $root.TestMessage.INFLUENCE.fromObject(object.influence);
        }
        if (object.arm != null)
            message.arm = String(object.arm);
        if (object.student != null)
            message.student = String(object.student);
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
            object.hair = "";
            object.shelf = "";
            object.influence = null;
            object.arm = "";
            object.student = "";
        }
        if (message.hair != null && message.hasOwnProperty("hair"))
            object.hair = message.hair;
        if (message.shelf != null && message.hasOwnProperty("shelf"))
            object.shelf = message.shelf;
        if (message.influence != null && message.hasOwnProperty("influence"))
            object.influence = $root.TestMessage.INFLUENCE.toObject(message.influence, options);
        if (message.arm != null && message.hasOwnProperty("arm"))
            object.arm = message.arm;
        if (message.student != null && message.hasOwnProperty("student"))
            object.student = message.student;
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

    TestMessage.INFLUENCE = (function() {

        /**
         * Properties of a INFLUENCE.
         * @memberof TestMessage
         * @interface IINFLUENCE
         * @property {string|null} [quick] INFLUENCE quick
         * @property {string|null} [his] INFLUENCE his
         * @property {string|null} [attached] INFLUENCE attached
         * @property {string|null} [worry] INFLUENCE worry
         * @property {string|null} [studied] INFLUENCE studied
         */

        /**
         * Constructs a new INFLUENCE.
         * @memberof TestMessage
         * @classdesc Represents a INFLUENCE.
         * @implements IINFLUENCE
         * @constructor
         * @param {TestMessage.IINFLUENCE=} [properties] Properties to set
         */
        function INFLUENCE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFLUENCE quick.
         * @member {string} quick
         * @memberof TestMessage.INFLUENCE
         * @instance
         */
        INFLUENCE.prototype.quick = "";

        /**
         * INFLUENCE his.
         * @member {string} his
         * @memberof TestMessage.INFLUENCE
         * @instance
         */
        INFLUENCE.prototype.his = "";

        /**
         * INFLUENCE attached.
         * @member {string} attached
         * @memberof TestMessage.INFLUENCE
         * @instance
         */
        INFLUENCE.prototype.attached = "";

        /**
         * INFLUENCE worry.
         * @member {string} worry
         * @memberof TestMessage.INFLUENCE
         * @instance
         */
        INFLUENCE.prototype.worry = "";

        /**
         * INFLUENCE studied.
         * @member {string} studied
         * @memberof TestMessage.INFLUENCE
         * @instance
         */
        INFLUENCE.prototype.studied = "";

        /**
         * Creates a new INFLUENCE instance using the specified properties.
         * @function create
         * @memberof TestMessage.INFLUENCE
         * @static
         * @param {TestMessage.IINFLUENCE=} [properties] Properties to set
         * @returns {TestMessage.INFLUENCE} INFLUENCE instance
         */
        INFLUENCE.create = function create(properties) {
            return new INFLUENCE(properties);
        };

        /**
         * Encodes the specified INFLUENCE message. Does not implicitly {@link TestMessage.INFLUENCE.verify|verify} messages.
         * @function encode
         * @memberof TestMessage.INFLUENCE
         * @static
         * @param {TestMessage.IINFLUENCE} message INFLUENCE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFLUENCE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.quick != null && message.hasOwnProperty("quick"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.quick);
            if (message.his != null && message.hasOwnProperty("his"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.his);
            if (message.attached != null && message.hasOwnProperty("attached"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.attached);
            if (message.worry != null && message.hasOwnProperty("worry"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.worry);
            if (message.studied != null && message.hasOwnProperty("studied"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.studied);
            return writer;
        };

        /**
         * Encodes the specified INFLUENCE message, length delimited. Does not implicitly {@link TestMessage.INFLUENCE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TestMessage.INFLUENCE
         * @static
         * @param {TestMessage.IINFLUENCE} message INFLUENCE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFLUENCE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFLUENCE message from the specified reader or buffer.
         * @function decode
         * @memberof TestMessage.INFLUENCE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TestMessage.INFLUENCE} INFLUENCE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFLUENCE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage.INFLUENCE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.quick = reader.string();
                    break;
                case 2:
                    message.his = reader.string();
                    break;
                case 3:
                    message.attached = reader.string();
                    break;
                case 4:
                    message.worry = reader.string();
                    break;
                case 5:
                    message.studied = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFLUENCE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TestMessage.INFLUENCE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TestMessage.INFLUENCE} INFLUENCE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFLUENCE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFLUENCE message.
         * @function verify
         * @memberof TestMessage.INFLUENCE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFLUENCE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.quick != null && message.hasOwnProperty("quick"))
                if (!$util.isString(message.quick))
                    return "quick: string expected";
            if (message.his != null && message.hasOwnProperty("his"))
                if (!$util.isString(message.his))
                    return "his: string expected";
            if (message.attached != null && message.hasOwnProperty("attached"))
                if (!$util.isString(message.attached))
                    return "attached: string expected";
            if (message.worry != null && message.hasOwnProperty("worry"))
                if (!$util.isString(message.worry))
                    return "worry: string expected";
            if (message.studied != null && message.hasOwnProperty("studied"))
                if (!$util.isString(message.studied))
                    return "studied: string expected";
            return null;
        };

        /**
         * Creates a INFLUENCE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TestMessage.INFLUENCE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TestMessage.INFLUENCE} INFLUENCE
         */
        INFLUENCE.fromObject = function fromObject(object) {
            if (object instanceof $root.TestMessage.INFLUENCE)
                return object;
            var message = new $root.TestMessage.INFLUENCE();
            if (object.quick != null)
                message.quick = String(object.quick);
            if (object.his != null)
                message.his = String(object.his);
            if (object.attached != null)
                message.attached = String(object.attached);
            if (object.worry != null)
                message.worry = String(object.worry);
            if (object.studied != null)
                message.studied = String(object.studied);
            return message;
        };

        /**
         * Creates a plain object from a INFLUENCE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TestMessage.INFLUENCE
         * @static
         * @param {TestMessage.INFLUENCE} message INFLUENCE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFLUENCE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.quick = "";
                object.his = "";
                object.attached = "";
                object.worry = "";
                object.studied = "";
            }
            if (message.quick != null && message.hasOwnProperty("quick"))
                object.quick = message.quick;
            if (message.his != null && message.hasOwnProperty("his"))
                object.his = message.his;
            if (message.attached != null && message.hasOwnProperty("attached"))
                object.attached = message.attached;
            if (message.worry != null && message.hasOwnProperty("worry"))
                object.worry = message.worry;
            if (message.studied != null && message.hasOwnProperty("studied"))
                object.studied = message.studied;
            return object;
        };

        /**
         * Converts this INFLUENCE to JSON.
         * @function toJSON
         * @memberof TestMessage.INFLUENCE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFLUENCE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFLUENCE;
    })();

    return TestMessage;
})();

module.exports = $root;
