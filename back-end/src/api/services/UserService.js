const md5 = require('md5');
const { User } = require('../../database/models');

const getUserByEmail = async (email) => {
  const emailExists = await User.findOne({ where: { email } });
  return emailExists;
};

const userRegisterService = async (user) => {
  const { name, email, password } = user;
  const hashedPassword = md5(password);
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) { 
    return { status: 409, data: { message: 'this email has already been registered' } }; 
  }
  const newUser = await User.create({ name, email, password: hashedPassword });
  if (!newUser) {
    return { status: 400, data: { message: 'Something get wrong' } };
  } 
  return { status: 201, data: newUser };
};

module.exports = { getUserByEmail, userRegisterService };
