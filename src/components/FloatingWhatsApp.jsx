import { MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-28 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white shadow-neon"
      aria-label="WhatsApp"
    >
      <MessageCircleMore size={24} />
    </motion.a>
  );
}
