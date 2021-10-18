"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* == External Modules == */
const express_1 = __importDefault(require("express"));
/* == Internal Modules == */
const routes_1 = require("./routes");
/* == PORT == */
const PORT = 3004;
/* App instance */
const app = express_1.default();
/* == middleware == */
app.use(express_1.default.json());
app.use('/todos', routes_1.todos);
/* server binding */
app.listen(PORT, () => console.log(`listing at port ${PORT}`));
