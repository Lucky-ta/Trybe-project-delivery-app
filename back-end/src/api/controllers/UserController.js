const { authenticateUser } = require('../services/authService');
const { userRegisterService } = require('../services/UserService');

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authenticateUser(email, password);
        return res.status(result.status).json(result.data);
    } catch (e) {
        return res.status(500).json(e.message);
    }
};

const userRegister = async (req, res) => {
  try {
    const result = await userRegisterService(req.body);
    return res.status(result.status).json(result.data);
} catch (e) {
    return res.status(500).json(e.message);
}
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await getUserById(id);
        return res.status(result.status).json(result.data);
    } catch (e) {
        return res.status(500).json(e.message);
    }
  };

module.exports = { userLogin, userRegister, getUserById };
