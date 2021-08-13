// build your `Resource` model here
const db = require('../../data/dbConfig');

const get = () => {
    return db('resources');
};

const create = resource => {
    return db('resources').insert(resource)
        .then(([resource_id]) => {
            return db('resources').where({ resource_id }).first();
        });
};

module.exports = { get, create }