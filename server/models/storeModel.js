import { addDocument, deleteDocument, getCollection, updateDocument } from '../config/firebase.js';

export const storeModel = {
  getUsers: () => getCollection('users'),
  getProducts: () => getCollection('products'),
  getOrders: () => getCollection('orders'),
  getServices: () => getCollection('services'),
  addUser: (payload) => addDocument('users', payload),
  addProduct: (payload) => addDocument('products', payload),
  updateProduct: (id, payload) => updateDocument('products', id, payload),
  deleteProduct: (id) => deleteDocument('products', id),
  addOrder: (payload) => addDocument('orders', payload)
};
