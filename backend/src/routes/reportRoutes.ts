import { Router } from "express";
const reportController = require("../controllers/reportController");
const reportRoutes = Router();
/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: API для создания отчетов
 */

/**
 * @route GET /reports/bank/:bankId
 * @description Получить кредиты по ID банка
 */
reportRoutes.get("/reports/bank/:bankId", reportController.getCreditsByBank);
/**
 * @route GET /reports/currency/:currencyCode
 * @description Получить кредиты по коду валюты
 */
reportRoutes.get(
  "/reports/currency/:currencyCode",
  reportController.getCreditsByCurrency
);
/**
 * @route GET /reports/expert/:expertId
 * @description Получить кредиты по ID кредитного эксперта
 */
reportRoutes.get(
  "/reports/expert/:expertId",
  reportController.getCreditsByExpert
);
/**
 * @route GET /reports/purpose/:bankId/:purposeId
 * @description Получить кредиты по ID банка и цели кредита
 */
reportRoutes.get(
  "/reports/purpose/:bankId/:purposeId",
  reportController.getCreditsByPurposeAndBank
);

export default reportRoutes;
