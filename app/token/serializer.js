import Serializer from 'lion/application/serializer';

export default Serializer.extend({
  attributesExcludedFromSerialization: ['accessToken'],
  belongsToExcludedFromSerialization: ['user']
});
