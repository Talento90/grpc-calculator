import * as grpc from "grpc";
import * as pino from "pino";
import { CalculatorClient } from "./proto/calculator_grpc_pb";
import { OperationRequest, ResultResponse } from "./proto/calculator_pb";

const logger = pino({
    name: "grpc-server-calculator"
});

const client = new CalculatorClient("127.0.0.1:5000", grpc.credentials.createInsecure()
);

const request = new OperationRequest();

request.setFirstnumber(10);
request.setSecondnumber(30);

client.addition(request, (err: grpc.ServiceError, response: ResultResponse) => {
    if (err) {
        logger.error(err);
    } else {
        logger.info(`Result: ${response.getResult()}`);
    }
});
