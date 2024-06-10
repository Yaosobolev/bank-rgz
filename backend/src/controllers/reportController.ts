import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /reports/bank/{bankId}:
 *   get:
 *     summary: Get credits by bank ID
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: bankId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The bank ID
 *     responses:
 *       200:
 *         description: List of credits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CreditContract'
 */
exports.getCreditsByBank = async (req: Request, res: Response) => {
  const { bankId } = req.params;
  const credits = await prisma.creditContract.findMany({
    where: {
      account: {
        bank: {
          id: parseInt(bankId),
        },
      },
    },
    include: {
      client: { include: { person: true } },
      creditExpert: { include: { person: true } },
      creditPurpose: true,
      account: { include: { bank: true } },
    },
  });
  res.json(credits);
};

/**
 * @swagger
 * /reports/currency/{currencyCode}:
 *   get:
 *     summary: Get credits by currency code
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: currencyCode
 *         schema:
 *           type: string
 *         required: true
 *         description: The currency code
 *     responses:
 *       200:
 *         description: List of credits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CreditContract'
 */
exports.getCreditsByCurrency = async (req: Request, res: Response) => {
  const { currencyCode } = req.params;
  const credits = await prisma.creditContract.findMany({
    where: {
      account: {
        currency: {
          code: currencyCode,
        },
      },
    },
    include: {
      client: { include: { person: true } },
      creditExpert: { include: { person: true } },
      creditPurpose: true,
      account: { include: { currency: true } },
    },
  });
  res.json(credits);
};

/**
 * @swagger
 * /reports/expert/{expertId}:
 *   get:
 *     summary: Get credits by expert ID
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: expertId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The expert ID
 *     responses:
 *       200:
 *         description: List of credits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CreditContract'
 */
exports.getCreditsByExpert = async (req: Request, res: Response) => {
  const { expertId } = req.params;
  const credits = await prisma.creditContract.findMany({
    where: { creditExpertId: parseInt(expertId) },
    include: {
      client: { include: { person: true } },
      creditExpert: { include: { person: true } },
      creditPurpose: true,
      account: { include: { bank: true } },
    },
  });
  res.json(credits);
};

/**
 * @swagger
 * /reports/purpose/{bankId}/{purposeId}:
 *   get:
 *     summary: Get credits by bank ID and purpose ID
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: bankId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The bank ID
 *       - in: path
 *         name: purposeId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The purpose ID
 *     responses:
 *       200:
 *         description: List of credits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CreditContract'
 */
exports.getCreditsByPurposeAndBank = async (req: Request, res: Response) => {
  const { bankId, purposeId } = req.params;
  const credits = await prisma.creditContract.findMany({
    where: {
      account: {
        bank: {
          id: parseInt(bankId),
        },
      },
      creditPurposeId: parseInt(purposeId),
    },
    include: {
      client: { include: { person: true } },
      creditExpert: { include: { person: true } },
      creditPurpose: true,
      account: { include: { bank: true } },
    },
  });
  res.json(credits);
};
