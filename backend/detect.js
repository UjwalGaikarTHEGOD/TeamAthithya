const {ai} = require("./ai-instance"); 
const {z} = require("genkit");

const DetectPestFromImageInputSchema = z.object({  //INPUT SCHEMA
  photoUrl: z.string().describe('The URL of the crop image.')
});

const DetectPestFromImageOutputSchema = z.object({  // output schema
  pestName: z.string().describe('The name of the detected pest.'),
  severity: z.enum(['low', 'medium', 'high']).describe('The severity of the pest infestation.'),
  threatLevel: z.string().describe('The threat level of the pest.'),
  impact: z.string().describe('The impact of the pest on the crop.'),
  ecoFriendlySolutions: z.array(z.string()).describe('A list of eco-friendly solutions to combat the pest.'),
});

async function detectPestFromImage(input) {
  return detectPestFromImageFlow(input);
}

const detectPestFromImagePrompt = ai.definePrompt({   // PROMPT TO API
  name: 'detectPestFromImagePrompt',
  input: {
    schema: z.object({
      photoUrl: z.string().describe('The URL of the crop image.')
    }),
  },
  output: {
    schema: z.object({
      pestName: z.string().describe('The name of the detected pest.'),
      severity: z.enum(['low', 'medium', 'high']).describe('The severity of the pest infestation.'),
      threatLevel: z.string().describe('The threat level of the pest.'),
      impact: z.string().describe('The impact of the pest on the crop.'),
      ecoFriendlySolutions: z.array(z.string()).describe('A list of eco-friendly solutions to combat the pest.')
    }),
  },
  prompt: `You are an expert in identifying crop pests and recommending eco-friendly solutions.

  Analyze the image of the crop and identify any pests present. Provide the pest name, severity (low, medium, high), threat level, and impact on the crop. Also, suggest eco-friendly solutions to combat the pest.

  Image: {{media url=photoUrl contentType="image/jpeg"}}`
});

const detectPestFromImageFlow = ai.defineFlow(  // flow
  {
    name: 'detectPestFromImageFlow',
    inputSchema: DetectPestFromImageInputSchema,
    outputSchema: DetectPestFromImageOutputSchema
  },
  async (input) => {
    const { output } = await detectPestFromImagePrompt(input);
    return output;
  }
);

module.exports = {
  detectPestFromImage
}
