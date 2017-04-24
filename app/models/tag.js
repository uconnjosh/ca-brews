import DS from 'ember-data';

export default DS.Model.extend({
  beers: DS.hasMany('beer')
});
