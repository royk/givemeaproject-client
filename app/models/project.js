import SlEmberModel from 'sl-ember-store/model';
import {genericSerializer} from 'openquip/models/genericSerializer';


var serializer = genericSerializer;
var Project = SlEmberModel.extend({

});

Project.reopenClass({
    url: "/projects",
    serializer: serializer
});

export default Project;
