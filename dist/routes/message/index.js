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
exports.post = exports.get = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const prisma_paginate_1 = __importDefault(require("prisma-paginate"));
const xprisma = prisma_1.default.$extends(prisma_paginate_1.default);
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 10, status, type } = req.query;
    try {
        const data = yield xprisma.message.paginate({
            limit: Number(limit),
            page: Number(page),
            skip: (Number(page) - 1) * Number(limit),
            where: {
                // status: isInclude(status, ["pending", "sent", "delivered"]),
                // @ts-ignore
                status, type
            }
        });
        return res.json(data);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error, result: [] });
    }
});
exports.get = get;
// function isInclude (data: any, from: any[]) {
//   return from.includes(data) ? data : undefined
// }
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.message.create({
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
        console.log(error);
        return res.status(500).json({ error, result: null });
    }
});
exports.post = post;
//# sourceMappingURL=index.js.map