"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
router.get('/', async (req, res) => {
    try {
        const todos = await db.todo.findMany();
        res.status(200).json({
            todos
        });
    }
    catch (error) {
        console.log(error);
    }
});
router.post('/', async (req, res) => {
    try {
        const todo = await db.todo.create({
            data: req.body,
        });
        res.status(200).json({
            todo
        });
    }
    catch (error) {
        console.log(error);
    }
});
router.get('/:id');
router.put('/:id');
router.delete('/:id');
exports.default = router;
