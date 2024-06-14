import { Router } from "express";
import { getAccountsByClient } from "../controllers/accountController";

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
accountRoutes.get("/accounts/:clientId", getAccountsByClient);

export default accountRoutes;
