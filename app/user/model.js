import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  avatarUrl: DS.attr('string'),
  name: DS.attr('string'),
  nickname: DS.attr('string'),

  githubUrl: Ember.computed('nickname', function() {
    return `https://github.com/${this.get('nickname')}`;
  })
});
