import { createGrpcServer } from './server';

const port = "127.0.0.1:5000";
const server = createGrpcServer(port);

server.start();

console.log(`GRPC Server running on port: ${port}`);