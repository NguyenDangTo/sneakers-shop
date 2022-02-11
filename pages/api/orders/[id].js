import dbConnect from "../../../ultility/mongo";
import Order from "../../../model/Order";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
    try {
      const order = await Order.findByIdAndDelete(id);
      res.status(201).json("The order has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
