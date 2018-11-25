import * as grpc from 'grpc';
import { Calculator } from '../protos/calculator_pb_service';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = __dirname + '/../../../protos/calculator.proto';

export function createGrpcServer(): grpc.Server {
    const packageDefinition = protoLoader.loadSync(
        PROTO_PATH,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });

    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

    // The protoDescriptor object has the full package hierarchy
    var routeguide = protoDescriptor.routeguide;


    var server = new grpc.Server();

    server.addProtoService<>(routeguide.RouteGuide.service, {
        // getFeature: getFeature,
        // listFeatures: listFeatures,
        // recordRoute: recordRoute,
        // routeChat: routeChat
    });

    return server;
}