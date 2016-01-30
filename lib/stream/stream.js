'use strict';
const stream = require('getstream');

const client = stream.connect(process.env['STREAM_KEY'], process.env['STREAM_SECRET'], process.env['STREAM_PROJECT'], { location: 'eu-central' });

console.log(client);

const fns = {};

fns.getClient = () => {

};

module.exports = fns;