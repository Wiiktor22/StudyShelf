const express = require('express');
const router = express.Router();

// @route   GET api/notes
// @desc    TEST
// @access  Public
router.get('/', (req, res) => res.send('notes route'));

module.exports = router;