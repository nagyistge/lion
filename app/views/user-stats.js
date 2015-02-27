import Ember from 'ember';

export default Ember.CollectionView.extend(Ember.SortableMixin, {
  tagName: 'ul',
  classNames: ['ranking'],

  pointsPropertyDidChange: (function() {
    Ember.defineProperty(this, 'points', Ember.computed.mapBy('content', this.get('pointsProperty')));
  }).observes('pointsProperty').on('init'),

  maximumPoints: Ember.computed.max('points'),

  itemViewClass: Ember.View.extend({
    templateName: 'user_stats_item',

    progressBarStyle: (function() {
      return "width: %@%".fmt(this.progressBarWidth());
    }).property('points', 'parentView.maximumPoints'),

    progressBarWidth: function() {
      if (this.get('points') === 0) {
        return 0;
      } else {
        return (this.get('points') / this.get('parentView.maximumPoints')) * 100;
      }
    },

    pointsPropertyDidChange: (function() {
      Ember.defineProperty(this, 'points', Ember.computed.alias(`content.${this.get('parentView.pointsProperty')}`));
    }).observes('parentView.pointsProperty').on('init'),

    avatarUrlPropertyDidChange: (function() {
      Ember.defineProperty(this, 'avatarUrl', Ember.computed.alias(`content.${this.get('parentView.avatarUrlProperty')}`));
    }).observes('parentView.avatarUrlProperty').on('init')
  })
});
