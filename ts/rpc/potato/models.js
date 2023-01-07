"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevalidatePathResponse = exports.RevalidatePathRequest = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RevalidatePathRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.RevalidatePathRequest", [
            { no: 1, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { path: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string path */ 1:
                    message.path = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string path = 1; */
        if (message.path !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.path);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.RevalidatePathRequest
 */
exports.RevalidatePathRequest = new RevalidatePathRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RevalidatePathResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.RevalidatePathResponse", [
            { no: 1, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "service_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "error_code", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { path: "", serviceName: "", message: "", errorCode: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string path */ 1:
                    message.path = reader.string();
                    break;
                case /* string service_name */ 2:
                    message.serviceName = reader.string();
                    break;
                case /* string message */ 3:
                    message.message = reader.string();
                    break;
                case /* int32 error_code */ 4:
                    message.errorCode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string path = 1; */
        if (message.path !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.path);
        /* string service_name = 2; */
        if (message.serviceName !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.serviceName);
        /* string message = 3; */
        if (message.message !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.message);
        /* int32 error_code = 4; */
        if (message.errorCode !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.errorCode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.RevalidatePathResponse
 */
exports.RevalidatePathResponse = new RevalidatePathResponse$Type();
