import express from "express";
import urlModel from '../models/url';

export const createUrl = async (req: express.Request, res: express.Response) => {
    try {
        const { originalUrl } = req.body;
        const urlFound = await urlModel.find(originalUrl);

        if (urlFound.length > 0) {
            res.status(409);
            res.json(urlFound);
        } else {
            const shortUrl = await urlModel.create({ originalUrl });
            res.status(201).json({
                message: `${shortUrl} has been added to DB as a shortUrl`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            err: error
        });
    }
}
export const getAllUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrls = await urlModel.find();
        if (shortUrls.length < 0) {
            res.status(404).json({
                message: `${shortUrls} doesn't exist in DB`,
            });
        } else {
            res.status(200).json({
                shortUrls
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            err: error,
        });
    }
}
export const getUrl = async (req: express.Request, res: express.Response) => {
    
}
export const deleteUrl = async (req: express.Request, res: express.Response) => {
    
}