import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  avatarUrl: DS.attr('string'),

  githubUrl: Ember.computed('nickname', function() {
    return `https://github.com/${this.get('nickname')}`;
  })
});
