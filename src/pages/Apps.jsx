import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SectionTitle } from '../components/SectionTitle';
import { products } from '../data';

const filters = ['Semua', 'Editing', 'Streaming', 'Musik'];

export function Apps() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const filtered = useMemo(() => activeFilter === 'Semua' ? products : products.filter((item) => item.category === activeFilter), [activeFilter]);

  return (
    <div className="space-y-8 pb-28">
      <SectionTitle eyebrow="Premium Apps" title="Marketplace akun premium dengan visual high-conversion" description="Grid produk modern dengan badge terlaris, status ready/sold, skeleton-ready structure, dan micro interaction yang terasa mewah." />
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-4 py-2 text-sm transition ${activeFilter === filter ? 'bg-red-500 text-white shadow-neon' : 'border border-white/10 bg-white/5 text-zinc-300'}`}>
            {filter}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </motion.div>
    </div>
  );
}
