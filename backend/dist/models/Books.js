"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose_1 = __importDefault(require("../lib/Mongoose"));
const BooksSchema = new Mongoose_1.default.Schema({
    name: String,
    author: String,
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
});
const BooksModel = Mongoose_1.default.model('Books', BooksSchema);
exports.default = BooksModel;
