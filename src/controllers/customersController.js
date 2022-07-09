import customers from "../models/Customer.js";
import md5 from "md5";




class CustomerController {

    static listarCustomer = (req,res)=>{
        customers.find((err, order)=>{
            if(!err){
                res.status(200).send(order)
            }else{
                res.status(401).send({message: `${err.message} - falha ao listar .`})
            }
            
        })
    }

    static CadastrarCustomer = (req, res) => {
        let customer = new customers();
        customer.name = req.body.name
        customer.email = req.body.email
        customer.password = md5(req.body.password + global.SALT_KEY)

        customer.save((err) => {

        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar .`})
        } else {

    
            res.status(201).send({
                message: 'Cliente cadastrado com sucesso!'
            });
            
            
        }
        })
    }

    static atualizarCustomer = (req, res) => {
        const id = req.params.id

        customers.findByIdAndUpdate(id, {$set: req.body}, (err)=>{

            if(!err){
                res.status(200).send({message: 'Cliente atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }

        })
    }

    static excluirCustomer = (req, res) => {
        const id = req.params.id

        customers.findByIdAndRemove(id, (err)=>{

            if(!err){
                res.status(200).send({message: 'Cliente removido com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })   
    }
}

export default CustomerController
