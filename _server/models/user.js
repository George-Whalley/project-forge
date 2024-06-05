const { Admin } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    permissions: {
        type: String,
        required: true
    }
}, {timestamps: true})

const User = mongoose.model('user', userSchema);

module.exports = User;