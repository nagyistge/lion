import { moduleForModel, test } from 'ember-qunit';

moduleForModel('token', 'Unit | Serializer | token', {
  needs: [
    'model:user',
    'serializer:token',
  ]
});

test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
