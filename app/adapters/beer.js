import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://vdms-ui.herokuapp.com',
  namespace: 'api',
  primaryKey: 'name'
});
