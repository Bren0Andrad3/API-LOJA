import express from "express";
import loginController from "../controllers/loginController.js";

const router = express.Router();

router
  //.get("/customers", CustomerController.loginController)
  //.get("/Order/busca", OrderController.listarLivroPorEditora)
  //.get("/Order/:id", OrderController.listarLivroPorId)
  .post("/login", loginController.Loginathentication)
  //.put("/customers/:id", CustomerController.atualizarCustomer)
  //.delete("/customers/:id", CustomerController.excluirCustomer)

export default router;   