const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');


class CourseController {
    // [GET]courses/:slug
    show(req, res, next) {

        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);

    }
    // [GET]courses/:create
    create(req, res, next) {

        res.render('courses/create');

    }

    // [POST]courses/store
    store(req, res, next) {
        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;

        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => {

                next(error);
            });
    }

    // [GET]courses/:id/edit
    edit(req, res, next) {

        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);

    }

    // [PUT]courses/:id
    update(req, res, next) {

        // res.json(req.body);
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE]courses/:id
    delete(req, res, next) {
 
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);

    }
    // [DELETE]courses/:id/force
    forceDelete(req, res, next){
        Course.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next){

        Course.restore({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
        // Course.findWithDeleted({ deleted: true}).lean()
        // .then((courses) =>{
        //     res.render('me/trash-courses', {
        //         title: "delete",
        //         courses: courses,
        //     })
        // })
        // .catch(next);

    }


}

module.exports = new CourseController();
