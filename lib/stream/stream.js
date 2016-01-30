'use strict';
const stream = require('getstream');

const client = stream.connect(process.env['STREAM_KEY'], process.env['STREAM_SECRET'], process.env['STREAM_PROJECT'], { location: 'eu-central' });

console.log(client);

const fns = {};

fns.getClient = () => {

};


/**
 *
 * @param entityType {string} - eg. user, location, etc.
 * @param entityId {ObjectID} - id of the object which stream should be followed
 * @param actor {ObjectID} - id of the acting user
 */
fns.follow = (entityType, entityId, actor) => {
    console.log('user', actor, 'follows', entityType, entityId);
};

module.exports = fns;