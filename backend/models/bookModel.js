import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:{type: String, require: true,},
        author:{type: String, require: true,},
        publishYear:{type: String, require: true,},
        image:{type: String,},
        summary:{type: String,},
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('cat', bookSchema);