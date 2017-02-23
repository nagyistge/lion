import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const { run, Service } = Ember;

moduleFor('controller:login', 'Unit | Controller | login', {
  needs: ['service:session']
});

test('it sorts the scores in descending order of points', function(assert) {
  assert.expect(2);

  const sessionStub = Service.create({
    authenticate(authenticator, provider) {
      assert.equal(
        authenticator,
        'authenticator:oauth2',
        'expected to autneticate using the oauth2 authenticator'
      );
      assert.equal(
        provider,
        'github-oauth2',
        'expected to autneticate via the github provider'
      );
    }
  });

  let controller = this.subject();
  controller.session = sessionStub;

  run(() => {
    controller.send('authenticateWithGithub');
  });
});
