import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authenticated', { path: '' }, function() {
    this.resource('index', { path: '/' });
    this.resource('leaderboard', { path: '/leaderboard/:time_span' });
    this.resource('hall-of-fame');
    this.resource('stats', { path: '/stats/:category' });
  });

  this.route('session');
});

export default Router;
