/**
 * GolferController
 *
 * @description :: Server-side logic for managing golfers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new': function (req, res) {
    res.view();
  },

  create: function (req, res, next) {
    Golfer.create(req.params.all(), function golferCreated(err, golfer) {
      if (err) return next(err);

      res.redirect('/golfer/show/' + golfer.id);
    });
  },

  show: function (req, res, next) {
    Golfer.findOne(req.param('id')).populateAll().exec(function foundGolfer(err, golfer) {
      if (err) return next(err);

      if (!golfer) return next();

      res.view({
        golfer: golfer
      });


//      function sum() {
//        var total = [0, 1, 2, 3].reduce(function (a, b) {
//          return a + b;
//        }, 0);
//      }
//      golfer.total_score = sum();



   // function to add up all the player's score
      golfer.rounds.forEach(function(rounds) {

        golfer.total_strokes = 0;

        rounds.one_score = rounds.total_score;

        golfer.total_strokes += (rounds.one_score);

        var i = rounds.one_score;

        console.log(golfer.total_strokes);



      })

  });

  },


  index: function (req, res, next) {
    Golfer.find(function foundGolfers(err, golfers) {
      if (err) return next(err);

      res.view({
        golfers: golfers
      });
    });
  },

  edit: function (req, res, next) {
    Golfer.findOne(req.param('id'), function foundGolfer(err, golfer) {
      if (err) return next(err);

      if (!golfer) return next();

      res.view({
        golfer: golfer
      });
    });
  },

  update: function (req, res, next) {
    Golfer.update(req.param('id'), req.params.all(), function golferUpdated(err) {
      if (err) {
        return res.redirect('/golfer/edit/' + req.param('id'));
      }

      res.redirect('/golfer/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {
    Golfer.destroy(req.param('id')).exec(function() {
      res.redirect('/golfer/');
    });
  }

};

