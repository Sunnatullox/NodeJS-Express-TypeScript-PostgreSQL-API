"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const index_1 = __importDefault(require("./routes/index"));
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(index_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`);
});
