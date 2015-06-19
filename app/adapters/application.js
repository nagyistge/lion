import DS from 'ember-data';
import config from 'lion/config/environment';

export default DS.ActiveModelAdapter.extend({
  host: config.apiBaseUrl,
  namespace: 'api'
});
