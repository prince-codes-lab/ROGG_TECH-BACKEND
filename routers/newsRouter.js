const express = require('express');
const router = express.Router();
const News = require('../db/models/news');
const {verifyToken, authorizeAdmin} = require('../controllers/authControllers');

router.get('/', verifyToken, async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.status(200).json(news);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.route().post(verifyToken, authorizeAdmin, async (req, res) => {
    try {
        const news = await News.create(req.body);
        res.status(201).json(news);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
