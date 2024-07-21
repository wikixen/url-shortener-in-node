import mongoose from 'mongoose';
const urlSchema = new mongoose.Schema({
    urlCode: String,
    longURL: String,
    shortURL: String,
    date: { type: String, default: Date.now }
});
export default mongoose.model('Url', urlSchema);
