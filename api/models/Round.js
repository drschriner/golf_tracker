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
      type: 'float',
      required: true
    },

    total_score: {
      type: 'float',
      required: true
    },

    relation_to_par: {
      type: 'text',
      required: true
    },

    front_score: {
      type: 'float',
  },

    back_score: {
      type: 'float',
    },

    greens: {
      type: 'float',
      required: true
    },

    putts: {
      type: 'float',
      required: true
    },

    fairways: {
      type: 'float',
      required: true
    },

    birdies: {
      type: 'float',
      required: true
    },

    par_saves: {
      type: 'float',
      required: true
    },

    doubles: {
      type: 'float',
      required: true
    },

    owner: {
      model: 'golfer',
      required: true
    },

    courses: {
      collection: 'course',
      via: 'owner'
    },



  }
};



