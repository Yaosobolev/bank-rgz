import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /credits:
 *   post:
 *     summary: Добавить новый кредитный договор
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
 *         description: Созданный кредитный договор
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreditContract'
 */
export const addCredit = async (req: Request, res: Response) => {
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
 *     summary: Получить кредитные договоры по идентификатору клиента
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
 *         description: Перечень кредитных договоров
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CreditContract'
 */
export const getCreditsByClient = async (req: Request, res: Response) => {
  const { clientId } = req.params;
  const credits = await prisma.creditContract.findMany({
    where: { clientId: parseInt(clientId) },
    include: {
      client: { include: { person: true } },
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
 *     summary: Обновить кредитный договор
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
 *         description: Обновленный кредитный договор
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreditContract'
 */
export const updateCredit = async (req: Request, res: Response) => {
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
