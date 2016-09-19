import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel() {
    this.transitionTo('leaderboard', 'weekly');
    this._super(...arguments);
  }
});
