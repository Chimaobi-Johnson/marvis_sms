const mongoose = require("mongoose");

const {Schema} = mongoose;

const gradeSchema = new Schema({
    name: String,
    belongsTo: {
        ref: 'Student'
    },
    course: {
        ref: 'Course'
    }
}, {timestamps: true});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("grade", userSchema);
