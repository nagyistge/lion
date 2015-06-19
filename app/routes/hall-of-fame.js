import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('weeklyWinning');
  },

  setupController: function(controller, model) {
    controller.set('weeklyWinnings', model);
  }
});
