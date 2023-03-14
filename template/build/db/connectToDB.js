"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Connect to MongoDB
const connectToDB = () => {
    mongoose_1.default
        .connect("mongodb://127.0.0.1:27017/dumy")
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error(err));
};
exports.connectToDB = connectToDB;
