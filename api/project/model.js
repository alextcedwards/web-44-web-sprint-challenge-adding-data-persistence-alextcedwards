// build your `Project` model here
const db = require('../../data/dbConfig');

const get = () => {
    return db('projects');
};

const create = project => {
    return db('projects').insert(project)
        .then(([project_id]) => {
            return db('projects').where({ project_id });
        });
};

module.exports = { get, create };