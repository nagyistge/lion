import config from 'lion/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import GraphAdapter from 'lion/graph/adapter';

export default GraphAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  endpoint: `${config.apiBaseUrl}/api/graph`
});
