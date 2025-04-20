const User = require("../models/User");
const { roles } = require("../consts");

class UserFactory {
  static createUser(role, name, email) {
    const validRoles = [roles.ADMIN, roles.USER, roles.GUEST];
    if (!validRoles.includes(role)) {
      throw new Error("Invalid user type");
    }

    return new User({ name, email, role });
  }
}

module.exports = UserFactory;
