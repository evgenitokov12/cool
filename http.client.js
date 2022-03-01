"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = void 0;
const url_1 = __importDefault(require("url"));
const https_1 = __importDefault(require("https"));
const https_2 = __importDefault(require("http"));
const buffer_1 = require("buffer");
const httpClient = (opt, requestData = null) => {
    return new Promise((resolve, reject) => {
        const parsedUrl = url_1.default.parse(opt.url);
        const bodyRequest = requestData;
        const reqOpt = Object.assign(Object.assign(Object.assign({}, opt), ((!opt.method && { method: 'POST' }) || {})), { port: parsedUrl.port || 443, path: parsedUrl.path, hostname: parsedUrl.hostname });
        delete reqOpt.headers.SOAPAction;
        const req = (reqOpt.port===80?https_2:https_1).default.request(reqOpt, function (res) {
            const chunks = [];
            res.on('data', function (chunk) {
                try {
                    chunks.push(chunk);
                }
                catch (e) {
                    console.log('error on recieve data', e);
                }
            });
            res.on('end', function (...e) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const body = buffer_1.Buffer.concat(chunks).toString();
                        const response = { body, data: body, statusCode: res.statusCode };
                        resolve(response);
                    }
                    catch (e) {
                        console.log('on end error', e, chunks);
                        reject(e);
                    }
                });
            });
            res.on('error', function (er) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log('error', er);
                    reject(er);
                });
            });
        });
        req.setTimeout(3000, function() {
            req.abort();
        });
        req.on('error', function (e) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('problem with request: ' + e.message);
                reject(e);
            });
        });
        req.on('end', function (e) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('problem with request on end: ' + e.message);
            });
        });
        req.write(bodyRequest);
        req.end();
    });
};
exports.httpClient = httpClient;
