const { login } = require('../services/UserService');

const UseController = async(req, res) => {
    try {
        const answer = await login(req.body);
        return res.status(200).json(answer);
    } catch (e) {
        return res.status(500).json(e.message);
    }
};

module.exports = {UseController};
