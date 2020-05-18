const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

// @route   GET api/notes
// @desc    TEST
// @access  Public
router.get('/', (req, res) => res.send('notes route'));

module.exports = router;