const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
// const express = require('express');

// import { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = readFileSync('./jwt.evaluation.key', 'utf-8');
const INVALID_TOKEN = 'Expired or invalid token';
const TOKEN_NOT_FOUND = 'Token not found';

const verifyToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: TOKEN_NOT_FOUND });
  }
  try {
    const data = jwt.verify(authorization, JWT_SECRET);
    const { id } = data;
    req.body.id = id;
    next();
  } catch (error) {
    return res.status(401).json({ message: INVALID_TOKEN });
  }
};

const sign = (payload, tokenDuration = '24h') =>
  jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: tokenDuration,
  });

const decodeToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};

module.exports = {
  verifyToken,
  sign,
  decodeToken,
};
