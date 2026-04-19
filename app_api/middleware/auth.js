const jwt = require('jsonwebtoken');
const { secret } = require('../config/auth');

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: missing token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secret);
    req.auth = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: invalid token' });
  }
};

module.exports = auth;