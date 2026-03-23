import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../animations/motion';
import { promoSlides, testimonials } from '../data';
import { SectionTitle } from '../components/SectionTitle';

export function Home({ typingText, countdown }) {
  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8 pb-28">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/60 p-6 shadow-glass">
        <div className="hero-orb left-0 top-0 h-36 w-36 bg-red-500" />
        <div className="hero-orb bottom-0 right-0 h-44 w-44 bg-red-700" />
        <motion.div variants={fadeUp} className="relative space-y-6">
          <span className="inline-flex rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-red-300">Digital Marketplace + Creative Studio</span>
          <div className="space-y-4">
            <h1 className="font-orbitron text-4xl font-extrabold leading-tight text-white md:text-6xl">
              ZALLSTORE <span className="text-glow text-red-400">DIGITAL HUB</span>
            </h1>
            <p className="min-h-[32px] text-lg text-zinc-300">{typingText}<span className="animate-pulse text-red-400">|</span></p>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
              Satu ekosistem premium untuk akun digital populer, jasa videografi cinematic, dan fotografi aesthetic dengan tampilan cyber-futuristik yang siap jualan.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Aman', 'Proses cepat', 'Harga pelajar'].map((item) => (
              <div key={item} className="glass-panel rounded-2xl px-4 py-4 text-sm font-medium text-zinc-100">{item}</div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {promoSlides.map((slide, index) => (
          <motion.div key={slide.title} variants={fadeUp} transition={{ delay: index * 0.08 }} className="glass-panel rounded-[28px] p-5">
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-red-300">{slide.badge}</span>
            <h3 className="mt-4 font-orbitron text-2xl text-white">{slide.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{slide.subtitle}</p>
            <button className="mt-6 rounded-full border border-red-500/30 px-4 py-2 text-sm text-white transition hover:bg-red-500/10">{slide.cta}</button>
          </motion.div>
        ))}
      </section>

      <motion.section variants={fadeUp} className="glass-panel rounded-[30px] p-6">
        <SectionTitle
          eyebrow="Flash Sale"
          title="Diskon terbatas untuk akun favorit kamu"
          description="Ambil momentum promo harian dengan UI countdown real-time dan urgency yang membuat conversion-ready."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {Object.entries(countdown).map(([unit, value]) => (
            <div key={unit} className="min-w-[92px] rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center">
              <div className="font-orbitron text-3xl text-red-300">{String(value).padStart(2, '0')}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-zinc-500">{unit}</div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={fadeUp} className="space-y-6">
        <SectionTitle
          eyebrow="Testimonials"
          title="Rating ⭐⭐⭐⭐⭐ dari customer digital & creative"
          description="Social proof ditampilkan dalam gaya mewah untuk memperkuat trust dan meningkatkan closing."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass-panel rounded-[28px] p-5">
              <p className="text-sm leading-7 text-zinc-300">“{item.text}”</p>
              <div className="mt-5">
                <h4 className="font-semibold text-white">{item.name}</h4>
                <p className="text-sm text-zinc-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
