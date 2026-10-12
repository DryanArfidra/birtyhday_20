import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { config, type MemoryPhoto } from "../config/birthday";

type Props = { onContinue: () => void };

export default function PhotoAlbum({ onContinue }: Props) {
  const [active, setActive] = useState<MemoryPhoto | null>(null);
  const { title, subtitle, photos } = config.album;

  return (
    <div className="relative z-10 mx-auto min-h-screen w-full max-w-md overflow-hidden px-4 py-10 sm:px-5 sm:py-14">

      {/* Dekorasi latar */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.span
          animate={{ y: [0, -12, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-3 top-20 text-2xl text-gold/40"
        >
          ✧
        </motion.span>

        <motion.span
          animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-3 top-64 text-xl text-lavender/50"
        >
          ♡
        </motion.span>

        <motion.span
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-40 left-4 text-lg text-gold/50"
        >
          ✦
        </motion.span>

        <span className="absolute bottom-20 right-4 text-2xl text-lavender/40">
          ❀
        </span>
      </div>

      {/* Header album */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center"
      >
        <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold/80">
          A collection of us
        </p>

        <h2 className="font-serif text-3xl leading-snug text-cream">
          {title}
        </h2>

        <div className="mx-auto mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold/40" />
          <span className="text-sm text-gold">♡</span>
          <span className="h-px w-10 bg-gold/40" />
        </div>

        <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-lavender">
          {subtitle}
        </p>

        <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-cream/50">
          Little moments, forever memories
        </p>
      </motion.div>

      {/* Galeri foto */}
      <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-6">
        {photos.map((p, i) => {
          const tilt = i % 2 === 0 ? -1.5 : 1.5;

          return (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setActive(p)}
              whileTap={{ scale: 0.96 }}
              whileHover={{ y: -4 }}
              style={{ rotate: tilt }}
              aria-label={`Lihat foto: ${p.caption}`}
              className="group relative rounded-sm border border-gold/40 bg-cream p-2 pb-4 text-left shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
            >
              {/* Pin dekoratif */}
              <span className="absolute -top-2 left-1/2 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-gold/60 bg-burgundy text-[10px] text-gold shadow-md">
                ♥
              </span>

              {/* Bingkai foto */}
              <div className="relative aspect-square w-full overflow-hidden bg-midnight/20">
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.onerror = null;
                    t.src =
                      "data:image/svg+xml;utf8," +
                      encodeURIComponent(
                        `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%' height='100%' fill='%2318243D'/><text x='50%' y='50%' fill='%23AEB8CE' font-family='sans-serif' font-size='18' text-anchor='middle'>Ganti ${p.src.split("/").pop()}</text></svg>`
                      );
                  }}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Lapisan dekoratif */}
                <div className="pointer-events-none absolute inset-0 border border-white/20" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-midnight/25 to-transparent" />
              </div>

              {/* Caption */}
              <div className="px-1 pt-3">
                <p className="truncate font-serif text-[13px] text-midnight">
                  {p.caption}
                </p>

                {p.date && (
                  <p className="mt-1 truncate text-[9px] uppercase tracking-[0.15em] text-midnight/60">
                    {p.date}
                  </p>
                )}

                <div className="mt-2 flex items-center gap-1">
                  <span className="h-px w-5 bg-gold/70" />
                  <span className="text-[8px] text-burgundy">♥</span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Tombol lanjut */}
      <motion.button
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={onContinue}
        whileTap={{ scale: 0.97 }}
        whileHover={{ y: -2 }}
        className="group relative mt-10 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-gold/60 bg-burgundy px-5 py-4 text-sm tracking-wide text-cream shadow-lg transition-colors duration-300 hover:bg-burgundy/90"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <span className="relative text-gold">✧</span>

        <span className="relative">Continue to Your Gift</span>

        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="relative text-gold"
        >
          →
        </motion.span>
      </motion.button>

      <p className="mt-5 text-center text-[10px] tracking-[0.2em] text-lavender/70">
        OUR STORY, OUR LITTLE WORLD ♡
      </p>

      {/* Popup foto */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/95 p-5 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            {/* Tombol tutup */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setActive(null)}
              aria-label="Tutup foto"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            >
              <X size={19} />
            </motion.button>

            {/* Foto ukuran besar */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 12 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm rounded-xl border border-gold/50 bg-cream p-3 pb-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-md border border-gold/30 bg-midnight/10 p-1">
                <img
                  src={active.src}
                  alt={active.caption}
                  className="max-h-[60vh] w-full rounded-sm object-contain"
                />
              </div>

              <div className="px-2 pt-4">
                <div className="mb-3 flex items-center justify-center gap-2">
                  <span className="h-px w-8 bg-gold/60" />
                  <span className="text-sm text-burgundy">♡</span>
                  <span className="h-px w-8 bg-gold/60" />
                </div>

                <p className="text-center font-serif text-lg text-burgundy">
                  {active.caption}
                </p>

                {active.date && (
                  <p className="mt-2 text-center text-[10px] uppercase tracking-[0.2em] text-midnight/60">
                    {active.date}
                  </p>
                )}

                <p className="mt-4 text-center font-serif text-xs italic text-midnight/50">
                  A little moment to keep forever ♥
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
