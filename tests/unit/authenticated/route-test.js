import { moduleFor, test } from 'ember-qunit';

moduleFor('route:authenticated', 'Unit | Route | authenticated', {
  needs: []
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
