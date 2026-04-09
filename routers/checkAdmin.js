

const express = require('express');

const router  = express.Router();

const {checkAdmin} = require('../controllers/admincontroller');

router.route('/check').get(checkAdmin);

module.exports = router;