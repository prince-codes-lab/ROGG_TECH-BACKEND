const express = require('express');
const router = express.Router();
const validateEmail = require('../utils/validateEmail');
const Subscriber = require('../db/models/subscriber');

router.post('/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
        //1. Validate email format
        if (!email || !validateEmail(email)) {
            return res.status(400).json({ error: 'Please provide a valid email address.' });
        }

    // 2. Check if already exists
    const existing = await Subscriber.findOne({ email });

    if (existing) {
      return res.status(409).json({ message: "Already subscribed" });
    }

    // 3. Save to DB
    const subscriber = new Subscriber({ email });
    await subscriber.save();


        res.status(200).json({ message: "Subscribed successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;