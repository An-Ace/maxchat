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
exports.del = exports.put = exports.get = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.message.findFirst({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json({ result });
    }
    catch (error) {
        return res.status(500).json({ error, result: null });
    }
});
exports.get = get;
const put = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.message.update({
            where: {
                id: Number(req.params.id)
            },
            /**
              {
                "type": "text" | "image",
                "from": Phone Number,
                "status": "pending" | "sent" | "delivered",
                "text": Chat Messange,
                "attacement": Image URL,
                "meta": {"header":{"text":"Lorem Ipsum"},"body":[{"index":1,"type":"text","text":"oke"},{"index":2,"type":"image","attachmentUrl":"oke"},{"index":3,"type":"text","text":"asdf"}]},
                "date": Date
              }
            */
            data: req.body
        });
        return res.json({ result });
    }
    catch (error) {
        return res.status(500).json({ error, result: null });
    }
});
exports.put = put;
const del = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.message.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json({ result });
    }
    catch (error) {
        return res.json({ error, result: null });
    }
});
exports.del = del;
//# sourceMappingURL=%5Bid%5D.js.map