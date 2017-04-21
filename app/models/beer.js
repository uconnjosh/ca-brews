import DS from 'ember-data';

export default DS.Model.extend({
  brewery: DS.attr('string'),
  city: DS.attr('string'),
  name: DS.attr('string'),
  abv: DS.attr('string'),
  ibu: DS.attr('string'),
  srm: DS.attr('string'),
  tags: DS.attr('string')
});
