import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['currentUser'],
  currentUserBinding: 'controllers.currentUser',
  layoutName: 'layouts/application',

  connectLayout: function(name) {
    name = `layouts/${name}`;

    if (this.get('layoutName') !== name) {
      this.set('layoutName', name);
    }
  }
});
