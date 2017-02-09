import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  needs: []
});

test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});
