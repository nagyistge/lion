import DS from 'ember-data';
import config from 'lion/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.ActiveModelAdapter.extend(DataAdapterMixin, {
  host: config.apiBaseUrl,
  namespace: 'api',
  authorizer: 'authorizer:oauth2'
});
