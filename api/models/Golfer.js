/**
 * Golfer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    first_name: {
      type: 'string',
      required: true
    },

    last_name: {
      type: 'string',
      required: true
    },

    nickname: {
      type: 'string',
      required: true
    },

    score_average: {
      type: 'string'
    },

    handicap: {
      type: 'string'
    }
  }
};

