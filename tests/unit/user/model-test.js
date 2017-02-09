import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

const { get } = Ember;

moduleForModel('user', 'Unit | Model | user', {
  needs: []
});

test('it creates a github url', function(assert) {
  let model = this.subject({ nickname: 'smithey' });
  assert.equal(
    get(model, 'githubUrl'),
    `https://github.com/smithey`
  );
});
