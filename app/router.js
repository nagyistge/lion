import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.resource('leaderboard', function() {
    this.route('all-time');
    return this.route('weekly');
  });

  this.route('hall-of-fame');
  this.route('stats');
});

export default Router;
