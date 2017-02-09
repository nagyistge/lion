import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authenticated', { path: '/', resetNamespace: true }, function() {
    this.route('hall-of-fame', { resetNamespace: true });
    this.route('leaderboard', { path: 'leaderboard/:time_span', resetNamespace: true });
    this.route('stats', { path: 'stats/:category', resetNamespace: true });
  });
  this.route('login');
});

export default Router;
