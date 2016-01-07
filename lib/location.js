'use strict';

const db = require('./database');

const fns = {};

fns.nearby = (message, next) => {
    next(null, {});
    console.log(message);
};

module.exports = fns;