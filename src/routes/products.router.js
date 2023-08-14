import express from 'express';
import { productsController } from '../controllers/products.controller.js';
import { checkUser } from '../middlewares/auth.js';

export const productsRouter = express.Router();

// GET con limit

productsRouter.get('/', checkUser, productsController.getAll);

// GET por ID

productsRouter.get('/:pid', checkUser, productsController.getById);
