'use strict';

const path = require('path');
const pwd = path.join(__dirname, '..', '/.env');
require('dotenv').config({path: pwd});

const seneca = require('seneca')();
const database = require('./lib/database');


// select desired transport method
const transportMethod = process.env['SENECA_TRANSPORT_METHOD'] || 'rabbitmq';
const patternPin = 'role:reporter';

// init database and then seneca and expose functions
database.connect()
    .then(() => {
        seneca
            //.use(transportMethod + '-transport')
            .add(patternPin + ',cmd:report', (m, n) => {
                n(null, m);
            })
            .listen({type: 'tcp', port: 7003, pin: patternPin});
    });
