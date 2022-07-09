import express from "express";
import ProductController from "../controllers/productsController.js";

const router = express.Router();

router
  .get("/products", ProductController.listarProduct)
  //.get("/Order/busca", OrderController.listarLivroPorEditora)
  //.get("/Order/:id", OrderController.listarLivroPorId)
  .post("/products", ProductController.CadastrarProduct)
  .put("/products/:id", ProductController.atualizarProduct)
  .delete("/products/:id", ProductController.excluirProduct)

export default router;   