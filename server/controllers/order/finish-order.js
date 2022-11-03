import CreateOrderRepository from '../../repository/order/create-order-repository.js';
const createOrderRepository = new CreateOrderRepository();

class FinishOrder {
  async execute(httpRequest) {
    const { orderProducts, somaCart, user } = httpRequest.body;
    console.log(
      'sou //////////////////////////////////////////////////////////////////////// controller finishOrder',
      orderProducts,
      somaCart,
      user
    );
    const order = await createOrderRepository.createOrder({
      orderProducts,
      somaCart,
      user,
    });

    return {
      statusCode: 200,
      body: order,
    };
  }
}
export default FinishOrder;
