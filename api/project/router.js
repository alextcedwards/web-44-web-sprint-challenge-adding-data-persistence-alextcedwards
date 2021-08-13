// build your `/api/projects` router here
const router = require('express').Router();
const Projects = require('./model');

// [GET] /api/projects
router.get('/', async (req, res, next) => {
    await Projects.get()
        .then(projects => {
            res.status(200).json(convertToBool(projects))
        })
        .catch(next)
});

// [POST] /api/projects
router.post('/', (req, res, next) => {
    Projects.create(req.body)
    .then(project => {
        res.status(201).json(convertToBool(project)[0]);
    })
    .catch(next);
});

// convert integer to boolean
const convertToBool = projects => {
    return projects.map(project => ({
        ...project,
        project_completed: project.project_completed ? true: false
    }));
};

module.exports = router;