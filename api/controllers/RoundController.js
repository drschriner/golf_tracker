/**
 * RoundController
 *
 * @description :: Server-side logic for managing rounds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new': function(req, res, err) {
    Golfer.findOne(req.param('owner'), function foundGolfer (err, golfer) {;
    if (err) return next(err);
    if (!golfer) return next()
    res.view({
        golfer: golfer
      });
    });
  },

  create: function(req, res, next) {
    Round.create(req.params.all(), function roundCreated(err, round) {
      if (err) return next(err);

      res.redirect('/golfer/show/' + round.owner);
    });
  },

  show: function (req, res, next) {
    Round.findOne(req.param('id')).populateAll().exec(function foundRound(err, round) {
      if (err) return next(err);

      if (!round) return next();

      res.view({
        round: round
      });
    });
  },

  index: function (req, res, next) {
    Round.find(function foundRounds(err, rounds) {
      if (err) return next(err);

      res.view({
        rounds: rounds
      });
    });
  },

  edit: function (req, res, next) {
    Round.findOne(req.param('id'), function foundRound(err, round) {
      if (err) return next(err);

      if (!round) return next();

      res.view({
        round: round
      });
    });
  },

  update: function (req, res, next) {
    Round.update(req.param('id'), req.params.all(), function roundUpdated(err) {
      if (err) {
        console.log(err);
        return res.redirect('/round/edit/' + req.param('id'));
      }

      res.redirect('/golfer/show/' + req.param('owner'));
    });
  },


  destroy: function(req, res, next) {
    Round.findOne(req.param('id')).exec(function (err, round) {
      round.destroy();

      res.redirect('/golfer/show/' + round.owner);
    });
  }

};

