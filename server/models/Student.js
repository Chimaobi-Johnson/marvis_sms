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
        required: true
    },
    dob: Date,
    profilePicture: {
        type: String
    },
    profilePictureId: String,
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    location: {

    },
    phone: String,
    guardianDetails: [
        {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            gender: {
                type: String,
                required: true
            },
            relationship: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            email: {
                type: String
            },
            address: {
                country: String,
                state: String,
                city: String,
                postalCode: String
            },
            location: {}
        }
    ],
    address: {
        country: String,
        state: String,
        city: String,
        postalCode: String
    },
    uniqueId: String, // unique id sent by admin for student/staff login
    // once student/staff is created an Id and password is sent to the provided 
    // email and also stored with the admin dashboard and email for safekeeping till the person 
    // changes password
    currentCourses: [],
    academicYear: String,
    hobbies: [],
    grades: {
        ref: 'Grade' // goto grade and find using course id
    }
}, {timestamps: true});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("user", userSchema);
