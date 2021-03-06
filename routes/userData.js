const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const checkObjectId = require('../middleware/checkObjectId');

const UserData = require('../models/UserData');

// @route   POST api/userdata
// @desc    Create user data storage
// @access  Private
router.post('/', auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userDataFields = {
        userId: req.user.id,
        notes: [],
        links: [],
        videos: []
    }

    try {
        const newDataStorage = new UserData(userDataFields);
        const dataStorage = await newDataStorage.save();

        res.json(dataStorage);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/userdata/:id
// @desc    Get user data storage
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const data = await UserData.findOne({ userId: req.user.id});
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

// @route   PUT api/userdata/note
// @desc    Create note
// @access  Private
router.put('/note', [
    auth,
    [
        check('title', 'Title is required').not().isEmpty(),
        check('content', 'Content is required').not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content } = req.body;

    const newNote = { title, content };
    try {
        const userDataStorage = await UserData.findOne({ userId: req.user.id });

        userDataStorage.notes.unshift(newNote);
        await userDataStorage.save();

        res.json(userDataStorage);
    } catch (error) {
        res.status(500).send('Server error');
    }
})

// @route   DELETE api/userdata/note:id
// @desc    Delete note
// @access  Private
router.delete('/note/:id', auth, async (req, res) => {
    try {
        const userDataStorage = await UserData.findOne({ userId: req.user.id });

        userDataStorage.notes = userDataStorage.notes.filter(note => note._id.toString() !== req.params.id);
        await userDataStorage.save();
        return res.status(200).json(userDataStorage);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
})

// @route   PUT api/userdata/link
// @desc    Create new link
// @access  Private
router.put('/link', [
    auth,
    [
        check('link', 'Link is required').not().isEmpty(),
        check('title', 'Title is required').not().isEmpty(),
        check('category', 'Category is required').not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { link, title, category } = req.body;
    const newSite = { link, title, category };

    try {
        const userDataStorage = await UserData.findOne({ userId: req.user.id });

        userDataStorage.links.unshift(newSite);
        await userDataStorage.save();

        res.json(userDataStorage);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
})

// @route   DELETE api/userdata/link:id
// @desc    Delete saved sites
// @access  Private
router.delete('/link/:id', auth, async (req, res) => {
    try {
        const userDataStorage = await UserData.findOne({ userId: req.user.id });

        userDataStorage.links = userDataStorage.links.filter(link => link._id.toString() !== req.params.id);
        await userDataStorage.save();
        return res.status(200).json(userDataStorage);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
})

// @route   PUT api/userdata/link
// @desc    Create new link
// @access  Private
router.put('/video', [
    auth,
    [
        check('link', 'Link is required').not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { link } = req.body;
    const newSite = { link };

    try {
        const userDataStorage = await UserData.findOne({ userId: req.user.id });

        userDataStorage.videos.unshift(newSite);
        await userDataStorage.save();

        res.json(userDataStorage);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
})

// @route   DELETE api/userdata/video:id
// @desc    Delete saved video
// @access  Private
router.delete('/video/:id', auth, async (req, res) => {
    try {
        const userDataStorage = await UserData.findOne({ userId: req.user.id });

        userDataStorage.videos = userDataStorage.videos.filter(video => video._id.toString() !== req.params.id);
        await userDataStorage.save();
        return res.status(200).json(userDataStorage);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;