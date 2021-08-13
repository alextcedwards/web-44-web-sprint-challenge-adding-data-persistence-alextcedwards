// build your `/api/resources` router here
const router = require('express').Router();
const Resources = require('./model');

//  [GET] /api/resources
router.get('/', (req, res, next) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(next)
});

// [POST] /api/resources
router.post('/', (req, res, next) => {
    Resources.create(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(next);
});

module.exports = router;