import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
    const payloadWithRoot = { beers: payload }
    return this._super(store, primaryModelClass, payloadWithRoot, id, requestType);
  },
  primaryKey: 'Name'
});
