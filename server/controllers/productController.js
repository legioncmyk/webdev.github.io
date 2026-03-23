import { storeModel } from '../models/storeModel.js';

export async function getProducts(_req, res) {
  const products = await storeModel.getProducts();
  res.json(products);
}

export async function createProduct(req, res) {
  const product = await storeModel.addProduct(req.body);
  res.status(201).json(product);
}

export async function updateProduct(req, res) {
  const product = await storeModel.updateProduct(req.params.id, req.body);
  res.json(product);
}

export async function removeProduct(req, res) {
  await storeModel.deleteProduct(req.params.id);
  res.status(204).send();
}
