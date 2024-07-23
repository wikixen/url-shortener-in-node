import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/dbconfig';
import { router } from './routes/shortUrl';
// import { reRouter } from './routes/reRoute';

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api', router);
// app.use('/', reRouter);

const PORT = process.env.DEV_PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})