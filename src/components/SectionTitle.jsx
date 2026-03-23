export function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs uppercase tracking-[0.5em] text-red-300">{eyebrow}</p>
      <h2 className="font-orbitron text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <p className="text-sm leading-7 text-zinc-300 md:text-base">{description}</p>
    </div>
  );
}
