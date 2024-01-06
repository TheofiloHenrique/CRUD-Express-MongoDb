import Contact from "../models/Contact.js";

async function contactValidations(req,res,next){
    if (!req.body.name) return res.status(422).json({ message: "O nome é obrigatório!" });
    if (!req.body.age) return res.status(422).json({ message: "A idade é obrigatória!" });
    if (!req.body.address) return res.status(422).json({ message: "O endereço é obrigatório!" });
    if (!req.body.email) return res.status(422).json({ message: "O email é obrigatório!" });
    
    /*Checando so email já foi registrado */
    const contactExist = await Contact.findOne({ email: req.body.email });
    if (contactExist) return res.status(422).json({ message: "Este Email já está em uso!" });
    
    next();
  
  }

  export default contactValidations