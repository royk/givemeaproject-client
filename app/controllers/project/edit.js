import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		save: function() {
      var tags = this.get("model.description");
      tags = tags.replace(/\s+/g, " ");
      tags = tags.split(" ");
      this.set("model.tags", tags);
			this.get("model").save();
		}
	}
});
