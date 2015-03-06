import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('projects', function() {
    	this.resource('project', { path: '/:project_id' }, function() {
    		this.route("edit");
    	});
	});
});

export default Router;