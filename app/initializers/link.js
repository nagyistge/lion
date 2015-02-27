import Ember from 'ember';

export default {
  name: 'link',
  initialize: function() {
    return Ember.LinkView.reopen({
      activeDidChange: (function() {
        if (this.get('parentActiveView')) {
          this.get('parentActiveView').set(this.get('parentActiveClass'), this.get('active') === 'active');
        }
      }).observes('active').on('init')
    });
  }
};
