import config from '../config/config.js';
import { connectMongo } from '../utils/dbConnection.js';

let productModel;
let cartModel;
let usersModel;

switch (config.persistence) {
  case 'MONGO':
    console.log('Mongo connected');
    connectMongo();

    const { default: cartsMongo } = await import('./mongo/carts.model.js');
    const { default: productsMongo } = await import('./mongo/products.model.js');
    const { default: userModel } = await import('./mongo/users.model.js');

    cartModel = cartsMongo;
    productModel = productsMongo;
    usersModel = userModel;

    break;

  case 'MEMORY':
    console.log('Persistence with Memory');
    const { default: CartsMemory } = await import('./memory/cartManager.js');
    const { default: ProductsMemory } = await import('./memory/productManager.js');

    cartModel = CartsMemory;
    productModel = ProductsMemory;

    break;
  default:
    break;
}

export { cartModel, productModel, usersModel };
