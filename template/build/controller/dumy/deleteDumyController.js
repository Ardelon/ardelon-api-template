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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDumyController = void 0;
const models_1 = require("../../db/models");
const deleteDumyController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email || typeof email !== "string") {
            return res.status(400).send({ message: "Missing required parameter" });
        }
        const dumy = yield models_1.dumySchema.findOneAndDelete({ email });
        if (!dumy) {
            return res.status(404).send({ message: "Dumy not found" });
        }
        res.json(dumy);
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: "Error deleting dumy" });
    }
});
exports.deleteDumyController = deleteDumyController;
