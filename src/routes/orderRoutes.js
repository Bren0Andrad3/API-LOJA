import express from "express";
import OrderController from "../controllers/orderController.js";

const router = express.Router();

router
  .get("/orders", OrderController.listarOrder)
  //.get("/Order/busca", OrderController.listarLivroPorEditora)
  //.get("/Order/:id", OrderController.listarLivroPorId)
  .post("/orders", OrderController.CadastrarOrder)
  .put("/Order/:id", OrderController.atualizarOrder)
  .delete("/Order/:id", OrderController.excluirOrder)

export default router;   