import Ember from 'ember';

export default Ember.Controller.extend({
  filteredBeer: Ember.computed('model', 'nameFilter', function() {
    if (this.get('nameFilter')) {
      return this.get('model').filterBy('Name', this.get('nameFilter'))
    } else {
      return this.get('model')
    }
  }),
  nameFilter: null
});
