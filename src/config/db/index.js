const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/blog_nodejs');
        console.log('Connect successfully to database')

    } catch (error) {
        console.log('Connect fail')

    }

}

module.exports = { connect };