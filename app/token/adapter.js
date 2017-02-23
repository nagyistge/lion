import config from 'lion/config/environment';
import Adapter from 'lion/application/adapter';

export default Adapter.extend({
  endpoint: config.apiAuthUrl
});
