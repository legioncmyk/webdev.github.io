import { motion } from 'framer-motion';

export function ServiceCard({ service, onPreview }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-panel neon-border rounded-[30px] p-6"
    >
      <span className="inline-flex rounded-full bg-red-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-red-300">{service.accent}</span>
      <h3 className="mt-4 font-orbitron text-2xl text-white">{service.name}</h3>
      <p className="mt-2 text-sm leading-7 text-zinc-300">{service.description}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xl font-semibold text-red-300">{service.price}</span>
        <button onClick={onPreview} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-red-500/40 hover:bg-red-500/10">
          Preview
        </button>
      </div>
    </motion.div>
  );
}
