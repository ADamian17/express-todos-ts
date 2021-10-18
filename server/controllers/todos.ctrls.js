"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* == Prisma == */
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
const index = async (req, res) => {
    try {
        const todos = await db.todo.findMany();
        res.status(200).json({
            todos
        });
    }
    catch (error) {
        console.log(error);
    }
};
const create = async (req, res) => {
    try {
        const todo = await db.todo.create({
            data: req.body,
        });
        res.status(201).json({
            todo
        });
    }
    catch (error) {
        console.log(error);
    }
};
const show = async (req, res) => {
    try {
        const todo = await db.todo.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json({
            todo
        });
    }
    catch (error) {
        console.log(error);
    }
};
const update = async (req, res) => {
    try {
        const todo = await db.todo.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        res.status(200).json({
            todo
        });
    }
    catch (error) {
        console.log(error);
    }
};
const destroy = async (req, res) => {
    try {
        const todo = await db.todo.delete({
            where: {
                id: Number(req.params.id)
            },
        });
        res.status(200).json({
            todo
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = {
    index,
    create,
    show,
    update,
    destroy
};
