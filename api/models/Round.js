/**
 * Round.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    location: {
      type: 'string',
      required: true
    },

    date: {
      type: 'string',
      required: true
    },

    holes_played: {
      type: 'string',
      required: true
    },

    total_score: {
      type: 'string',
      required: true
    },

    relation_to_par: {
      type: 'string',
      required: true
    },

    front_score: {
      type: 'string',
      required: true
    },

    back_score: {
      type: 'string',
      required: true
    },

    greens: {
      type: 'string',
      required: true
    },

    putts: {
      type: 'string',
      required: true
    },

    fairways: {
      type: 'string',
      required: true
    },

    birdies: {
      type: 'string',
      required: true
    },

    par_saves: {
      type: 'string',
      required: true
    },

    doubles: {
      type: 'string',
      required: true
    },

    owner: {
      model: 'golfer',
      required: true
    },



  }
};



