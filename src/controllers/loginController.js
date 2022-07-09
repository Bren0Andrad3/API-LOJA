import customers from "../models/Customer.js";


class loginController {


    static Loginathentication = (req, res) => {
        
        customers.find(x.email == req.body.email).exec((err)=>{
            
            if(err != undefined) {
                customers.find(x => x.password == req.body.password).exec((err)=>{
                    if(err != undefined){
                        res.status(200).send({message: "Acesso permitido"})
                    }else{
                        res.status(400).send({message: "Senha inválida"})
                    }
                })
            }else{
                res.status(400).send({message: "Email inválido"})
            }

        })

    }

}

export default loginController