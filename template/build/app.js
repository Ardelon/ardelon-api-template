"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const connectToDB_1 = require("./db/connectToDB");
const dumyRouter_1 = require("./routes/dumyRouter");
const logger_1 = require("./middleware/logger");
(0, connectToDB_1.connectToDB)();
const app = (0, express_1.default)();
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger_1.logger);
app.use("/dumy", dumyRouter_1.router);
// Start the server
const port = 35789;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
