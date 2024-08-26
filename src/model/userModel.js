const mongoose = require('mongoose')
const { Schema } = mongoose; 

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: 'String',
        default: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-1033.jpg",
    }


}, {timestamps: true})

const User = mongoose.model("User", userSchema)
module.exports = User; 
