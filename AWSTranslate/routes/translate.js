const express = require('express');
const router = express.Router();
const translateController = require('../controllers/translateController');

router.get('/', (req, res) => {
    res.render('home', { traducao: '' });
});

router.post('/translate', translateController.translateText);

module.exports = router;
