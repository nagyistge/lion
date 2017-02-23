import Ember from 'ember';
import DS from 'ember-data';

const { computed, get } = Ember;
const { attr, Model } = DS;

export default Model.extend({
  avatarUrl: attr('string'),
  name: attr('string'),
  nickname: attr('string'),

  githubUrl: computed('nickname', function() {
    return `https://github.com/${get(this, 'nickname')}`;
  })
});
