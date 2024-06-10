import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /accounts/{clientId}:
 *   get:
 *     summary: Get accounts by client ID
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
 *         description: List of accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Account'
 */
exports.getAccountsByClient = async (req: Request, res: Response) => {
  const { clientId } = req.params;
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
