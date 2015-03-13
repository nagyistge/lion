import Ember from 'ember';

Ember.Handlebars.makeBoundHelper('formattedDate', function (date, format) {
  return moment(date).format(format);
});
