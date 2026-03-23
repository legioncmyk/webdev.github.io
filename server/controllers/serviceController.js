import { storeModel } from '../models/storeModel.js';

export async function getServices(_req, res) {
  const services = await storeModel.getServices();
  res.json(services);
}
