"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotatoClient = void 0;
const service_1 = require("./service");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
// import "google/protobuf/timestamp.proto";
// todo documentation
// todo refactor
/**
 * @generated from protobuf service turnipxenon.v1.Potato
 */
class PotatoClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = service_1.Potato.typeName;
        this.methods = service_1.Potato.methods;
        this.options = service_1.Potato.options;
    }
    /**
     * @generated from protobuf rpc: RevalidatePath(turnipxenon.v1.RevalidatePathRequest) returns (turnipxenon.v1.RevalidatePathResponse);
     */
    revalidatePath(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
}
exports.PotatoClient = PotatoClient;
