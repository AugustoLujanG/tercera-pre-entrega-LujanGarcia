import { cartModel } from '../DAO/models/carts.model.js';

class CartService {
  async getAllCarts() {
    return cartModel.getAllCarts();
  }

  async createCart(products) {
    return cartModel.createCart(products);
  }

  async getCart(cartId) {
    return cartModel.getCart(cartId);
  }

  async addToCart(cartId, products) {
    return cartModel.addToCart(cartId, products);
  }

  async addProductToCart(cartId, productId) {
    return cartModel.addProductToCart(cartId, productId);
  }

  async deleteProduct(cartId, productId) {
    return cartModel.deleteProduct(cartId, productId);
  }

  async deleteCart(cartId) {
    return cartModel.deleteCart(cartId);
  }
}

export const cartService = new CartService();
