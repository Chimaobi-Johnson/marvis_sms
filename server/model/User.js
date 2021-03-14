const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        default: ''
    },
    profilePicture: {
        type: String
    },
    profilePictureId: String,
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        required: true,
        default: 'admin'  // super-admin, admin, editor
    },

}, {timestamps: true});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("user", userSchema);
