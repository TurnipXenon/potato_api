import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message turnipxenon.v1.RevalidatePathRequest
 */
export interface RevalidatePathRequest {
    /**
     * @generated from protobuf field: string path = 1;
     */
    path: string;
}
/**
 * @generated from protobuf message turnipxenon.v1.RevalidatePathResponse
 */
export interface RevalidatePathResponse {
    /**
     * @generated from protobuf field: string path = 1;
     */
    path: string;
    /**
     * @generated from protobuf field: string service_name = 2;
     */
    serviceName: string;
    /**
     * @generated from protobuf field: string message = 3;
     */
    message: string;
    /**
     * @generated from protobuf field: int32 error_code = 4;
     */
    errorCode: number;
}
declare class RevalidatePathRequest$Type extends MessageType<RevalidatePathRequest> {
    constructor();
    create(value?: PartialMessage<RevalidatePathRequest>): RevalidatePathRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RevalidatePathRequest): RevalidatePathRequest;
    internalBinaryWrite(message: RevalidatePathRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.RevalidatePathRequest
 */
export declare const RevalidatePathRequest: RevalidatePathRequest$Type;
declare class RevalidatePathResponse$Type extends MessageType<RevalidatePathResponse> {
    constructor();
    create(value?: PartialMessage<RevalidatePathResponse>): RevalidatePathResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RevalidatePathResponse): RevalidatePathResponse;
    internalBinaryWrite(message: RevalidatePathResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.RevalidatePathResponse
 */
export declare const RevalidatePathResponse: RevalidatePathResponse$Type;
/**
 * @generated ServiceType for protobuf service turnipxenon.v1.Potato
 */
export declare const Potato: ServiceType;
export {};
