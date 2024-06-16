import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /login/{clientName}:
 *   post:
 *     summary: Авторизироваться
 *     tags: [Login]
 *     parameters:
 *       - in: path
 *         name: clientName
 *         schema:
 *           type: string
 *         required: true
 *         description: The client Name
 *     responses:
 *       200:
 *         description: Пользователь
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 */
export const login = async (req: Request, res: Response) => {
  const { clientName } = req.params;
  const client = await prisma.person.findFirst({
    where: {
      firstName: clientName,
    },
  });
  res.json(client);
};
