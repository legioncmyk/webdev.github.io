import { motion } from 'framer-motion';
import { Clapperboard, Crown, House, Images, UserRound } from 'lucide-react';

const items = [
  { key: 'home', label: 'Home', icon: House },
  { key: 'apps', label: 'Premium', icon: Crown },
  { key: 'video', label: 'Video', icon: Clapperboard },
  { key: 'photo', label: 'Photo', icon: Images },
  { key: 'account', label: 'Akun', icon: UserRound }
];

export function BottomNavbar({ active, onChange }) {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto w-[calc(100%-1.25rem)] max-w-md rounded-full border border-white/10 bg-black/70 px-2 py-2 backdrop-blur-xl shadow-glass md:left-1/2 md:right-auto md:-translate-x-1/2">
      <div className="grid grid-cols-5 gap-1">
        {items.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <motion.button
              key={key}
              whileTap={{ scale: 0.9 }}
              onClick={() => onChange(key)}
              className={`relative flex flex-col items-center gap-1 rounded-full px-2 py-2 text-[11px] transition ${isActive ? 'text-white' : 'text-zinc-500'}`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full bg-red-500/15 shadow-neon"
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                />
              )}
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Icon size={16} className={isActive ? 'text-accent' : 'text-zinc-400'} />
              </span>
              <span className="relative">{label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
