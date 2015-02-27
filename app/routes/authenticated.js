import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    if (!this.get('session.isAuthenticated')) {
      transition.abort();
      this.set('session.attemptedTransition', transition);
      this.transitionTo('login');
    }
  },

  setupController: function() {
    this._super.apply(this, arguments);
    this.controllerFor('application').connectLayout('application');
  }
});
