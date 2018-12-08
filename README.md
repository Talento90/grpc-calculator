# grpc-calculator
:heavy_multiplication_x: :heavy_plus_sign: :heavy_minus_sign: :heavy_division_sign: GRPC calculator service using GO and node.js with TypeScript.


## Prerequisite

- GO 1.11 with modules (https://github.com/golang/go/wiki/Modules)
- NodeJS 8.x
- Install Protocol Buffers - http://google.github.io/proto-lens/installing-protoc.html

## Build

### Server (NodeJS + TypeScript)

- `npm install` - Install dependencies
- `npm run build:proto` - Generate JS+TS files from protofiles
- `npm run build` - Compile TS files
- `npm start` - Server running on port 5000
- `npm run client` - Run NodeJS Client

### Client (GO)

- `make build-proto` - Generate GO code from protofiles
- `make start` - Run GO Client
