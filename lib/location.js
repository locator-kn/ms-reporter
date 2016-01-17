'use strict';

const trainer = require('./trainer');

const fns = {};

let getExpireDate = (years) => {
    return new Date(Date.now() + 31536000 * 1000 * years || 1);
};

fns.locationById = (message) => {
    console.log('uff, training', message);
    trainer.train('locations', message.requesting_user_id, 'views', message.data.locationId, getExpireDate(2));
};

fns.addimpression = (message) => {
    console.log('uff, training', message);
    trainer.train('locations', message.requesting_user_id, 'addimpression', message.data.locationId, getExpireDate(4));
};


fns.toggleFavor = (message) => {
    console.log('uff, training', message);
    trainer.train('locations', message.requesting_user_id, 'likes', message.data.locationId, getExpireDate(4));
};

module.exports = fns;