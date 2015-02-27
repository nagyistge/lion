import Ember from 'ember';

export default Ember.ArrayController.extend(new Ember.Pushable('score'), {
  sortProperties: ['points'],
  sortAscending: false
});
