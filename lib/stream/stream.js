'use strict';
const stream = require('getstream');

const client = stream.connect(process.env['STREAM_KEY'], process.env['STREAM_SECRET'], process.env['STREAM_PROJECT'], {location: 'eu-central'});

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

/**
 * adds a new activity.
 * @example
 * // "Michael added a impression to location Kantine"
 * fns.addActivity(michaelsUserId, 'addimpression', impressionId, kantineId);
 *
 * @param actor {ObjectID} - id of the acting user
 * @param verb {string} - the thing that happened (eg. like)
 * @param object {ObjectID} - the id of concerning object (eg. impressionid, another user, locationId, etc.)
 * @param targetId {ObjectID} - TODO
 */
fns.addActivity = (actor, verb, object, targetId) => {
    // TODO: find out how generic we can work here
    let activity = {'actor': actor, 'verb':verb, 'object': object, 'target': targetId};
    console.log(activity);
};


module.exports = fns;