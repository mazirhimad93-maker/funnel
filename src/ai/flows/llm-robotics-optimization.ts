// Defines the LLMRoboticsOptimization flow for optimizing robotic systems using LLMs.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LLMRoboticsOptimizationInputSchema = z.object({
  environmentFeedback: z
    .string()
    .describe('Feedback from the environment, including sensor data.'),
  taskRequirements: z
    .string()
    .describe('The specific requirements for the robot task.'),
});
export type LLMRoboticsOptimizationInput = z.infer<
  typeof LLMRoboticsOptimizationInputSchema
>;

const LLMRoboticsOptimizationOutputSchema = z.object({
  optimizedInstructions: z
    .string()
    .describe(
      'Optimized instructions for the robot, based on the environment feedback and task requirements.'
    ),
});
export type LLMRoboticsOptimizationOutput = z.infer<
  typeof LLMRoboticsOptimizationOutputSchema
>;

export async function optimizeRobotics(
  input: LLMRoboticsOptimizationInput
): Promise<LLMRoboticsOptimizationOutput> {
  return llmRoboticsOptimizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'llmRoboticsOptimizationPrompt',
  input: {schema: LLMRoboticsOptimizationInputSchema},
  output: {schema: LLMRoboticsOptimizationOutputSchema},
  prompt: `You are an expert robotics engineer. Based on the environment feedback and task requirements, provide optimized instructions for the robot.

Environment Feedback: {{{environmentFeedback}}}
Task Requirements: {{{taskRequirements}}}

Optimized Instructions:`,
});

const llmRoboticsOptimizationFlow = ai.defineFlow(
  {
    name: 'llmRoboticsOptimizationFlow',
    inputSchema: LLMRoboticsOptimizationInputSchema,
    outputSchema: LLMRoboticsOptimizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
