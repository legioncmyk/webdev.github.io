import { AnimatePresence, motion } from 'framer-motion';

export function ActivityToast({ activity }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activity}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed left-4 top-4 z-50 max-w-xs rounded-2xl border border-red-500/20 bg-black/70 px-4 py-3 text-sm text-zinc-200 shadow-neon backdrop-blur-xl"
      >
        🔥 {activity}
      </motion.div>
    </AnimatePresence>
  );
}
