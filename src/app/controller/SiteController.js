const Course = require('../models/Course');



class SiteController {
    // [GET]/news
    async index(req, res, next) {
        Course.find({})
            .then(courses => res.json(courses))
            .catch(next);
    }




    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
