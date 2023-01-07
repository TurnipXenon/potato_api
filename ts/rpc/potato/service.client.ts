// @generated by protobuf-ts 2.8.2 with parameter generate_dependencies
// @generated from protobuf file "rpc/potato/service.proto" (package "turnipxenon.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Potato } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { RevalidatePathResponse } from "./service";
import type { RevalidatePathRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// import "google/protobuf/timestamp.proto";

// todo documentation
// todo refactor

/**
 * @generated from protobuf service turnipxenon.v1.Potato
 */
export interface IPotatoClient {
    /**
     * @generated from protobuf rpc: RevalidatePath(turnipxenon.v1.RevalidatePathRequest) returns (turnipxenon.v1.RevalidatePathResponse);
     */
    revalidatePath(input: RevalidatePathRequest, options?: RpcOptions): UnaryCall<RevalidatePathRequest, RevalidatePathResponse>;
}
// import "google/protobuf/timestamp.proto";

// todo documentation
// todo refactor

/**
 * @generated from protobuf service turnipxenon.v1.Potato
 */
export class PotatoClient implements IPotatoClient, ServiceInfo {
    typeName = Potato.typeName;
    methods = Potato.methods;
    options = Potato.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: RevalidatePath(turnipxenon.v1.RevalidatePathRequest) returns (turnipxenon.v1.RevalidatePathResponse);
     */
    revalidatePath(input: RevalidatePathRequest, options?: RpcOptions): UnaryCall<RevalidatePathRequest, RevalidatePathResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<RevalidatePathRequest, RevalidatePathResponse>("unary", this._transport, method, opt, input);
    }
}
