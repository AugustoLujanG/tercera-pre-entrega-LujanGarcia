import express from 'express';
import { productsController } from '../controllers/products.controller.js';
import { checkUser } from '../middlewares/auth.js';

export const productsApiRouter = express.Router();

// GET con limit

productsApiRouter.get('/', checkUser, productsController.getJson);

// GET por ID

productsApiRouter.get('/:pid', checkUser, productsController.getJsonById);
