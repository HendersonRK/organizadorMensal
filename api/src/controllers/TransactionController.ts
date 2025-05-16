/*
# Logica de entrada das requisições
*/
import { Request, Response } from 'express';
import { CreateTransactionSchema } from '../dtos/CreateTransationDTO';
import TransactionService from '../services/TransactionService';

class TransactionController {
    async create(req: Request, res: Response) {
        try {
            const data = CreateTransactionSchema.parse(req.body);
            const transaction = await TransactionService.create(data);
            return res.status(201).json(transaction);

        } catch (error) {
            return res.status(400).json({ error: error.message });

        }

    }

    async list(req: Request, res: Response) {
        try {
            const transactions = await TransactionService.list();
            return res.status(200).json(transactions);

        } catch (error) {
            return res.status(500).json({ error: 'Falha ao listar as transações', message: error.message })
        
        }

    }

}

export default new TransactionController();