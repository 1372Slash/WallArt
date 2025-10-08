'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a loading animation suggestion based on the type of content being loaded.
 *
 * It exports:
 *   - `generateLoadingAnimation`: A function that takes content type as input and returns animation name suggestion.
 *   - `GenerateLoadingAnimationInput`: The input type for the `generateLoadingAnimation` function.
 *   - `GenerateLoadingAnimationOutput`: The output type for the `generateLoadingAnimation` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLoadingAnimationInputSchema = z.object({
  contentType: z.enum(['image', 'video', 'text']).describe('The type of content that is being loaded.'),
});
export type GenerateLoadingAnimationInput = z.infer<typeof GenerateLoadingAnimationInputSchema>;

const GenerateLoadingAnimationOutputSchema = z.object({
  animationName: z.string().describe('The name of the suggested loading animation.'),
});
export type GenerateLoadingAnimationOutput = z.infer<typeof GenerateLoadingAnimationOutputSchema>;

export async function generateLoadingAnimation(input: GenerateLoadingAnimationInput): Promise<GenerateLoadingAnimationOutput> {
  return generateLoadingAnimationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLoadingAnimationPrompt',
  input: {schema: GenerateLoadingAnimationInputSchema},
  output: {schema: GenerateLoadingAnimationOutputSchema},
  prompt: `You are a creative animation expert. Based on the content type being loaded, suggest a suitable GSAP animation name for a loading screen.

Content Type: {{{contentType}}}

Consider animations like scaling, blurring, cutting, morphing, slicing, and motion effects using only solid colors (black and white). Give a name for the animation. Just return the name of the animation, do not add any additional text.`, 
});

const generateLoadingAnimationFlow = ai.defineFlow(
  {
    name: 'generateLoadingAnimationFlow',
    inputSchema: GenerateLoadingAnimationInputSchema,
    outputSchema: GenerateLoadingAnimationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
