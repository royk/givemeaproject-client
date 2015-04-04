import DS from "ember-data";

export default DS.Model.extend({
	name: DS.attr("string"),
  description: DS.attr("string"),
  tags: DS.attr(),
  platform: DS.belongsTo("platform", {async:true}),
  updated: DS.attr("date")
});
