const { User } = require('../../database/models');

const getUserByEmail = async (email) => {
  const emailExists = await User.findOne({ where: { email } });
  return emailExists;
};

module.exports = { getUserByEmail };
