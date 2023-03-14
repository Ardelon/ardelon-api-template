"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dumySchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: "Invalid email address",
        },
    },
    isDumy: {
        type: Boolean,
        default: true,
    },
});
exports.default = (0, mongoose_1.model)("Dumy", dumySchema);
