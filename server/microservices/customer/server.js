const grpc = require("@grpc/grpc-js");
const protoloader = require("@grpc/proto-loader");
const path = require("path");
const { CUSTOMER_PROTO_PATH, PROTO_LOADER_OPTION } = require("../../config");
const AuthInteceptor = require("../../interceptors/authInterceptor");
const CustomerService = require("../../service/CustomerService");

const customerProtoPath = path.resolve(CUSTOMER_PROTO_PATH);

const packageDefination = protoloader.loadSync(
  customerProtoPath,
  PROTO_LOADER_OPTION
);

const customerProto = grpc.loadPackageDefinition(packageDefination);

const customerService = customerProto.customer.CustomerService.service;

const server = new grpc.Server({
  interceptors: [AuthInteceptor],
});

server.addService(customerService, new CustomerService());

module.exports = server;
