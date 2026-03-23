import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass-panel neon-border relative overflow-hidden rounded-[28px] p-5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />
      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl">
          {product.image}
        </div>
        {product.featured && <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-300">Terlaris</span>}
      </div>
      <div className="relative mt-5 space-y-3">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">{product.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{product.name}</h3>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-red-300">{product.price}</span>
          <span className={`rounded-full px-3 py-1 text-xs ${product.status === 'Ready' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-zinc-500/15 text-zinc-300'}`}>
            {product.status}
          </span>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-4 py-3 font-semibold text-white shadow-neon transition hover:brightness-110">
          <ShoppingBag size={16} />
          Beli Sekarang
        </button>
      </div>
    </motion.div>
  );
}
