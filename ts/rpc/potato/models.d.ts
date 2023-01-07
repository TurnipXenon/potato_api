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
export {};
