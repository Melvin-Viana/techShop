const generateToken = require('../middleware/generateToken');

module.exports = async (req, res, loginController, User) => {
    try {
        const data = await loginController(User, req.body.username, req.body.password);
        const token = generateToken(data);
        res.json(token);
    } catch (e) {
       res.send(e);
    }       
}