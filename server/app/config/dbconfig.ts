import mongoose from 'mongoose';
import 'dotenv/config';

const db: string = process.env.MONGO_URI!;

export const connectDB = async () => {
    try {
        await mongoose.connect(db);
        
        console.log('DB connected...');
    } catch (err:any) {
        console.error(err.message)
        process.exit(1);
    }
}