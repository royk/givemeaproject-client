import DS from "ember-data";

export default DS.Model.extend({
	name: DS.attr("string"),
  description: DS.attr("string"),
  tags: DS.attr(),
  platform: DS.attr("string")
});
