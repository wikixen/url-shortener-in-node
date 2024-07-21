import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/dbconfig.js';
import { reRouter } from './routes/reRoute.js';
import { urlRouter } from './routes/urlRoute.js';

const app = express();

// Connect to DB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', reRouter);
app.use('/api/url', urlRouter);

const PORT = process.env.DEV_PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})