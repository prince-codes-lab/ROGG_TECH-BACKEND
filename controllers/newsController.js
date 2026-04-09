

const News = require('../models/news');
const asyncWrapper = require('../utils/asyncWrapper');  





const createNews = asyncWrapper(async (req, res) => {
    const news = await News.create(req.body);
    res.status(201).json(news);
});



const getAllNews = asyncWrapper(async (req, res) => {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json(news);
});



module.exports = {
    createNews,
    getAllNews
};
