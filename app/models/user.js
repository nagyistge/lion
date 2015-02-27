import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  
  githubUrl: (function() {
    return `https://github.com/${this.get('nickname')}`;
  }).property('nickname')
});
