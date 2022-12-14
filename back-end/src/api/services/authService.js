const md5 = require('md5');
const { getUserByEmail } = require('./UserService');
const { sign } = require('../utils/jwt');

const authenticateUser = async (email, password) => {
  const userData = await getUserByEmail(email);
  if (!userData) {
    return {
      status: 404,
      data: { message: 'User does not exist' },
    };
  }
  const hashedInputedPassword = md5(password);
  if (hashedInputedPassword === userData.dataValues.password) {
    const token = sign({ userData });
  return {
    status: 200, data: { userData, token },
  };
}
  return {
    status: 401,
    data: { message: 'Invalid password' },
  };
};

module.exports = { authenticateUser };
