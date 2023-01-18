const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const activeUserChema = new mongoose.Schema(
    {
        id:{
            type:mongoose.Schema.ObjectID,
            required:true
        },
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("ActiveUsers",activeUserChema)
