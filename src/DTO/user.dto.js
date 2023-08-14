export default class UserDTO {
  constructor(user) {
    this.age = user.id;
    this.email = user.email;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.cartId = user.cartID;
    this.role = user.role;
  }
}
