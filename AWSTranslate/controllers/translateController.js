const { translateModel } = require('../models/translateModel');

async function translateText(req, res) {
    const textToTranslate = req.body.text;
    if (textToTranslate.trim() === '') {
        res.render('home', { translate: '', textToTranslate });
    } else {
        const sourceLanguage = 'auto';
        const targetLanguage = 'en';
        try {
            const translate = await translateModel.translateText(textToTranslate, sourceLanguage, targetLanguage);
            res.render('home', { translate, textToTranslate });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro na tradução');
        }
    }
}

module.exports = {
    translateText
};
