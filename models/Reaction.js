const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),

        },
        reactionBody: {
            type: String,
            required: [true, 'Reaction must be between 1-280 characters'],
            minLength: 1,
            maxLength: 280,
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                if (date) return date.toUTCString();
            }
        },
    }
)

module.exports = reactionSchema;
