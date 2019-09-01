const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'email already exists'],
        required: [true, 'email required'],
        validate: [isEmail, 'No valid email address provided.'],
    },
    password: {
        type: String,
        required: [true, 'password required'],
    },
    role: [{
        type: Number,
        default: 1
    }],
    del: { type: Boolean, default: false, }
}, { timestamps: true });

const userDetailSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'user', required: true, },
    nickName: { type: String, },
    userType: [{ type: String, required: true, default: '' }],
    firstName: { type: String, },
    lastName: { type: String, },
    gender: [{ type: Number }], //0:null,1:male,2:female,
    email: [{ type: String, unique: true, }],
    country: { type: Number, },
    phoneNumber: { type: Number, },
}, { timestamps: true });

const recomSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    text: { type: String },
    author_ID: { type: Schema.Types.ObjectId, ref: 'user', },
    release: { type: Boolean, default: true, },
    del: { type: Boolean, default: false, }
}, { timestamps: true })

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    detail: { type: String },
    author_ID: { type: Schema.Types.ObjectId, ref: 'user', },
    // album_ID: [{ type: Schema.Types.ObjectId, ref: 'album', }],
    productType: [{ type: Number, default: 0 }], //0:wood,1:wood,2:iron,3:wedge,4:putter...
    release: { type: Boolean, default: true, },
    del: { type: Boolean, default: false, }
}, { timestamps: true })

const blogSchema = new Schema({
    name: { type: String, required: true, },
    detail: { type: String },
    author_ID: { type: Schema.Types.ObjectId, ref: 'user', },
    // album_ID: [{ type: Schema.Types.ObjectId, ref: 'album', }],
    release: { type: Boolean, default: true, },
    del: { type: Boolean, default: false, }
}, { timestamps: true })

const albumSchema = new Schema({
    name: { type: String, required: true, },
    detail: [{
        name: { type: String, required: true, },
        detail: { type: String },
        media_ID: { type: Schema.Types.ObjectId, ref: 'media', },
    }],
    author_ID: { type: Schema.Types.ObjectId, ref: 'user', },
    del: { type: Boolean, default: false, }
}, { timestamps: true })

const mediaSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, ref: 'mediaPath', },
    author_ID: { type: Schema.Types.ObjectId, ref: 'user', },
    mimeType: { type: String, },
    inPath: { type: String, },
    exPath: { type: String, },
})


module.exports = {
    user: mongoose.model('user', userSchema),
    userDetail: mongoose.model('userDetail', userDetailSchema),
    recom: mongoose.model('recom', recomSchema),
    product: mongoose.model('product', productSchema),
    blog: mongoose.model('blog', blogSchema),
    album: mongoose.model('album', albumSchema),
    media: mongoose.model('media', mediaSchema),
};