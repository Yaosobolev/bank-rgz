import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /currencies/{currencyId}:
 *   put:
 *     summary: Update currency exchange rate
 *     tags: [Currencies]
 *     parameters:
 *       - in: path
 *         name: currencyId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The currency ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               exchangeRate:
 *                 type: number
 *     responses:
 *       200:
 *         description: The updated currency
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Currency'
 */
exports.updateCurrencyRate = async (req: Request, res: Response) => {
  const { currencyId } = req.params;
  const { exchangeRate } = req.body;
  const updatedCurrency = await prisma.currency.update({
    where: { id: parseInt(currencyId) },
    data: { exchangeRate },
  });
  res.json(updatedCurrency);
};
