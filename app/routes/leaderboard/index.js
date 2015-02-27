import AuthenticatedRoute from '../authenticated';

export default AuthenticatedRoute.extend({
  beforeModel: function(transition) {
    this.transitionTo('leaderboard.weekly');
    this._super(transition);
  }
});
