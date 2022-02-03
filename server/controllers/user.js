const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const {createToken} =require('../isAuth.js');


  module.exports.signup =async (req, res)=>{
    const { name, email, password } = req.body
    try{
        if(!email || !password){
            res.status(400).json({message: 'senha e email não podem estar em branco.'}); 
        }
        const userExists = await User.findOne({ email })
        if (userExists) {
          res.status(400).json({ message: 'usuario já existe'})
        }
       const user = await User.create({name, email,password})
       console.log("user controlerr criado ",user)
        if (user) {
          const token = createToken(user._id)
          res.status(201).json({
          id: user._id,
          name: user.name,
          email: user.email,
          token: token,
          message:"usuario criado com sucesso"
        });
     }
    }catch(error) {
    res.status(400).json({error, message: 'erro ao criar usuario'})
    console.log(error)
   }
 }

  module.exports.login = async (req, res) => { 
    const { email, password } = req.body;
    try{    
       if(!email || !password){
        res.status(400).json({message: 'senha e email não podem estar em branco.'})
       }
   
        User.findOne({ email: email }).then(user => {
          if (!user) {
              return res.status(400).json({ message: 'Email não encontrado!' })
          }
          bcrypt
              .compare(password, user.password)
              .then(isMatch => {
                  if (!isMatch) {
                  return  res.status(400).json({ message: 'Sennha incorreta!' })
                  } 
                const token = createToken(user._id)
                  
              res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token:token,
                message:"Logado  com sucesso"
              });  
            })          
         })

      }catch(error){ 
            console.log(err);
            res.status(400).json({error, message: 'Erro ao logar!' })
       }
     }  
   // //  
    //     const user = await User.login(email,password);
    //     if (!user) {
    //      return res.status(400).json({ message: 'usuario não encontrado'});
    //     }
        
    //     const token = createToken(user._id);
    //     res.status(200).json({
    //       _id: user._id,
    //        name: user.name,
    //        email: user.email,
    //       // isAdmin: user.isAdmin,
    //       token: createToken(user._id),
    //       message:"Logado  com sucesso"
    //     });
    //   // res.status(200).json(console.log(res));
    //   }catch(err) {
    //     console.log(err);
    //     res.status(400).json({message: "Erro ao logar",err});
    // }
   
