'use strict';

const path = require('path');
const pwd = path.join(__dirname, '..', '/.env');
require('dotenv').config({path: pwd});

const seneca = require('seneca')();
const trainer = require('./lib/trainer');
const modules = {
    location: require('./lib/location')
};

let getFunctionByRoleAndCmd;
const noop = () => {
    console.log('info: no implementation found');
};

// select desired transport method
const transportMethod = process.env['SENECA_TRANSPORT_METHOD'] || 'rabbitmq';
const patternPin = 'role:reporter';

// init database and then seneca and expose functions
trainer.init()
    .then(() => {
        seneca
        //.use(transportMethod + '-transport')
            .add(patternPin + ',cmd:report', (m, n) => {
                n(null, {});
                getFunctionByRoleAndCmd(m.origin_role, m.origin_cmd)(m.data);
            })
            .add(patternPin + ',cmd:recommendationForPerson', trainer.recommendationForPerson)
            .add(patternPin + ',cmd:recommendationForThing', trainer.recommendationForThing)
            .add(patternPin + ',cmd:trainMultiple', trainer.trainMultiple)

            .listen({type: 'tcp', port: 7010, pin: patternPin});
    });


getFunctionByRoleAndCmd = (role, cmd) => {
    console.log('incomming report for role ', role, 'with cmd', cmd);
    return modules[role] && modules[role][cmd] ? modules[role][cmd] : noop;
};