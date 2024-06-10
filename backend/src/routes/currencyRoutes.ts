import { Router } from "express";
const currencyController = require("../controllers/currencyController");

const currencyRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Currencies
 *   description: API для управления валютами
 */

/**
 * @route PUT /currencies/:currencyId
 * @description Обновить курс валюты
 */
currencyRoutes.put(
  "/currencies/:currencyId",
  currencyController.updateCurrencyRate
);

export default currencyRoutes;
