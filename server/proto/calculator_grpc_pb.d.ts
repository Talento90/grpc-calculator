// package: calculator
// file: calculator.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as calculator_pb from "./calculator_pb";

interface ICalculatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addition: ICalculatorService_IAddition;
    subtraction: ICalculatorService_ISubtraction;
    multiplication: ICalculatorService_IMultiplication;
    division: ICalculatorService_IDivision;
}

interface ICalculatorService_IAddition extends grpc.MethodDefinition<calculator_pb.OperationRequest, calculator_pb.ResultResponse> {
    path: string; // "/calculator.Calculator/Addition"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<calculator_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.OperationRequest>;
    responseSerialize: grpc.serialize<calculator_pb.ResultResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.ResultResponse>;
}
interface ICalculatorService_ISubtraction extends grpc.MethodDefinition<calculator_pb.OperationRequest, calculator_pb.ResultResponse> {
    path: string; // "/calculator.Calculator/Subtraction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<calculator_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.OperationRequest>;
    responseSerialize: grpc.serialize<calculator_pb.ResultResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.ResultResponse>;
}
interface ICalculatorService_IMultiplication extends grpc.MethodDefinition<calculator_pb.OperationRequest, calculator_pb.ResultResponse> {
    path: string; // "/calculator.Calculator/Multiplication"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<calculator_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.OperationRequest>;
    responseSerialize: grpc.serialize<calculator_pb.ResultResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.ResultResponse>;
}
interface ICalculatorService_IDivision extends grpc.MethodDefinition<calculator_pb.OperationRequest, calculator_pb.ResultResponse> {
    path: string; // "/calculator.Calculator/Division"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<calculator_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.OperationRequest>;
    responseSerialize: grpc.serialize<calculator_pb.ResultResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.ResultResponse>;
}

export const CalculatorService: ICalculatorService;

export interface ICalculatorServer {
    addition: grpc.handleUnaryCall<calculator_pb.OperationRequest, calculator_pb.ResultResponse>;
    subtraction: grpc.handleUnaryCall<calculator_pb.OperationRequest, calculator_pb.ResultResponse>;
    multiplication: grpc.handleUnaryCall<calculator_pb.OperationRequest, calculator_pb.ResultResponse>;
    division: grpc.handleUnaryCall<calculator_pb.OperationRequest, calculator_pb.ResultResponse>;
}

export interface ICalculatorClient {
    addition(request: calculator_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    addition(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    addition(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    subtraction(request: calculator_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    subtraction(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    subtraction(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    multiplication(request: calculator_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    multiplication(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    multiplication(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    division(request: calculator_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    division(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    division(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
}

export class CalculatorClient extends grpc.Client implements ICalculatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addition(request: calculator_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public addition(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public addition(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public subtraction(request: calculator_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public subtraction(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public subtraction(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public multiplication(request: calculator_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public multiplication(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public multiplication(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public division(request: calculator_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public division(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
    public division(request: calculator_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.ResultResponse) => void): grpc.ClientUnaryCall;
}
