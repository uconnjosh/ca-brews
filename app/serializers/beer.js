import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
    window.gaga = payload
    const payloadWithRoot = { beers: payload }
    window.madonna = payloadWithRoot
    window.idFoo = id;
    return this._super(store, primaryModelClass, payloadWithRoot, id, requestType);
  },
  primaryKey: 'Name'
});
