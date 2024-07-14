import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/dbconfig.js'

const app = express();

// Connect to DB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.DEV_PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})