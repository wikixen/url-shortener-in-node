import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    shortURL: {
        type: String,
        required: true,
        // @Potential Error
        // @desc If you get an error like ERR_REQUIRE_ESM check here and insure nanoid version works
        default: () => nanoid().substring(0, 10),
    },
}, {
    timestamps: true,
})

export default mongoose.model('urlModel', urlSchema);