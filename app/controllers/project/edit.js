import Ember from 'ember';

export default Ember.ObjectController.extend({
  platforms: function() {
    return this.store.find("platform");
  }.property(),
	actions: {
		save: function() {
      var tags = this.get("model.description");
      if (tags) {
        tags = tags.replace(/\s+/g, " ");
        tags = tags.split(" ");
        this.set("model.tags", tags);
      }
      this.set("model.platform", this.get("platform.id"));
			this.get("model").save();
		}
	}
});
