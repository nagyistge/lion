import AuthenticatedRoute from '../authenticated';

export default AuthenticatedRoute.extend({
  setupController: function() {
    this._super.apply(this, arguments);

    this.store.find('score', { time_span: 'all_time' }).then((scores) => {
      this.controllerFor('leaderboard').set('content', scores);
    });
  }
});
