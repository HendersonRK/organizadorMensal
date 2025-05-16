/*
# Logica de acesso ao banco de dados
*/
import { PrismaClient } from "@prisma/client";
import { CreateTransactionDTO } from "../dtos/CreateTransationDTO";

const prisma = new PrismaClient();

class TransactionRepository {
    async create(data: CreateTransactionDTO & {createdAt: Date}) {
        return prisma.transaction.create({
            data: {
                amount: data.amount,
                type: data.type,
                category: data.category,
                date: new Date(data.date),
                createdAt: data.createdAt,

            },

        });

    }

    async findAll() {
        return prisma.transaction.findMany();

    }

}

export default new TransactionRepository();