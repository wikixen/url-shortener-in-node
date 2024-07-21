var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import Url from '../models/Url.js';
export const reRouter = express.Router();
// @route   GET /:code
// @desc    Redirects to long URL
reRouter.get('/:code', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const originalURL = yield Url.findOne({ urlCode: req.params.code });
        if (originalURL) {
            return res.redirect(originalURL.longURL);
        }
        else {
            return res.status(404).json({
                message: "URL not found or no longer exists",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            error: `${err}`,
            message: "Server Error",
        });
    }
}));
