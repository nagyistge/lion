import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel: function() {
    this.controllerFor('currentUser').sync();
  },

  actions: {
    authenticateSession: function() {
      this.get('session').authenticate('authenticator:omniauth');
    },

    sessionAuthenticationSucceeded: function() {
      this._super.apply(this, arguments);
      this.controllerFor('currentUser').sync();
    },

    sessionInvalidationSucceeded: function() {
      this.controllerFor('currentUser').logout();
      this._super.apply(this, arguments);
    }
  }
});
