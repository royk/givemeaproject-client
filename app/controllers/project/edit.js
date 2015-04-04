import Ember from 'ember';

export default Ember.ObjectController.extend({
  platforms: function() {
    return this.store.find("platform");
  }.property(),
  selectedPlatform: function() {
    return this.get("model.platform.id");
  }.property("model.platform.id"),
	actions: {
		save: function() {
      var tags = this.get("model.description");
      if (tags) {
        tags = tags.replace(/\s+/g, " ");
        tags = tags.split(" ");
        this.set("model.tags", tags);
      }
      this.store.find("platform", this.get("selectedPlatform")).then((function(record) {
        this.set("model.platform", record);
        this.get("model").save();
      }).bind(this));
		}
	}
});
