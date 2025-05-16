/*
# Data transfer objects para tipagem de entrada e saída de dados
*/
import { z } from 'zod';

export const CreateTransactionSchema = z.object({
    amount: z.number().positive(),
    type: z.enum(['income', 'expense']), //tipo da transação receita ou despesa
    category: z.string().min(1),
    date: z.string().datetime(),
    
});

export type CreateTransactionDTO = z.infer<typeof CreateTransactionSchema>;