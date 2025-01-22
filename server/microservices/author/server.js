const grpc = require('@grpc/grpc-js');
const protoloader = require('@grpc/proto-loader');
const path = require('path')
const { HOST_URL, PROTO_LOADER_OPTION, AUTHOR_PROTO_PATH, BOOK_PROTO_PATH, REVIEW_PROTO_PATH } = require('../../config');
const AuthorService = require('../../service/AuthorService');
const BookService = require('../../service/BookService');
const ReviewService = require('../../service/ReviewService');

const authorProtoPath  =  path.resolve(AUTHOR_PROTO_PATH);
const bookProtoPath  = path.resolve(BOOK_PROTO_PATH);
const reviewProtoPath = path.resolve(REVIEW_PROTO_PATH);


const packageDefinations = protoloader.loadSync([authorProtoPath,bookProtoPath,reviewProtoPath],PROTO_LOADER_OPTION);

const proto = grpc.loadPackageDefinition(packageDefinations);


const bookService = proto.book.BookService.service
const authorService = proto.author.AuthorService.service
const reviewService = proto.review.ReviewService.service


const server = new grpc.Server();

server.addService(authorService,new AuthorService())
server.addService(bookService,new BookService())
server.addService(reviewService,new ReviewService())

module.exports = server