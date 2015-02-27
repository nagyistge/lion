import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  serialize: function() {
    var json = this._super.apply(this, arguments);
    delete json.created_at;
    return json;
  },
  typeForRoot: function(root) {
    if (root === 'winner' || root === 'winners') {
      root = 'user';
    }
    
    return this._super(root);
  }
});
