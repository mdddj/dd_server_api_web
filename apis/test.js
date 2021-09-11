"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var ResultUtil_1 = require("./utils/ResultUtil");
var api = index_1.default.getInstance();
api.host = 'https://itbug.shop';
// api.getBlogList(1,10).then(value => {
//     console.log(value)
// })
api.logout().then(function (value) {
    (0, ResultUtil_1.successResultHandle)(value, function (data) {
        console.log(data);
    }, function (message) {
        console.log(message);
    });
});
