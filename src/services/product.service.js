import { productModel } from '../DAO/models/products.model.js';
class ProductService {
  async getAll(queryParams) {
    return productModel.getAll(queryParams);
  }

  async getJson(queryParams) {
    return productModel.getJson(queryParams);
  }

  async getAllProducts() {
    return productModel.getAllProducts();
  }

  async getById(productId) {
    return productModel.getById(productId);
  }

  async createProduct(newProd) {
    return productModel.createProduct(newProd);
  }

  async deleteProduct(productId) {
    return productModel.deleteProduct(productId);
  }
}

export const productService = new ProductService();
