// build your `/api/tasks` router here
const router = require('express').Router();
const Tasks = require('./model');

//  [GET] /api/tasks
router.get('/', (req, res, next) => {
    Tasks.get()
        .then(tasks => {
            res.status(200).json(convertToBool(tasks));
        })
        .catch(next)
});

// [POST] /api/tasks
router.post('/', (req, res, next) => {
    Tasks.create(req.body)
        .then(task => {
            res.status(201).json(convertToBool(task)[0])
        })
        .catch(next)
})

// convert integer to boolean
const convertToBool = tasks => {
    return tasks.map(task => ({
        ...task,
        task_completed: task.task_completed ? true : false
    }));
};

module.exports = router;