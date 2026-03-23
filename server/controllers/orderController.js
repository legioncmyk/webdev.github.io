import { storeModel } from '../models/storeModel.js';

export async function createOrder(req, res) {
  const order = await storeModel.addOrder({ ...req.body, createdAt: new Date().toISOString() });
  res.status(201).json(order);
}

export async function getOrdersByUser(req, res) {
  const orders = await storeModel.getOrders();
  res.json(orders.filter((order) => order.userId === req.params.userId));
}
