const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskDescription:{
        type : String,
        required: true
    },

    dueDate:{
        type: Date,
        required: true
    },

    category:{
        type: String,
        required: true
    },

    completionStatus:{
        type: Boolean,
        default: false
    }

});

const Task = mongoose.model('Task' , taskSchema);

module.exports = Task;