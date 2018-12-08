import { createGrpcServer } from './server';
import * as pino from 'pino';

const port = "127.0.0.1:5000";
const logger = pino({
    name: 'grpc-server-calculator'
});

const server = createGrpcServer(port, logger);

server.start();

logger.info(`GRPC Server running on port: ${port}`);