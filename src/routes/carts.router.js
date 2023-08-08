import express from 'express';
import { cartsController } from '../controllers/carts.controller.js';
import { checkUser } from '../middlewares/auth.js';

export const cartsRouter = express.Router();

// GET /:cid

cartsRouter.get('/:cid', checkUser, cartsController.getCart);

// POST

cartsRouter.post('/', checkUser, cartsController.createCart);

// POST /:cid

cartsRouter.post('/:cid', checkUser, cartsController.addToCart);

// PUT /:cid/product/:pid

cartsRouter.put('/:cid/product/:pid', checkUser, cartsController.addProductToCart);

// DELETE /:cid/product/:pid

cartsRouter.delete('/:cid/product/:pid', checkUser, cartsController.deleteProduct);

// DELETE /:cid

cartsRouter.delete('/:cid', checkUser, cartsController.deleteCart);
