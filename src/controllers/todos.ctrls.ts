import { RequestHandler } from 'express';

/* == Prisma == */
import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const index: RequestHandler = async (req, res) => {
  try {
    const todos = await db.todo.findMany();
    res.status(200).json({
      todos
    });
  } catch (error) {
    console.log(error);
  }
};


const create: RequestHandler = async (req, res) => {
  try {
    const todo = await db.todo.create({
      data: req.body,
    });

    res.status(201).json({
      todo
    });
  } catch (error) {
    console.log(error);
  }
}

const show: RequestHandler = async (req, res) => {
  try {
    const todo = await db.todo.findUnique({
      where: {
        id: Number(req.params.id)
      }
    });

    res.status(200).json({
      todo
    });
  } catch (error) {
    console.log(error);
  }
}

const update: RequestHandler = async (req, res) => {
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
  } catch (error) {
    console.log(error);
  }
}

const destroy: RequestHandler = async (req, res) => {
  try {
    const todo = await db.todo.delete({
      where: {
        id: Number(req.params.id)
      },
    });

    res.status(200).json({
      todo
    });
  } catch (error) {
    console.log(error);
  }
}

export default {
  index,
  create,
  show,
  update,
  destroy
}
