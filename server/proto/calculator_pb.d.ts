// package: calculator
// file: calculator.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class OperationRequest extends jspb.Message { 
    getFirstnumber(): number;
    setFirstnumber(value: number): void;

    getSecondnumber(): number;
    setSecondnumber(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OperationRequest): OperationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationRequest;
    static deserializeBinaryFromReader(message: OperationRequest, reader: jspb.BinaryReader): OperationRequest;
}

export namespace OperationRequest {
    export type AsObject = {
        firstnumber: number,
        secondnumber: number,
    }
}

export class ResultResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResultResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResultResponse): ResultResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResultResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResultResponse;
    static deserializeBinaryFromReader(message: ResultResponse, reader: jspb.BinaryReader): ResultResponse;
}

export namespace ResultResponse {
    export type AsObject = {
        result: number,
    }
}
