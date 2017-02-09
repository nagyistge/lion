import Ember from 'ember';
import config from 'lion/config/environment';
import { Adapter } from 'ember-graphql-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { String: { underscore } } = Ember;

export default Adapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  coalesceFindRequests: true,
  endpoint: config.apiBaseUrl,
  httpMethod: 'POST',

  normalizeCase(string) {
    return underscore(string);
  }
});
