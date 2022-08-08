const router = require('express').Router();

const questionRoutes = require('./questionRoutes.js');

router.use('/questions', questionRoutes);

module.exports = router;