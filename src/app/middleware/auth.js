const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const logger = require('../../helper/logger');
const { decode } = require('querystring');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não enviado' });
  }

  const parts = authHeader.split(' ');

  if (!parts.length === 2) {
    return res.status(401).json({ error: 'Token com formato inválido' });
  }

  const [scheme, token] = parts;

  if (!scheme === 'Bearer') {
    return res.status(401).json({ error: 'Token sem o prefixo Bearer' });
  }

  try {
    const tokenDecoded = await promisify(jwt.verify)(
      token,
      process.env.TOKEN_KEY
    );
    logger.info(tokenDecoded.id);
    req.id =tokenDecoded.id
    return next();
  } catch (e) {
    logger.error(e);
    return res.status(401).json({ error: 'Token inválido' });
  }
};
