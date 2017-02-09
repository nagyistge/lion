import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNameBindings: [':user-performance'],

  user: null,
  points: 0
});
