import Ember from 'ember';

export default Ember.View.extend({
  templateName: (function() {
    return this.get('controller.layoutName');
  }).property('controller.layoutName'),

  templateNameDidChange: (function() {
    this.rerender();
  }).observes('templateName')
});
