import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

let db;

try {
  if (!admin.apps.length && process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      })
    });
    db = admin.firestore();
  }
} catch (error) {
  console.warn('Firebase init warning:', error.message);
}

const inMemory = {
  users: [
    { id: 'u1', username: 'zalladmin', email: 'admin@zallstore.test', password: '123456', createdAt: new Date().toISOString() }
  ],
  products: [
    { id: 'p1', name: 'Canva Pro', price: 35000, category: 'Editing', status: 'ready', image: '🎨' },
    { id: 'p2', name: 'Spotify Premium', price: 25000, category: 'Musik', status: 'ready', image: '🎵' }
  ],
  orders: [],
  services: [
    { id: 's1', type: 'video', name: 'Paket Event', price: 1499000, description: 'Aftermovie cinematic' },
    { id: 's2', type: 'photo', name: 'Portrait Signature', price: 650000, description: 'Portrait aesthetic' }
  ]
};

export async function getCollection(name) {
  if (!db) return inMemory[name];
  const snapshot = await db.collection(name).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function addDocument(name, data) {
  if (!db) {
    const doc = { id: `${name}-${Date.now()}`, ...data };
    inMemory[name].push(doc);
    return doc;
  }
  const ref = await db.collection(name).add(data);
  return { id: ref.id, ...data };
}

export async function updateDocument(name, id, data) {
  if (!db) {
    inMemory[name] = inMemory[name].map((item) => item.id === id ? { ...item, ...data } : item);
    return inMemory[name].find((item) => item.id === id);
  }
  await db.collection(name).doc(id).update(data);
  const doc = await db.collection(name).doc(id).get();
  return { id: doc.id, ...doc.data() };
}

export async function deleteDocument(name, id) {
  if (!db) {
    inMemory[name] = inMemory[name].filter((item) => item.id !== id);
    return true;
  }
  await db.collection(name).doc(id).delete();
  return true;
}
