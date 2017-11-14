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

      // function to add a players average score per round
      golfer.average_strokes = (golfer.total_strokes / golfer.total_rounds);
      console.log(golfer.average_strokes);

      res.view({
        golfer: golfer
      });

  });

  },

  stats: function (req, res, next) {
    Golfer.findOne(req.param('id')).populateAll().exec(function foundGolfer(err, golfer) {
      if (err) return next(err);

      if (!golfer) return next();

      function sum_18_holes() {
        for (i =0; i < 5; i++) {
          text += "the number is " + i + "<br>";
        }
      }

      // function to add up all the player's score and rounds
          golfer.total_strokes = 0;
          golfer.total_rounds = 0;

          golfer.rounds.forEach(function (rounds) {
            if (rounds.holes_played = 18) {
              rounds.one_score = rounds.total_score;
              rounds.played = rounds.total_rounds;
              golfer.total_strokes += (rounds.one_score);
              golfer.total_rounds += 1;
              var i = rounds.one_score;
              var x = rounds.played;
              console.log(golfer.total_strokes);
              console.log(golfer.total_rounds);
            }

            else {
              rounds.one_score9 = rounds.total_score;
              rounds.played9 = rounds.total_rounds9;
              golfer.total_strokes9 += (rounds.one_score9);
              golfer.total_rounds9 += 1;
              var i = rounds.one_score9;
              var x = rounds.played9;
              console.log(golfer.total_strokes9);
              console.log(golfer.total_rounds9);
            }
          });

          golfer.average_strokes = (golfer.total_strokes / golfer.total_rounds);

        // function to add up all the player's front round score
      golfer.front_strokes = 0;
      golfer.front_rounds = 0;

      golfer.rounds.forEach(function (rounds) {
        if (rounds.holes_played = 18) {
          rounds.one_frontScore = rounds.front_score;
          rounds.frontPlayed = rounds.front_rounds;
          golfer.front_strokes += (rounds.one_frontScore);
          golfer.front_rounds += 1;
          var i = rounds.one_frontScore;
          var x = rounds.frontPlayed;
          console.log(golfer.front_strokes);
          console.log(golfer.front_rounds);
        }
      });
      golfer.average_frontStrokes = (golfer.front_strokes / golfer.front_rounds);

      // function to add up all the player's back round score
      golfer.back_strokes = 0;
      golfer.back_rounds = 0;

      golfer.rounds.forEach(function (rounds) {
        if (rounds.holes_played = 18) {
          rounds.one_backScore = rounds.back_score;
          rounds.backPlayed = rounds.back_rounds;
          golfer.back_strokes += (rounds.one_backScore);
          golfer.back_rounds += 1;
          var i = rounds.one_backScore;
          var x = rounds.backPlayed;
          console.log(golfer.back_strokes);
          console.log(golfer.back_rounds);
        }
      });
      golfer.average_backStrokes = (golfer.back_strokes / golfer.back_rounds);


      // function to calculate player's average greens per round
      golfer.total_greens = 0;

      golfer.rounds.forEach(function (rounds) {
        rounds.one_greenTotal = rounds.greens;
        golfer.total_greens += (rounds.one_greenTotal);
        var i = rounds.one_greenTotal;
        console.log(golfer.total_greens);
      });
      golfer.average_greens = (golfer.total_greens / golfer.total_rounds);


      // function to calculate player's average putts per round
      golfer.total_putts = 0;

      golfer.rounds.forEach(function (rounds) {
          rounds.one_puttTotal = rounds.putts;
          golfer.total_putts += (rounds.one_puttTotal);
          var i = rounds.one_puttTotal;
          console.log(golfer.total_putts);
      });
      golfer.average_putts = (golfer.total_putts / golfer.total_rounds);


      // function to calculate player's average fairways per round
      golfer.total_fairways = 0;

      golfer.rounds.forEach(function (rounds) {
        rounds.one_fairwayTotal = rounds.fairways;
        golfer.total_fairways += (rounds.one_fairwayTotal);
        var i = rounds.one_fairwayTotal;
        console.log(golfer.total_fairways);
      });
      golfer.average_fairways = (golfer.total_fairways / golfer.total_rounds);


      // function to calculate player's average birdies per round
      golfer.total_birdies = 0;

      golfer.rounds.forEach(function (rounds) {
        rounds.one_birdieTotal = rounds.birdies;
        golfer.total_birdies += (rounds.one_birdieTotal);
        var i = rounds.one_birdieTotal;
        console.log(golfer.total_birdies);
      });
      golfer.average_birdies = (golfer.total_birdies / golfer.total_rounds);


      // function to calculate player's average par saves per round
      golfer.total_pars = 0;

      golfer.rounds.forEach(function (rounds) {
        rounds.one_parTotal = rounds.par_saves;
        golfer.total_pars += (rounds.one_parTotal);
        var i = rounds.one_parTotal;
        console.log(golfer.total_pars);
      });
      golfer.average_pars = (golfer.total_pars / golfer.total_rounds);


      // function to calculate player's average doubles per round
      golfer.total_doubles = 0;

      golfer.rounds.forEach(function (rounds) {
        rounds.one_doubleTotal = rounds.doubles;
        golfer.total_doubles += (rounds.one_doubleTotal);
        var i = rounds.one_doubleTotal;
        console.log(golfer.total_doubles);
      });
      golfer.average_doubles = (golfer.total_doubles / golfer.total_rounds);


        res.view({
          golfer: golfer
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

