import express from 'express';
import { createUrl, deleteUrl, getAllUrl, getUrl } from '../controllers/shortUrl';

export const router = express.Router();

router.post("/shorten", createUrl);
router.get("/shorten", getAllUrl);
router.get("/shorten/:id", getUrl);
router.delete("/shorten/:id", deleteUrl);

