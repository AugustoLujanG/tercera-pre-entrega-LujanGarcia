import { cartModel } from '../DAO/factory.js';

const cart = new cartModel();
class CartService {
  async getAllCarts() {
    return cart.getAllCarts();
  }

  async createCart(products) {
    return cart.createCart(products);
  }

  async getCart(cartId) {
    return cart.getCart(cartId);
  }

  async addToCart(cartId, products) {
    return cart.addToCart(cartId, products);
  }

  async addProductToCart(cartId, productId) {
    return cart.addProductToCart(cartId, productId);
  }

  async deleteProduct(cartId, productId) {
    return cart.deleteProduct(cartId, productId);
  }

  async deleteCart(cartId) {
    return cart.deleteCart(cartId);
  }
}

export const cartService = new CartService();
