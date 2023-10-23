const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");

const translateModel = {
  translateText: async (textToTranslate, sourceLanguage, targetLanguage) => {
    const client = new TranslateClient();

    const input = {
        Text: textToTranslate,
        SourceLanguageCode: sourceLanguage,
        TargetLanguageCode: targetLanguage,
    };

    const command = new TranslateTextCommand(input);
    const response = await client.send(command);
    return response.TranslatedText;
  }
}

module.exports = {
    translateModel
};