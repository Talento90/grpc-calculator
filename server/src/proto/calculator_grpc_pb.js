// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var calculator_pb = require('./calculator_pb.js');

function serialize_calculator_OperationRequest(arg) {
  if (!(arg instanceof calculator_pb.OperationRequest)) {
    throw new Error('Expected argument of type calculator.OperationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_calculator_OperationRequest(buffer_arg) {
  return calculator_pb.OperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_ResultResponse(arg) {
  if (!(arg instanceof calculator_pb.ResultResponse)) {
    throw new Error('Expected argument of type calculator.ResultResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_calculator_ResultResponse(buffer_arg) {
  return calculator_pb.ResultResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorService = exports.CalculatorService = {
  addition: {
    path: '/calculator.Calculator/Addition',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.OperationRequest,
    responseType: calculator_pb.ResultResponse,
    requestSerialize: serialize_calculator_OperationRequest,
    requestDeserialize: deserialize_calculator_OperationRequest,
    responseSerialize: serialize_calculator_ResultResponse,
    responseDeserialize: deserialize_calculator_ResultResponse,
  },
  subtraction: {
    path: '/calculator.Calculator/Subtraction',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.OperationRequest,
    responseType: calculator_pb.ResultResponse,
    requestSerialize: serialize_calculator_OperationRequest,
    requestDeserialize: deserialize_calculator_OperationRequest,
    responseSerialize: serialize_calculator_ResultResponse,
    responseDeserialize: deserialize_calculator_ResultResponse,
  },
  multiplication: {
    path: '/calculator.Calculator/Multiplication',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.OperationRequest,
    responseType: calculator_pb.ResultResponse,
    requestSerialize: serialize_calculator_OperationRequest,
    requestDeserialize: deserialize_calculator_OperationRequest,
    responseSerialize: serialize_calculator_ResultResponse,
    responseDeserialize: deserialize_calculator_ResultResponse,
  },
  division: {
    path: '/calculator.Calculator/Division',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.OperationRequest,
    responseType: calculator_pb.ResultResponse,
    requestSerialize: serialize_calculator_OperationRequest,
    requestDeserialize: deserialize_calculator_OperationRequest,
    responseSerialize: serialize_calculator_ResultResponse,
    responseDeserialize: deserialize_calculator_ResultResponse,
  },
};

exports.CalculatorClient = grpc.makeGenericClientConstructor(CalculatorService);
