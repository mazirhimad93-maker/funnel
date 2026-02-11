'use server';
/**
 * @fileOverview An AI agent to automatically generate personalized sales leads based on target customer profiles.
 *
 * - generateSalesLeads - A function that handles the sales lead generation process.
 * - GenerateSalesLeadsInput - The input type for the generateSalesLeads function.
 * - GenerateSalesLeadsOutput - The return type for the generateSalesLeads function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSalesLeadsInputSchema = z.object({
  targetCustomerProfile: z
    .string()
    .describe('Description of the target customer profile, including industry, company size, and key characteristics.'),
  numberOfLeads: z
    .number()
    .default(5)
    .describe('The number of sales leads to generate.'),
});
export type GenerateSalesLeadsInput = z.infer<typeof GenerateSalesLeadsInputSchema>;

const GenerateSalesLeadsOutputSchema = z.object({
  salesLeads: z.array(
    z.object({
      name: z.string().describe('The name of the potential lead.'),
      title: z.string().describe('The job title of the potential lead.'),
      company: z.string().describe('The company the lead works for.'),
      contactInformation: z.string().describe('Contact information for the lead, such as email or LinkedIn profile URL.'),
      reasonForFit: z
        .string()
        .describe('A brief explanation of why this lead is a good fit based on the target customer profile.'),
    })
  ).describe('A list of generated sales leads.'),
});
export type GenerateSalesLeadsOutput = z.infer<typeof GenerateSalesLeadsOutputSchema>;

export async function generateSalesLeads(input: GenerateSalesLeadsInput): Promise<GenerateSalesLeadsOutput> {
  return generateSalesLeadsFlow(input);
}

const generateSalesLeadsPrompt = ai.definePrompt({
  name: 'generateSalesLeadsPrompt',
  input: {schema: GenerateSalesLeadsInputSchema},
  output: {schema: GenerateSalesLeadsOutputSchema},
  prompt: `You are an AI-powered sales lead generator. Your task is to generate a list of potential sales leads based on a provided target customer profile.

Target Customer Profile: {{{targetCustomerProfile}}}
Number of Leads to Generate: {{{numberOfLeads}}}

Generate a list of sales leads that includes their name, job title, company, contact information, and a brief explanation of why they are a good fit based on the target customer profile.

Output the sales leads as a JSON array.

Example:
```json
{
  "salesLeads": [
    {
      "name": "John Doe",
      "title": "Marketing Manager",
      "company": "Acme Corp",
      "contactInformation": "john.doe@example.com",
      "reasonForFit": "John is a marketing manager at a company that fits the target customer profile."
    }
  ]
}
```

Follow the example output format, and generate {{numberOfLeads}} leads.
`,
});

const generateSalesLeadsFlow = ai.defineFlow(
  {
    name: 'generateSalesLeadsFlow',
    inputSchema: GenerateSalesLeadsInputSchema,
    outputSchema: GenerateSalesLeadsOutputSchema,
  },
  async input => {
    const {output} = await generateSalesLeadsPrompt(input);
    return output!;
  }
);
