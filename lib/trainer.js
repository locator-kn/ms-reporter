'use strict';

const g = require('ger');
const ger_rethinkdb_esm = require('ger_rethinkdb_esm');
const r = new ger_rethinkdb_esm.r();
const esm = new ger_rethinkdb_esm.esm({r: r});
const ger = new g.GER(esm);

const fns = {};

fns.train = (message, next) => {
    //ger.event(namespace, person, action, thing, dates);
};

fns.init = () => {
    return ger.initialize_namespace('locations')
        .then(() => {
            console.log('namespace locations initialized');
        });
};

module.exports = fns;