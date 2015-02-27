export default {
  name: 'current-user',
  initialize: function(container, app) {
    return app.inject('model', 'currentUser', 'controller:currentUser');
  }
};
