'use strict';
module.exports = function(app) {
    var teamPro = require('../controllers/teamProController');

    // teamPro Routes
    app.route('/events')
        .get(teamPro.list_all_events)
        .post(teamPro.create_event);


    app.route('/events/:eventId')
        .get(teamPro.read_event)
        .put(teamPro.update_event)
        .delete(teamPro.delete_event);
};
