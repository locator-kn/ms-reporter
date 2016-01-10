'use strict';

const trainer = require('./trainer');

const fns = {};

fns.locationById = (message) => {
    console.log('uff, training', message);
    let testUsers = ['michi', 'timo', 'steffen'];
    trainer.train('locations', testUsers[Math.floor(Math.random() * (3 - 0))], 'likes', message.locationId, '2020-06-06');
};

module.exports = fns;