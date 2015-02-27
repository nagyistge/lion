import Ember from 'ember';

export default Ember.Namespace.create({
  getItem: function(key) {
    var item = window.localStorage.getItem(key);

    if (item !== 'undefined') {
      return JSON.parse(item);
    } else {
      return null;
    }
  },

  setItem: function(key, item) {
    window.localStorage.setItem(key, JSON.stringify(item));
  },

  removeItem: function(key) {
    window.localStorage.removeItem(key);
  }
});
