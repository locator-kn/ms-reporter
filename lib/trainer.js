'use strict';

const g = require('ger');
const ger_rethinkdb_esm = require('ger_rethinkdb_esm');
const r = new ger_rethinkdb_esm.r();
const esm = new ger_rethinkdb_esm.esm({r: r});
const ger = new g.GER(esm);

const fns = {};


fns.train = (namespace, person, action, thing, dates) => {
    ger.events([{
        namespace: 'locations',
        person: person,
        action: action,
        thing: thing,
        expires_at: dates
    }]).then(function() {
            console.log(arguments);
        });
    //fns.getTest();
};

fns.trainMultiple = multipleEvents => {
    ger.events(multipleEvents);
};


fns.getTest = () => {
    ger.recommendations_for_person('locations', 'timo', {actions: {view: 1, likes: 1}})
        .then((res) => {
            console.log(JSON.stringify(res));
        });
};

fns.init = () => {
    return ger.initialize_namespace('locations')
        .then(() => {

            //ger.destroy_namespace('locations')
            console.log('namespace locations initialized');
        });
};

module.exports = fns;