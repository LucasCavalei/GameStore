const Cart = require("../models/cart");
const order = require("../models/order");
const Order = require("../models/order");


module.exports.get_order = async(req, res) =>{
res.send("Im at Order Controller");
    //   try{
//        const orderData = await Order.find();
//         res.json(orderData);

// }catch(error){
//   res.status(404).json({message: error.message})
// }
}

module.exports.post_order = async( req,res) => {
  //  console.log("Im controller", req.body);
          const {orderProducts,somaCart,user}=req.body;
          const newOrder = await new Order({ 
              orderProducts,somaCart,user
            }); 
            try{''
                newOrder. save((err, order) => {
                  if(err){
                    res.status(400).json({message: "Erro ao salvar pedido",err});
                  }
                  console.log("sou order controller",order)
                  res.status(201).json({
                    orderId: order.id,
                    total:order.somaCart,
                    user:order.user,
                    qty: order.orderProducts.lenght,
                     message: "Compra finalizada. Obrigado por comprar conosco!"});
                  });
  }catch(err){
    res.status(400).json({message: "Voce precisa estar logado para realiza a compra",err});
  }
}
          // ]
  //   const minhaOrder = new Order({
  //     produtos:gamesArray
  //   });
  //   minhaOrder.save()
  //   .then(() => res.json("Exercise added!"))
  //   .catch(err => res.status(400).json("Error: " + err));


//   //    try{
//   //     const newOrder = new Order({
//   // produtos: req.body.meuObjeto
//   //     });
//   //       newOrder
//   //         .save() 
//   //           res.status(201).json(newOrder);
//   //           console.log("sou do cart", newOrder);
//   //       }catch(err) {
//   //           console.log(err);
//   //           res.status(500).json({
//   //             error: err
//   //           });
//   //         };
