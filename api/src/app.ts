/*
#   server of application, the init
*/
import express, { Express } from "express";
import routes from './routes';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api',routes);

process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    process.exit(0);

});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
