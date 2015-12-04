import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authenticated', { path: '' }, function() {
    this.route('leaderboard', { path: '/leaderboard/:time_span' });
    this.route('hall-of-fame');
    this.route('stats');
  });

  this.route('session');
});

export default Router;
