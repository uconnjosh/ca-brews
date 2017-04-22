import DS from 'ember-data';

export default DS.Model.extend({
  Brewery: DS.attr('string'),
  City: DS.attr('string'),
  Name: DS.attr('string'),
  Abv: DS.attr('string'),
  Ibu: DS.attr('string'),
  Srm: DS.attr('string'),
  Tags: DS.attr('string')
});
