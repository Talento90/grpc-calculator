#!/usr/bin/env bash

# Path to proto files
PROTO_PATH="../proto"

# Directory to write generated code
OUT_DIR="./calculator"

# Create Output folder
mkdir -p ${OUT_DIR}

protoc -I ${PROTO_PATH} calculator.proto --go_out=plugins=grpc:${OUT_DIR}
