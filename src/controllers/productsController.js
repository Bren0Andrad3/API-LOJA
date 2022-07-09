import products from "../models/Product.js";


class ProductController {

    static listarProduct = (req,res)=>{
        products.find((err,order)=>{
            if(!err){
                res.status(200).send(order)
            }else{
                res.status(401).send({message: `${err.message} - falha ao listar .`})
            }
            
        })
    }

    static CadastrarProduct = (req, res) => {
        let product = new products(req.body);

        product.save((err) => {

            if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar .`})
            } else {
            res.status(201).send(product.toJSON())
            }
        })
    }

    static atualizarProduct = (req, res) => {
        
        const id = req.params.id
        products.findByIdAndUpdate(id,{$set: req.body},(err) => {

            if(!err) {
            res.status(200).send({message: 'Produto atualizado com sucesso'})
            } else {
            res.status(401).send({message: err})
            }
        })
    }

    static excluirProduct = (req, res) => {
        
        const id = req.params.id
        products.findByIdAndRemove(id,(err) => {

            if(!err) {
            res.status(200).send({message: 'Produto removido com sucesso'})
            } else {
            res.status(401).send({message: err})
            }
        })
    }

    

}

export default ProductController