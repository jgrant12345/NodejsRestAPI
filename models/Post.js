const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    Completed: {
        type: Number,
        default: 0
    },
    Description: {
        type:String,
        required:true
       
    },
    Title: {
        type:String,
        required:true
        
    }
})

module.exports = mongoose.model('Posts', PostSchema)