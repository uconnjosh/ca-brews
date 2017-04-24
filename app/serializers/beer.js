import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
    const payloadWithTags = payload.map(function(object) {
      return tagObjects(object);
    });
    const payloadWithRoot = { beers: payloadWithTags };
    return this._super(store, primaryModelClass, payloadWithRoot, id, requestType);
  },
  primaryKey: 'Name',
  attrs: {
    tags: { embedded: 'always' }
  }
});

var tagObjects = function(beerObject) {
  let tags = beerObject["Tags"].split("|");
  let mapped_tags = tags.map(function(tag) {
    return { "id": tag };
  });

  beerObject["tags"] = mapped_tags;
  return beerObject;
};
