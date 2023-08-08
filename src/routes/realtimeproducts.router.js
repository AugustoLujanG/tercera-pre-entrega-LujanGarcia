import express from 'express';
import { productsController } from '../controllers/products.controller.js';
import { checkRole } from '../middlewares/auth.js';

export const realTimeProducts = express.Router();

// GET con limit

realTimeProducts.get('/', checkRole, productsController.getAllInRealTime);

// GET por ID

realTimeProducts.get('/:pid', checkRole, productsController.getByIdInRealTime);
