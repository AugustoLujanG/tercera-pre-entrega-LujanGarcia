import { cartMongoose } from './mongoose/carts.mongoose.js';
import { productMongoose } from './mongoose/products.mongoose.js';

class CartModel {
  async getAllCarts() {
    try {
      const carts = await cartMongoose.find({}).exec();
      return carts;
    } catch (error) {
      throw new Error('Error al obtener los carritos');
    }
  }

  async getCart(cartId) {
    try {
      const cart = await cartMongoose.findOne({ _id: cartId }).exec();

      return cart;
    } catch (error) {
      throw new Error('Error al obtener el carrito');
    }
  }

  async createCart(products) {
    try {
      const cart = await cartMongoose.create(products);
      const cartId = cart.toObject();
      const cartIdString = cartId._id.toString();

      return cartIdString;
    } catch (error) {
      throw new Error('Error al crear el carrito');
    }
  }

  async addToCart(cartId, products) {
    try {
      const cart = await cartMongoose.findByIdAndUpdate(cartId, { products }, { new: true }).exec();

      return cart;
    } catch (error) {
      throw new Error('Error al actualizar el carrito');
    }
  }

  async addProductToCart(cartId, productId) {
    try {
      const cart = await cartMongoose.findById(cartId).exec();
      const product = await productMongoose.findById(productId).exec();

      if (!cart) {
        throw new Error('Cart not found');
      }
      if (!product) {
        throw new Error('Product not found');
      }

      const productIndex = cart.products.findIndex(p => {
        const product = p.product.toObject();
        const productString = product._id.toString();

        return productString === productId;
      });

      if (productIndex === -1) {
        cart.products.push({ product: product._id, quantity: 1 });
        await cart.save();
      } else {
        cart.products[productIndex].quantity += 1;
        await cart.save();
      }

      return cart;
    } catch (error) {
      throw new Error('Error al agregar producto');
    }
  }

  async deleteProduct(cartId, productId) {
    try {
      const cart = await cartMongoose.findById(cartId).exec();
      const productIndex = cart.products.findIndex(p => {
        const product = p.product.toObject();
        const productString = product._id.toString();

        return productString === productId;
      });

      if (productIndex === -1) {
        throw new Error('Product not found in cart');
      }

      cart.products.splice(productIndex, 1);
      await cart.save();

      return cart;
    } catch (error) {
      throw new Error('Error removing product from cart');
    }
  }

  async deleteCart(cartId) {
    try {
      const cart = await cartMongoose.findById(cartId).exec();
      cart.products = [];
      await cart.save();
    } catch (error) {
      throw new Error('Error clearing cart');
    }
  }
}
export const cartModel = new CartModel();
