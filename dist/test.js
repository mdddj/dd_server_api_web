"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var api = index_1.default.getInstance();
api.host = 'https://itbug.shop:9445';
api.getBlogsByTagId(7, { page: 1, pageSize: 20 }).then(function (value) {
    console.log(value);
});
