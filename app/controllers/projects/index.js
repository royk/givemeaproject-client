import Ember from 'ember';

export default Ember.ArrayController.extend({
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
		}
	}
});
