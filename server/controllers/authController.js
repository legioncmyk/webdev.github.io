import jwt from 'jsonwebtoken';
import { storeModel } from '../models/storeModel.js';

function signToken(user) {
  return jwt.sign({ id: user.id, email: user.email, username: user.username }, process.env.JWT_SECRET || 'change-me', { expiresIn: '7d' });
}

export async function register(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'username, email, dan password wajib diisi' });
  }

  const users = await storeModel.getUsers();
  const exists = users.find((user) => user.email === email || user.username === username);
  if (exists) {
    return res.status(409).json({ message: 'User sudah terdaftar' });
  }

  const user = await storeModel.addUser({ username, email, password, createdAt: new Date().toISOString() });
  return res.status(201).json({ user, token: signToken(user) });
}

export async function login(req, res) {
  const { identifier, password } = req.body;
  const users = await storeModel.getUsers();
  const user = users.find((item) => (item.email === identifier || item.username === identifier) && item.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Login gagal' });
  }

  return res.json({ user, token: signToken(user) });
}
