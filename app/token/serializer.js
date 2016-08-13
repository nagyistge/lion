import Serializer from 'lion/graph/serializer';

export default Serializer.extend({
  attributesExcludedFromSerialization: ['accessToken']
});
