import Ember from 'ember';
import { Adapter } from 'ember-graphql-adapter';

export default Adapter.extend({
  coalesceFindRequests: true,
  httpMethod: 'POST',

  normalizeCase(string) {
    return Ember.String.underscore(string);
  }
});
