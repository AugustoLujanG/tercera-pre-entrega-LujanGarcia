import express from 'express';
import { productsController } from '../controllers/products.controller.js';
import { checkUser } from '../middlewares/auth.js';

export const products = express.Router();

// GET con limit

products.get('/', checkUser, productsController.getAll);

// GET por ID

products.get('/:pid', checkUser, productsController.getById);
