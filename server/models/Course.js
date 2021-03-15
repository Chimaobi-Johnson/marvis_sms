const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const {Schema} = mongoose;

const courseSchema = new Schema({
    courseName: {
        type: String,
        required: true,
        minlength: 3
    },
    courseCode: {
        type: String,
        minlength: 3
    },
    section: {
        type: String,
    },
    gender: {
        type: String,
        default: ''
    },
    coursePicture: {
        type: String
    },
    coursePictureId: String,
    enrolledBy: [

    ],
    grades: {
        ref: 'Student' // goto grade and find using student Id
    }
}, {timestamps: true});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("course", courseSchema);
