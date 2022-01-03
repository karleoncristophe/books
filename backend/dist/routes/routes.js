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
const express_1 = require("express");
const Books_1 = __importDefault(require("../models/Books"));
const routes = (0, express_1.Router)();
routes.get('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield Books_1.default.find().sort({ createdAt: 1 });
    return res.status(200).send(books);
}));
routes.post('/createBooks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, author } = req.body;
    const objects = {
        name,
        author,
    };
    try {
        const books = yield Books_1.default.create(objects);
        return res.status(200).send(books);
    }
    catch (e) {
        return res.status(400).send({
            error: 'Error creating list.',
        });
    }
}));
routes.put('/updateBooks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, author } = req.body;
    const objects = { name: name, author: author };
    try {
        const updateData = yield Books_1.default.findOneAndUpdate({
            _id: id,
        }, objects, { new: true });
        res.status(200).send(updateData);
    }
    catch (error) {
        res.status(403).send({
            error: 'Error while updating.',
        });
    }
}));
routes.delete('/deleteBooks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const books = yield Books_1.default.findById({ _id: id });
    yield books.remove();
    return res.status(200).send({ message: 'Deleted item.' });
}));
exports.default = routes;
