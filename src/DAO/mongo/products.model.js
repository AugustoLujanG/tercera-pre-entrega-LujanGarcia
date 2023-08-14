import { productMongoose } from './models/products.mongoose.js';

export default class ProductModel {
  async getAll(queryParams) {
    const { limit = 10, page = 1, sort, title, category } = queryParams;
    const filter = {};

    if (title || category) {
      filter.$or = [{ category: category }, { title: title }];
    }

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: sort === 'desc' ? '-price' : 'price',
    };

    const products = await productMongoose.paginate(filter, options);

    const paginatedProducts = products.docs;

    const modifiedProducts = paginatedProducts.map(product => {
      const modifiedProducts = product.toObject();
      modifiedProducts._id = product._id.toString();

      return modifiedProducts;
    });

    const completeProduct = { products, modifiedProducts };

    return completeProduct;
  }

  async getById(productId) {
    const product = await productMongoose.findOne({ _id: productId }).exec();
    const modifiedProduct = product.toObject();

    return modifiedProduct;
  }

  async getJson(queryParams) {
    const { limit = 10, page = 1, sort, title, category } = queryParams;
    const filter = {};

    if (title || category) {
      filter.$or = [{ category: category }, { title: title }];
    }

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: sort === 'desc' ? '-price' : 'price',
    };

    const result = await productMongoose.paginate(filter, options);

    return {
      status: 'success',
      payload: result.docs,
      totalPages: result.totalPages,
      prevPage: result.hasPrevPage ? result.prevPage : null,
      nextPage: result.hasNextPage ? result.nextPage : null,
      page: result.page,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevLink: result.hasPrevPage ? `/api/products?limit=${limit}&page=${result.prevPage}` : null,
      nextLink: result.hasNextPage ? `/api/products?limit=${limit}&page=${result.nextPage}` : null,
    };
  }

  async getAllProducts() {
    const products = await productMongoose.find({}).exec();

    const modifiedProducts = products.map(product => {
      const modifiedProducts = product.toObject();
      modifiedProducts._id = product._id.toString();

      return modifiedProducts;
    });

    return modifiedProducts;
  }

  async createProduct(newProd) {
    return await productMongoose.create(newProd);
  }

  async deleteProduct(productId) {
    return await productMongoose.deleteOne({ _id: productId }).exec();
  }
}
