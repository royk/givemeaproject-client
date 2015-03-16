import Ember from 'ember';

export default Ember.ArrayController.extend({
  searchTerm: "",
	actions: {
		deleteProject: function(project) {
			project.deleteRecord();
			project.save();
		},
		createProject: function() {
			var project = this.store.createRecord("project", {
				name: "New Project"
			});
      project.save();
      this.send("clearSearch");
		},
    performSearch:function() {
      $.jAjax({
        url: "projects-search?term="+this.get("searchTerm"),
        success: (function(data) {
          var models = [];
          data.forEach((function(o, i) {
            models.push(this.store.find("project", o._id));
          }).bind(this));
          this.set("content", models);
        }).bind(this)
      });
    },
    clearSearch: function() {
      this.set("content", this.store.find("project"));
    }
	}
});
