import AuthenticatedRoute from '../authenticated';

export default AuthenticatedRoute.extend({
  setupController: function() {
    this._super.apply(this, arguments);

    this.store.find('score', { time_span: 'weekly' }).then((scores) => {
      this.controllerFor('leaderboard').set('content', scores);
    });
  }
});
