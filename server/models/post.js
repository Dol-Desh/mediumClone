import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
    },

    title: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    duration: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ['Career', 'Business', 'Productivity', 'Finance', 'Creativity', 'Wellness', 'Programming'],
        required: true
    },

    updatedAt: {
        type: Date,
        default: Date.now
    },

    articleImage: {
        date: Buffer,
        type: String
    }
});

const Post = mongoose.model('Post', postSchema);
export default Post;
