import { Router } from "express";

const creditController = require("../controllers/creditController");
const creditRoutes = Router();
/**
 * @swagger
 * tags:
 *   name: Credits
 *   description: API для управления кредитными договорами
 */

/**
 * @route POST /credits
 * @description Добавить новый кредитный договор
 */

creditRoutes.post("/credits", creditController.addCredit);
/**
 * @route GET /credits/:clientId
 * @description Получить кредитные договоры по ID клиента
 */
creditRoutes.get("/credits/:clientId", creditController.getCreditsByClient);

/**
 * @route PUT /credits/:creditId
 * @description Обновить кредитный договор
 */
creditRoutes.put("/credits/:creditId", creditController.updateCredit);

export default creditRoutes;
