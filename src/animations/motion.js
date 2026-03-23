export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 70, filter: 'blur(10px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -50, filter: 'blur(12px)', transition: { duration: 0.35 } }
};
