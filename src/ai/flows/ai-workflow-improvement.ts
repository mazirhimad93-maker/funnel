'use server';

/**
 * @fileOverview AI-powered workflow improvement suggestions.
 *
 * - aiWorkflowImprovement - A function that suggests workflow improvements using AI reasoning.
 * - AIWorkflowImprovementInput - The input type for the aiWorkflowImprovement function.
 * - AIWorkflowImprovementOutput - The return type for the aiWorkflowImprovement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIWorkflowImprovementInputSchema = z.object({
  workflowDescription: z
    .string()
    .describe('Detailed description of the existing workflow.'),
  businessGoals: z
    .string()
    .describe('The key business goals the workflow should achieve.'),
  currentChallenges: z
    .string()
    .describe('The current operational challenges with the workflow.'),
});
export type AIWorkflowImprovementInput = z.infer<
  typeof AIWorkflowImprovementInputSchema
>;

const AIWorkflowImprovementOutputSchema = z.object({
  suggestedImprovements: z
    .string()
    .describe(
      'A list of suggested improvements to the workflow leveraging AI automation.'
    ),
  estimatedImpact: z
    .string()
    .describe(
      'An estimate of the impact of the suggested improvements on business goals.'
    ),
  implementationSteps: z
    .string()
    .describe('A detailed list of steps to implement the suggested changes.'),
});
export type AIWorkflowImprovementOutput = z.infer<
  typeof AIWorkflowImprovementOutputSchema
>;

export async function aiWorkflowImprovement(
  input: AIWorkflowImprovementInput
): Promise<AIWorkflowImprovementOutput> {
  return aiWorkflowImprovementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiWorkflowImprovementPrompt',
  input: {schema: AIWorkflowImprovementInputSchema},
  output: {schema: AIWorkflowImprovementOutputSchema},
  prompt: `You are an expert operations manager with a deep understanding of AI automation. Given the following description of a workflow, the business goals it should achieve, and the current challenges it faces, suggest improvements to the workflow leveraging AI. Provide estimated impact and concrete implementation steps.

Workflow Description: {{{workflowDescription}}}
Business Goals: {{{businessGoals}}}
Current Challenges: {{{currentChallenges}}}

Instructions: Provide the suggestions for the workflow, estimate the impact, and list the implementation steps to improve the workflow and make operations scalable.
Suggestions: 
Impact:
Steps:`,
});

const aiWorkflowImprovementFlow = ai.defineFlow(
  {
    name: 'aiWorkflowImprovementFlow',
    inputSchema: AIWorkflowImprovementInputSchema,
    outputSchema: AIWorkflowImprovementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
