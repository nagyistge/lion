import Ember from 'ember';
import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';

export default TooltipsterComponent.extend({
  classNameBindings: [':as-avatar'],
  attributeBindings: ['src', 'alt', 'title'],
  tagName: 'img',

  alt: Ember.computed.oneWay('title'),
  position: 'top',
  src: Ember.computed.oneWay('model.avatarUrl'),
  title: Ember.computed.oneWay('model.name'),
  model: null
});
