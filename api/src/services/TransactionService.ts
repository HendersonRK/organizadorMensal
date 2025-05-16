/*
# logica de negocio
*/
import { CreateTransactionDTO } from "../dtos/CreateTransationDTO";
import TransactionRepository from "../repositories/TransactionRepository";

class TransactionService {
    async create(data: CreateTransactionDTO) {
        const transaction = await TransactionRepository.create({
            //pode colocar validações adicionais, dependendo da regra de negocio.
            ...data,
            createdAt: new Date(),

        });
        return transaction;

    }

    async list() {
        const transactions = await TransactionRepository.findAll();
        return transactions;

    }

}

export default new TransactionService();