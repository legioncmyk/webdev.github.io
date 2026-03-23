import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { ActivityToast } from './components/ActivityToast';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BottomNavbar } from './components/Navbar/BottomNavbar';
import { slideInRight } from './animations/motion';
import { fakeActivities } from './data';
import { useTypingText } from './hooks/useTypingText';
import { Account } from './pages/Account';
import { Apps } from './pages/Apps';
import { Home } from './pages/Home';
import { Photo } from './pages/Photo';
import { Video } from './pages/Video';

const pages = {
  home: Home,
  apps: Apps,
  video: Video,
  photo: Photo,
  account: Account
};

function SplashScreen() {
  const text = useTypingText(['ZALLSTORE DIGITAL HUB'], 90, 3000);
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, y: -40 }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      <motion.div initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="mb-6 flex h-24 w-24 items-center justify-center rounded-[30px] border border-red-500/25 bg-red-500/10 text-4xl shadow-neon">
        Z
      </motion.div>
      <h1 className="font-orbitron text-center text-2xl font-bold text-white md:text-4xl">{text}</h1>
    </motion.div>
  );
}

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.max(targetDate - new Date().getTime(), 0);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  const [activityIndex, setActivityIndex] = useState(0);
  const typingText = useTypingText([
    'Akun premium cepat, aman, dan elegan.',
    'Videografi cinematic untuk moment yang tak terlupakan.',
    'Fotografi aesthetic yang siap upgrade branding Anda.'
  ]);
  const countdown = useCountdown(new Date('2026-03-30T23:59:59Z').getTime());

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % fakeActivities.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const CurrentPage = useMemo(() => pages[activePage], [activePage]);

  return (
    <div className="min-h-screen bg-grid text-white">
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>
      <ActivityToast activity={fakeActivities[activityIndex]} />
      <FloatingWhatsApp />
      <div className="mx-auto max-w-6xl px-4 pb-32 pt-8 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div key={activePage} variants={slideInRight} initial="hidden" animate="visible" exit="exit">
            <CurrentPage typingText={typingText} countdown={countdown} />
          </motion.div>
        </AnimatePresence>
      </div>
      <BottomNavbar active={activePage} onChange={setActivePage} />
    </div>
  );
}
