import DS from 'ember-data';
import config from 'lion/config/environment';

export default DS.ActiveModelAdapter.extend({
  host: config.API_HOST,
  namespace: 'api'
});
