import * as grpc from 'grpc';
import { ICalculatorServer, CalculatorService } from './proto/calculator_grpc_pb';
import { OperationRequest, ResultResponse } from './proto/calculator_pb';

class CalculatorServer implements ICalculatorServer {

    private calculate(call: grpc.ServerUnaryCall<OperationRequest>, calc: (n1: number, n2: number) => number) {
        return calc(call.request.getFirstnumber(), call.request.getSecondnumber());
    }

    addition(call: grpc.ServerUnaryCall<OperationRequest>, callback: grpc.sendUnaryData<ResultResponse>) {
        const response = new ResultResponse();

        response.setResult(this.calculate(call, (n1, n2) => n1 + n2));

        callback(null, response)
    }

    subtraction(call: grpc.ServerUnaryCall<OperationRequest>, callback: grpc.sendUnaryData<ResultResponse>) {
        const response = new ResultResponse();

        response.setResult(this.calculate(call, (n1, n2) => n1 - n2));

        callback(null, response)
    }

    multiplication(call: grpc.ServerUnaryCall<OperationRequest>, callback: grpc.sendUnaryData<ResultResponse>) {
        const response = new ResultResponse();

        response.setResult(this.calculate(call, (n1, n2) => n1 * n2));

        callback(null, response)
    }

    division(call: grpc.ServerUnaryCall<OperationRequest>, callback: grpc.sendUnaryData<ResultResponse>) {
        const response = new ResultResponse();

        if (call.request.getSecondnumber() === 0) {
            const err: grpc.ServiceError = {
                code: 1000,
                name: 'OperationError',
                message: 'Divisor is equal to zero'
            };

            return callback(err, null);
        }

        response.setResult(this.calculate(call, (n1, n2) => n1 / n2));

        callback(null, response)
    }
}

export function createGrpcServer(port: string): grpc.Server {
    var server = new grpc.Server();

    server.addService(CalculatorService, new CalculatorServer());
    server.bind(port, grpc.ServerCredentials.createInsecure());

    return server;
}