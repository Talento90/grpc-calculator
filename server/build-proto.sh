#!/usr/bin/env bash

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_PLUGIN_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
# Path to proto files
PROTO_PATH="../proto"
# Directory to write generated code to (.js and .d.ts files) 
OUT_DIR="./proto"

# Create Output folder
mkdir -p ${OUT_DIR}

# JavaScript code generating
grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:${OUT_DIR} \
--grpc_out=${OUT_DIR} \
--plugin=protoc-gen-grpc=${PROTOC_GEN_PLUGIN_PATH} \
-I ${PROTO_PATH} \
calculator.proto

# Generate TS definitions
protoc \
--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
--ts_out=$OUT_DIR \
--proto_path $PROTO_PATH \
calculator.proto