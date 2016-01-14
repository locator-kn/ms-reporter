'use strict';

const trainer = require('./trainer');

const fns = {};

fns.locationById = (message) => {
    console.log('uff, training', message);
    return;
    trainer.train('locations', message.requesting_user_id, 'likes', message.locationId, new Date('2020-06-06'));
};

module.exports = fns;