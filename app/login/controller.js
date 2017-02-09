import Ember from 'ember';

const { Controller, get, inject } = Ember;

export default Controller.extend({
  session: inject.service(),

  actions: {
    authenticateWithGithub() {
      get(this, 'session').authenticate('authenticator:oauth2', 'github-oauth2');
    }
  }
});
