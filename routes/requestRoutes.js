'use strict';

module.exports = function(app){
    var todoList = require('../controllers/requestController');

    //todoList Routes
    app.route('/requests')
        //reuising the tasks route for get and post http method
        .get(todoList.list_all_requests)  //calling function list_all_tasks in the controller
        .post(todoList.create_a_request);

    app.route('/tasks/:taskId')
        //reuising the tasks/taskId route for get and put and delete http method
        .get(todoList.read_a_request)
        .put(todoList.update_a_request)
        .delete(todoList.delete_a_request);
};