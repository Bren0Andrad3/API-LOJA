import express from "express";
import CustomerController from "../controllers/customersController.js";

const router = express.Router();

router
  .get("/customers", CustomerController.listarCustomer)
  //.get("/Order/busca", OrderController.listarLivroPorEditora)
  //.get("/Order/:id", OrderController.listarLivroPorId)
  .post("/customers", CustomerController.CadastrarCustomer)
  .put("/customers/:id", CustomerController.atualizarCustomer)
  .delete("/customers/:id", CustomerController.excluirCustomer)

export default router;   