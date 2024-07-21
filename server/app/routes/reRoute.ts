import express from 'express'; 
import Url from '../models/Url.js';

export const reRouter = express.Router();

// @route   GET /:code
// @desc    Redirects to long URL
reRouter.get('/:code', async (req, res) => {
    try {
        const originalURL:any = await Url.findOne({ urlCode: req.params.code })!;
        
        if (originalURL) {
            return res.redirect(originalURL.longURL);
        }
        else {
            return res.status(404).json({
                message: "URL not found or no longer exists",
            })
        }
    } catch (err) {
        res.status(500).json({
            error: `${err}`,
            message: "Server Error",
        })
    }
})