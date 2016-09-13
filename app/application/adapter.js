import config from 'lion/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { ActiveModelAdapter } from 'active-model-adapter';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  host: config.apiBaseUrl,
  namespace: 'api',
  authorizer: 'authorizer:oauth2'
});
