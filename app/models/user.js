import SlEmberModel from 'sl-ember-store/model';

var User = SlEmberModel.extend({

});

User.reopenClass({
    url    : '/users'
});

export default User;
