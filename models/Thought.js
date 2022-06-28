const { Schema, model } = require('mongoose');

const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Thought must be between 1-280 characters'],
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                if (date) return date.toUTCString();
            }
        },
        username: {
            type: String,
            required: [true, 'username is required'],
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//virtual for reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


const Thought = model('thought', thoughtSchema);

module.exports = Thought;