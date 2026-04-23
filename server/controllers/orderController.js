import { orders } from "../data/ordersData.js";

export const createOrder = (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    items: req.body.items,
    total: req.body.total,
    status: "pending"
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
};

export const getOrders = (req, res) => {
  res.json(orders);
};