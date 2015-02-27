import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel: function() {
    this.controllerFor('currentUser').sync();
  },

  actions: {
    authenticate: function(provider){
      this.get('session').authenticate('authenticator:torii-oauth2', {
        torii: this.get('torii'),
        provider: provider
      }, function(error) {
        alert('There was an error when trying to sign you in: ' + error);
      });
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
