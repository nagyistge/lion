import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authenticated', function() {
    this.route('index', { path: '/', resetNamespace: true });
    this.route('leaderboard', { path: '/leaderboard/:time_span', resetNamespace: true });
    this.route('hall-of-fame', { resetNamespace: true });
    this.route('stats', { path: '/stats/:category', resetNamespace: true });
  });

  this.route('session');
});

export default Router;
