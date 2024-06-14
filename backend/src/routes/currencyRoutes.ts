import { Router } from "express";
import { updateCurrencyRate } from "../controllers/currencyController";
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
currencyRoutes.put("/currencies/:currencyId", updateCurrencyRate);

export default currencyRoutes;
