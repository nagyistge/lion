import Ember from 'ember';
import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';

const { computed } = Ember;

export default TooltipsterComponent.extend({
  attributeBindings: ['src', 'alt', 'title'],
  classNameBindings: [':user-avatar'],
  tagName: 'img',

  user: null,

  alt: computed.oneWay('title'),
  src: computed.oneWay('user.avatarUrl'),
  title: computed.oneWay('user.name'),
});
