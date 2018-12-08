import * as grpc from "grpc";
import { Logger } from "pino";
import {
    ICalculatorServer,
    CalculatorService
} from "./proto/calculator_grpc_pb";
import { OperationRequest, ResultResponse } from "./proto/calculator_pb";

class CalculatorServer implements ICalculatorServer {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    private calculate(
        call: grpc.ServerUnaryCall<OperationRequest>,
        calc: (n1: number, n2: number) => number
    ): ResultResponse {
        this.logger.info('Calculate', call.request.toObject());

        const response = new ResultResponse();
        const result = calc(
            call.request.getFirstnumber(),
            call.request.getSecondnumber()
        );

        response.setResult(result);

        this.logger.info('Response', response.toObject());

        return response;
    }

    addition(
        call: grpc.ServerUnaryCall<OperationRequest>,
        callback: grpc.sendUnaryData<ResultResponse>
    ) {
        const response = this.calculate(call, (n1, n2) => n1 + n2);

        callback(null, response);
    }

    subtraction(
        call: grpc.ServerUnaryCall<OperationRequest>,
        callback: grpc.sendUnaryData<ResultResponse>
    ) {
        const response = this.calculate(call, (n1, n2) => n1 - n2);

        callback(null, response);
    }

    multiplication(
        call: grpc.ServerUnaryCall<OperationRequest>,
        callback: grpc.sendUnaryData<ResultResponse>
    ) {
        const response = this.calculate(call, (n1, n2) => n1 * n2);

        callback(null, response);
    }

    division(
        call: grpc.ServerUnaryCall<OperationRequest>,
        callback: grpc.sendUnaryData<ResultResponse>
    ) {
        if (call.request.getSecondnumber() === 0) {
            const err: grpc.ServiceError = {
                code: 1000,
                name: "OperationError",
                message: "Divisor is equal to zero"
            };

            return callback(err, null);
        }

        const response = this.calculate(call, (n1, n2) => n1 / n2);

        callback(null, response);
    }
}

export function createGrpcServer(port: string, logger: Logger): grpc.Server {
    var server = new grpc.Server();

    server.addService(CalculatorService, new CalculatorServer(logger));

    server.bind(port, grpc.ServerCredentials.createInsecure());

    return server;
}
