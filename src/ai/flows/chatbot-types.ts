import { z } from 'zod';

// Define the schema for a single message in the chat history
export const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;

// Define the input schema for the chatbot flow
export const ChatbotInputSchema = z.object({
  history: z.array(ChatMessageSchema),
  message: z.string(),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

// Define the output schema for the chatbot flow
export const ChatbotOutputSchema = z.string();
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;
