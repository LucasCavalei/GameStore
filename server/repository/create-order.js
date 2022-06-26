import Order from "../models/order.js";

class OrderRepository {
  async createOrder({ orderProducts, somaCart, user }) {
    // const = data;
    const order = await Order.create({
      orderProducts,
      somaCart,
      user,
    });
    //   await newOrder.save((err, order) => {
    //   if (err) {
    //   console.log("su erroo");
    //     console.log(err);
    //     res.status(400).json({ message: "Erro ao salvar pedido", err });
    //   }
    //   return order;
    //       console.log("sou order controller", order);
    //   res.status(201).json({
    //     orderId: order.id,
    //     total: order.somaCart,
    //     user: order.user,
    //     qty: order.orderProducts.lenght,
    //     message: "Compra finalizada. Obrigado por comprar conosco!",
    //   });
    // });
    return order;
  }
}

export default OrderRepository;
