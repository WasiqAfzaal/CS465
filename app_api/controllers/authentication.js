const { generateJwt } = require('../config/auth');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  if (email === 'admin@travlr.com' && password === 'password123') {
    const user = {
      email: 'admin@travlr.com',
      name: 'Travlr Admin'
    };

    const token = generateJwt(user);

    return res.status(200).json({
      token,
      user
    });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = {
  login
};