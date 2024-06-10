import { Router } from "express";
const accountController = require("../controllers/accountController");

const accountRoutes = Router();
/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: API для управления счетами
 */

/**
 * @route GET /accounts/:clientId
 * @description Получить счета по ID клиента
 */
accountRoutes.get("/accounts/:clientId", accountController.getAccountsByClient);

export default accountRoutes;
