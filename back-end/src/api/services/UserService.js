const { User } = require('../../database/models')

const login = async ({ email, password }) => {
  const emailExists = await User.findOne({ email: email});
  if(!emailExists) throw new Error('User does not exist')
  return emailExists;
};
 export default login;
