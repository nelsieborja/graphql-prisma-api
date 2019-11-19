const jwt = require('jsonwebtoken');
const APP_SECRET = process.env.APP_SECRET;
const ANONYMOUS = 'Anonymous';

function getUserID(context, allowAnonymous = false) {
  const Authorization = context.request.get('Authorization');

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userID } = jwt.verify(token, APP_SECRET);
    return userID;
  }

  if (allowAnonymous) {
    return ANONYMOUS;
  }

  throw new Error('Not authenticated');
}

function createToken(userID) {
  return jwt.sign({ userID }, APP_SECRET);
}

module.exports = {
  APP_SECRET,
  ANONYMOUS,
  getUserID,
  createToken
};
