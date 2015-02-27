import Ember from 'ember';
import LocalStorage from '../local-storage';

export default Ember.ObjectController.extend({
  sync: function() {
    var currentUser = LocalStorage.getItem('currentUser');

    if (!Ember.isEmpty(currentUser)) {
      this.store.push('user', currentUser);
      this.set('model', this.store.getById('user', currentUser.id));
    } else if (this.get('session.isAuthenticated')) {
      this.store.find('user', 'me').then((user) => {
        this.set('model', this.store.getById('user', user.id));
      }, () => {});
    }
  },

  logout: function() {
    this.set('model', null);
  },

  modelDidChange: (function() {
    var model = this.get('model');
    if (model == null) { return; }

    LocalStorage.setItem('currentUser', this.get('model').toJSON({
      includeId: true
    }));
  }).observes('model')
});
