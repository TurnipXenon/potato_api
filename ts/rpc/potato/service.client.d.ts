import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { RevalidatePathResponse } from "./service";
import type { RevalidatePathRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service turnipxenon.v1.Potato
 */
export interface IPotatoClient {
    /**
     * @generated from protobuf rpc: RevalidatePath(turnipxenon.v1.RevalidatePathRequest) returns (turnipxenon.v1.RevalidatePathResponse);
     */
    revalidatePath(input: RevalidatePathRequest, options?: RpcOptions): UnaryCall<RevalidatePathRequest, RevalidatePathResponse>;
}
/**
 * @generated from protobuf service turnipxenon.v1.Potato
 */
export declare class PotatoClient implements IPotatoClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: RevalidatePath(turnipxenon.v1.RevalidatePathRequest) returns (turnipxenon.v1.RevalidatePathResponse);
     */
    revalidatePath(input: RevalidatePathRequest, options?: RpcOptions): UnaryCall<RevalidatePathRequest, RevalidatePathResponse>;
}
