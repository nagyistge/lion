import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticateWithGithub(){
      this.get('session').authenticate('authenticator:torii-oauth2', 'github-oauth2').catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
