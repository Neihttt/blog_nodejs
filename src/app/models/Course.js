const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '', maxLength: 255 },
    description: { type: String, default: '', maxLength: 255 },
    image: { type: String, default: '', maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    UpdateAt: { type: Date, default: Date.now },
    
});

module.exports = mongoose.model('Course', Course);