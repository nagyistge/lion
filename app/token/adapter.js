import config from 'lion/config/environment';
import GraphAdapter from 'lion/graph/adapter';

export default GraphAdapter.extend({
  endpoint: `${config.apiBaseUrl}/api/auth`
});
