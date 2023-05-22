const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserShema = new Schema({
    uid: String,//profile id
    accessToken: String,
    token: String,
    gender: String,
    salt: { type: String, select: false },
    hash: { type: String, select: false },
    first_name: String, 
    last_name: String, 
    email: { type: String },
    national_id: { type: String }, 
    national_id_image: {
        path: { type: String },
        filename: String
    },
    phone_number: String, 
    city: String, 
    covernate: String, 
    address: String, 
    job_description: String, 
    
    image: {
        path: { type: String, default: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' },
        filename: String
    },
    resetPasswordToken: String,
	resetPasswordExpires: Date,
    confirmToken: String,
	confirmExpires: Date,
    verified: {
        type: Boolean, 
        default: false
    },
    balance: {
        type: Number,
        default: 1000
    },
    favourties: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    items_rented: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    notifications: [ {
        theBuyer: {   
            type: Schema.Types.ObjectId,
            ref: 'User',

        },
        thePost: {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        },
        theMessage: String,

    }
    ],
    searches: [],
});

UserShema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserShema);