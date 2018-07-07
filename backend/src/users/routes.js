const router = require('express').Router();
const controller = require('./controller');

router.get('/:id', controller.get);

module.exports = router;