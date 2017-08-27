/**
 * CourseController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new': function (req, res) {
    res.view();
  },

  create: function (req, res, next) {
    Course.create(req.params.all(), function courseCreated(err, course) {
      if (err) return next(err);

      res.redirect('/course/show/' + course.id);
    });
  },

  //for rounds
  'round': function (req, res) {
    res.view();
  },

  //for rounds
  make: function (req, res, next) {
    Round.make(req.params.all(), function roundCreated(err, round) {
      if (err) return next(err);

      res.redirect('/round/show/' + round.id);
    });
  },

  show: function (req, res, next) {
    Course.findOne(req.param('id')).populateAll().exec(function foundCourse(err, course) {
      if (err) return next(err);

      if (!course) return next();

      res.view({
        course: course
      });
    });
  },


  index: function (req, res, next) {
    Course.find(function foundCourses(err, courses) {
      if (err) return next(err);

      res.view({
        courses: courses
      });
    });
  },

  edit: function (req, res, next) {
    Course.findOne(req.param('id'), function foundCourse(err, course) {
      if (err) return next(err);

      if (!course) return next();

      res.view({
        course: course
      });
    });
  },

  update: function (req, res, next) {
    Course.update(req.param('id'), req.params.all(), function courseUpdated(err) {
      if (err) {
        return res.redirect('/course/edit/' + req.param('id'));
      }

      res.redirect('/course/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {
    Course.destroy(req.param('id')).exec(function() {
      res.redirect('/course/');
    });
  }

};

