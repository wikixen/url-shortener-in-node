import express from 'express';
import validURL from 'valid-url';
import { nanoid } from 'nanoid';
import URL from '../models/Url.js';
import 'dotenv/config';

export const urlRouter = express.Router();

// @route POST /api/url/shorten
// @desc  Create short URL
urlRouter.post('/shorten', async (req, res) => {
    const { longURL } = req.body;
    const baseURL = process.env.DOMAIN!;

    // Checks if baseURL is valid
    if (!validURL.isUri(baseURL)) {
        return res.status(401).json({
            message: 'Invalid Base URL',
            url_tried: baseURL 
        });
    }

    // Creates URL code
    const urlCode = nanoid();

    // Checks if longURL is valid
    if (validURL.isUri(longURL)) {
        try {
            let url = await URL.findOne({ longURL });

            if (url) {
                res.json(url);
            }
            else {
                const shortURL = baseURL + '/' + urlCode;

                url = new URL({
                    longURL,
                    shortURL,
                    urlCode,
                    date: new Date()
                });

                await url.save();

                res.json(url);
            }
        } catch (err) {
            res.status(500).json({
                error: `${err}`,
                message: 'Server Error'
            })
        }
    }
    else {
        res.status(401).json({
            message: 'Invalid Long URL'
        })
    }
});
