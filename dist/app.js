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
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_file_routing_1 = require("express-file-routing");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173'
}));
app.use(express_1.default.json());
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        app.use("/api", yield (0, express_file_routing_1.router)({
            directory: path_1.default.join(__dirname, "routes"),
        }));
        app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
        app.use("/", (req, res) => {
            res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
        });
    });
})();
app.listen(3000);
//# sourceMappingURL=app.js.map