import { productModel } from '../DAO/factory.js';

const products = new productModel();
class ProductService {
  async getAll(queryParams) {
    return products.getAll(queryParams);
  }

  async getJson(queryParams) {
    return products.getJson(queryParams);
  }

  async getAllProducts() {
    return products.getAllProducts();
  }

  async getById(productId) {
    return products.getById(productId);
  }

  async createProduct(newProd) {
    return products.createProduct(newProd);
  }

  async deleteProduct(productId) {
    return products.deleteProduct(productId);
  }
}

export const productService = new ProductService();
