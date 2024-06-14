import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /accounts/{clientId}:
 *   get:
 *     summary: Получить аккаунты по идентификатору клиента
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: clientId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The client ID
 *     responses:
 *       200:
 *         description: Список аккаунтов
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Account'
 */
export const getAccountsByClient = async (req: Request, res: Response) => {
  const { clientId } = req.params;
  console.log(clientId);
  const accounts = await prisma.account.findMany({
    where: {
      creditContracts: {
        some: {
          clientId: parseInt(clientId),
        },
      },
    },
    include: {
      currency: true,
    },
  });
  res.json(accounts);
};
