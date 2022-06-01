const { User } = require('../../database/models')

const login = async ({ email }) => {
  const emailExists = await User.findOne({ where: { email } });
  console.log(emailExists);
  if(!emailExists) throw new Error('User does not exist')
  return emailExists;
};

module.exports = { login };
