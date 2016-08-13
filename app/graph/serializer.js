import Ember from 'ember';
import { Serializer } from 'ember-graphql-adapter';

export default Serializer.extend({
  concatenatedProperties: [
    'attributesExcludedFromSerialization',
    'belongsToExcludedFromSerialization',
    'hasManyExcludedFromSerialization'
  ],
  attributesExcludedFromSerialization: [],
  belongsToExcludedFromSerialization: [],
  hasManyExcludedFromSerialization: [],

  normalizeCase(string) {
    return Ember.String.underscore(string);
  },

  serializeAttribute(snapshot, json, key, attribute) {
    if (!this.get('attributesExcludedFromSerialization').contains(attribute.name)) {
      this._super(snapshot, json, key, attribute);
    }
  },

  serializeBelongsTo(snapshot, json, relationship) {
    if (!this.get('belongsToExcludedFromSerialization').contains(relationship.key)) {
      this._super(snapshot, json, relationship);
    }
  },

  serializeHasMany(snapshot, json, relationship) {
    if (!this.get('hasManyExcludedFromSerialization').contains(relationship.key)) {
      this._super(snapshot, json, relationship);
    }
  },
});
