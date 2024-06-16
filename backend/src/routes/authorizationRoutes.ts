import { Router } from "express";
import { login } from "../controllers/authorizationController";

const accountRoutes = Router();
/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Авторизация
 */

/**
 * @route POST /login/:clientName
 * @description Авторизироваться
 */
accountRoutes.post("/login/:clientName", login);

export default accountRoutes;
