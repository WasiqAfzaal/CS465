const jwt = require('jsonwebtoken');

const secret = 'MY_SUPER_SECRET_TRAVLR_KEY';
const expiresIn = '1h';

const generateJwt = (user) => {
  return jwt.sign(
    {
      email: user.email,
      name: user.name
    },
    secret,
    { expiresIn }
  );
};

module.exports = {
  secret,
  generateJwt
};