"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { three } = require('./PrimeNums');
//const {two} = require('./PrimeNums');
const PrimeNums_1 = require("./PrimeNums");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send(`Prime Numbers: ${PrimeNums_1.two}, ${three}`);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map