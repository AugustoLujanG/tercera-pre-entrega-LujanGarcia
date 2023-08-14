import { usersModel } from '../DAO/factory.js';

const users = new usersModel();

class UserService {
  async getUser(username) {
    return users.getUser(username);
  }

  async createUser(newUser) {
    return users.createUser(newUser);
  }

  async getUserById(id) {
    return users.getUserById(id);
  }
}

export const userService = new UserService();
