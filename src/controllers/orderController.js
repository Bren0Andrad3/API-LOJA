import orders from "../models/Order.js";
import guid from "guid"



class OrderController {

    static listarOrder = (req,res)=>{
        orders.find()
        .populate('customer', 'name')
        .populate('items.product','title')
        .exec((err, order)=>{
            if(!err){
                res.status(200).json(order)
           
            }else{
                res.status(401).send({message: `${err.message} - falha ao listar .`})
            }
            
        })
    }

    static CadastrarOrder = (req, res) => {
        let order = new orders();
        order.customer = req.body.customer
        order.number = guid.raw().substring(0,6)
        order.items = req.body.items

        order.save((err) => {

        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar .`})
        } else {
            res.status(201).send(order.toJSON())
        }
        })
    }

    static atualizarOrder = (req, res) => {
       var id = req.params.id

        orders.findByIdAndUpdate(id, {$set: req.body},(err) => {

        if(!err) {
            res.status(200).send({message: "Pedito Atualizado com sucesso"})
        } else {
            res.status(500).send(err)
        }
        })
    }

    static excluirOrder = (req, res) => {
        var id = req.params.id

        orders.findByIdAndDelete(id,(err) => {

        if(!err) {
            res.status(201).send({message: "Pedito removido com sucesso"})
        } else {
            res.status(500).send(err)
        }
        })
    }

    

}

export default OrderController