import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"
import orders from "./orderRoutes.js"
import customers from "./customersRoutes.js"
import products from "./productsRoutes.js"
import login from "./loginRoutes.js"


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  })

  app.use(
    express.json(),
    livros,
    autores,
    orders,
    customers,
    products,
    login
  )
}

export default routes