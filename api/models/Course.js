/**
 * Course.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    city: {
      type: 'string',
      required: true
    },

    state: {
      type: 'string',
      required: true
    },

    zip: {
      type: 'string',
      required: true
    },

    total_par: {
      type: 'string',
      required: true
    },

    front_par: {
      type: 'string',
      required: true
    },

    back_par: {
      type: 'string',
      required: true
    },

    yardage: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string'
    },

    owner: {
      model: 'round',
      required: true
    },


  }
};

