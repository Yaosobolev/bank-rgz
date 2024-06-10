import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /credits:
 *   post:
 *     summary: Add a new credit contract
 *     tags: [Credits]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number:
 *                 type: string
 *               issueDate:
 *                 type: string
 *                 format: date-time
 *               creditAmount:
 *                 type: number
 *               usagePeriod:
 *                 type: integer
 *               interestRate:
 *                 type: number
 *               monthlyPayment:
 *                 type: number
 *               clientId:
 *                 type: integer
 *               creditExpertId:
 *                 type: integer
 *               creditPurposeId:
 *                 type: integer
 *               accountId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The created credit contract
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreditContract'
 */
exports.addCredit = async (req: Request, res: Response) => {
  const {
    number,
    issueDate,
    creditAmount,
    usagePeriod,
    interestRate,
    monthlyPayment,
    clientId,
    creditExpertId,
    creditPurposeId,
    accountId,
  } = req.body;
  const newCredit = await prisma.creditContract.create({
    data: {
      number,
      issueDate,
      creditAmount,
      usagePeriod,
      interestRate,
      monthlyPayment,
      clientId,
      creditExpertId,
      creditPurposeId,
      accountId,
    },
  });
  res.json(newCredit);
};

/**
 * @swagger
 * /credits/{clientId}:
 *   get:
 *     summary: Get credit contracts by client ID
 *     tags: [Credits]
 *     parameters:
 *       - in: path
 *         name: clientId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The client ID
 *     responses:
 *       200:
 *         description: List of credit contracts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CreditContract'
 */
exports.getCreditsByClient = async (req: Request, res: Response) => {
  const { clientId } = req.params;
  const credits = await prisma.creditContract.findMany({
    where: { clientId: parseInt(clientId) },
    include: {
      client: true,
      creditExpert: true,
      creditPurpose: true,
      account: true,
    },
  });
  res.json(credits);
};

/**
 * @swagger
 * /credits/{creditId}:
 *   put:
 *     summary: Update a credit contract
 *     tags: [Credits]
 *     parameters:
 *       - in: path
 *         name: creditId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The credit ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               creditAmount:
 *                 type: number
 *               usagePeriod:
 *                 type: integer
 *               interestRate:
 *                 type: number
 *               monthlyPayment:
 *                 type: number
 *     responses:
 *       200:
 *         description: The updated credit contract
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreditContract'
 */
exports.updateCredit = async (req: Request, res: Response) => {
  const { creditId } = req.params;
  const { creditAmount, usagePeriod, interestRate, monthlyPayment } = req.body;
  const updatedCredit = await prisma.creditContract.update({
    where: { id: parseInt(creditId) },
    data: {
      creditAmount,
      usagePeriod,
      interestRate,
      monthlyPayment,
    },
  });
  res.json(updatedCredit);
};
