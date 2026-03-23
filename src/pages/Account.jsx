import { motion } from 'framer-motion';
import { purchaseHistory } from '../data';
import { SectionTitle } from '../components/SectionTitle';

export function Account() {
  return (
    <div className="space-y-8 pb-28">
      <SectionTitle eyebrow="Akun" title="Profile card elegan dengan histori transaksi" description="Halaman akun menampilkan status pengguna, identitas singkat, serta riwayat pembelian yang muncul bertahap untuk memberi kesan polished." />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel rounded-[32px] p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-red-500/15 text-2xl">⚡</div>
          <div>
            <h3 className="font-orbitron text-2xl text-white">Zall Member</h3>
            <p className="text-sm text-zinc-400">Status: Premium Buyer • Joined 2026</p>
          </div>
        </div>
      </motion.div>
      <div className="space-y-4">
        {purchaseHistory.map((item, index) => (
          <motion.div key={item.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.12 }} className="glass-panel rounded-[24px] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-white">{item.label}</h4>
                <p className="text-sm text-zinc-500">{item.date}</p>
              </div>
              <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-300">{item.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
