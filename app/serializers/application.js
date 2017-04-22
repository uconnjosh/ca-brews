import Ember from 'ember';
import DS from "ember-data";

export default DS.JSONSerializer.extend({
  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    alert('foo bars');
  }
  // serializeIntoHash: function(hash, type, record, options) {
  //   alert('hello')
  //   Ember.merge(hash, this.serialize(record, options));
  // }
});
  // normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
  //   alert('hello')
  //   return this._super(...arguments);
  // }
