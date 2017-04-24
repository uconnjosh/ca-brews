import Ember from 'ember';

export default Ember.Controller.extend({
  filteredBeer: Ember.computed('model', 'nameFilter', function() {
    if (this.get('nameFilter')) {
      let nameFilter = this.get('nameFilter');
      return this.get('model').filter(function(item) {
        let nameValue = item.get('Name');
       return nameValue.indexOf(nameFilter) >= 0;
      });
    } else {
      return this.get('model');
    }
  }),
  nameFilter: null
});
