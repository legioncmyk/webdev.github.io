import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { gallery } from '../data';

export function Photo() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="space-y-8 pb-28">
      <SectionTitle eyebrow="Photography" title="Masonry gallery dengan nuansa Instagram aesthetic" description="Hover zoom, overlay informasi, dan fullscreen lightbox memberi pengalaman portfolio yang layak untuk client pitching." />
      <div className="masonry">
        {gallery.map((photo) => (
          <motion.button
            key={photo.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActivePhoto(photo)}
            className={`group relative mb-4 w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${photo.gradient} ${photo.height} p-5 text-left`}
          >
            <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-orbitron text-xl text-white">{photo.title}</h3>
              <p className="mt-2 text-sm text-zinc-300 opacity-0 transition group-hover:opacity-100">Tap untuk fullscreen showcase</p>
            </div>
          </motion.button>
        ))}
      </div>
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={() => setActivePhoto(null)}>
          <div className={`relative w-full max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br ${activePhoto.gradient} p-8`} onClick={(e) => e.stopPropagation()}>
            <h3 className="font-orbitron text-3xl text-white">{activePhoto.title}</h3>
            <p className="mt-3 max-w-xl text-zinc-200">Lightbox fullscreen placeholder yang siap diganti image slider asli dari asset atau CDN project Anda.</p>
            <div className="mt-10 flex gap-3">
              <button className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">Prev</button>
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
