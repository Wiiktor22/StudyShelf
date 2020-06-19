const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    notes: [
        {
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    links: [
        {
            title: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }

        }
    ],
    videos: [
        {
            link: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

module.exports = UserData = mongoose.model('userdata', UserDataSchema);