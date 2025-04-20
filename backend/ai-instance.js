const { genkit } = require('genkit');
const { googleAI } = require('@genkit-ai/googleai');

const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAI({
      apiKey: 'AIzaSyCxurNdauxMIYesuDSuNl_i_y_MNz9_zXQ',  // API key
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});

module.exports = {
  ai
}