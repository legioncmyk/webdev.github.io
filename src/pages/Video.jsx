import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeUp } from '../animations/motion';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data';

export function Video() {
  const [activePreview, setActivePreview] = useState(null);
  const videoServices = services.filter((item) => item.type === 'video');

  return (
    <div className="space-y-8 pb-28">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,46,46,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.85))] p-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20 blur-[2px]" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.45em] text-red-300">Videography Studio</p>
          <h1 className="mt-4 font-orbitron text-4xl font-bold text-white md:text-5xl">We Create Cinematic Moments</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">Halaman agency style dengan ambience cinematic, paket segmented, dan preview modal untuk memberi rasa premium sejak first scroll.</p>
        </div>
      </section>
      <SectionTitle eyebrow="Packages" title="Dirancang untuk pelajar, event, hingga brand profesional" description="Tiap paket menonjolkan value dengan aksen premium dan CTA preview untuk simulasi showcase video." />
      <div className="grid gap-4 md:grid-cols-3">
        {videoServices.map((service, index) => (
          <motion.div key={service.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.1 }}>
            <ServiceCard service={service} onPreview={() => setActivePreview(service)} />
          </motion.div>
        ))}
      </div>
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" onClick={() => setActivePreview(null)}>
          <div className="glass-panel max-w-lg rounded-[32px] p-6" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs uppercase tracking-[0.4em] text-red-300">Preview</p>
            <h3 className="mt-3 font-orbitron text-2xl text-white">{activePreview.name}</h3>
            <div className="mt-5 rounded-[24px] border border-white/10 bg-gradient-to-br from-red-500/20 via-black to-zinc-950 p-8 text-center text-zinc-300">
              Demo cinematic reel placeholder — siap diganti video embedded / custom player.
            </div>
            <button onClick={() => setActivePreview(null)} className="mt-5 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}
