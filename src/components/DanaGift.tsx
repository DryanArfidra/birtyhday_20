import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import { X, Maximize2, Heart, Sparkles, Gift } from "lucide-react";

type Props = { onContinue: () => void };

export default function DanaGift({ onContinue }: Props) {
  const [open, setOpen] = useState(false);
  const [qr, setQr] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map(() => ({
        x: (Math.random() - 0.5) * 320,
        y: (Math.random() - 0.5) * 320,
        d: Math.random() * 0.8,
        s: 10 + Math.random() * 12,
        sym: Math.random() > 0.5 ? "♥" : "✦",
      })),
    []
  );

  return (
    <div className="relative z-10 flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-12 text-center">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-burgundy/20 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <span className="absolute left-[12%] top-[15%] text-gold/40">
          ✦
        </span>
        <span className="absolute right-[15%] top-[25%] text-cream/40">
          ♡
        </span>
        <span className="absolute bottom-[20%] left-[18%] text-gold/30">
          ✧
        </span>
        <span className="absolute bottom-[15%] right-[12%] text-cream/40">
          ♡
        </span>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-sm flex-col items-center">
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex w-full flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mb-8 flex h-48 w-48 items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-gold/20" />
              <div className="absolute inset-3 rounded-full border border-gold/30" />

              <div className="relative flex h-32 w-32 items-center justify-center rounded-[2rem] border border-gold/50 bg-gradient-to-br from-[#8D304E] via-[#651D39] to-[#351323] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-x-0 top-0 h-5 rounded-t-[2rem] bg-gold/15" />
                <div className="absolute left-1/2 top-0 h-full w-5 -translate-x-1/2 bg-gradient-to-r from-[#C39A56]/80 via-[#F7E2A8] to-[#C39A56]/80" />

                <div className="absolute -top-5 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center">
                  <div className="absolute -left-7 h-9 w-10 -rotate-12 rounded-full border-[5px] border-gold bg-burgundy" />
                  <div className="absolute -right-7 h-9 w-10 rotate-12 rounded-full border-[5px] border-gold bg-burgundy" />
                  <div className="z-10 h-5 w-5 rounded-full border-2 border-gold bg-[#F6D995]" />
                </div>

                <Gift
                  size={42}
                  strokeWidth={1.3}
                  className="relative z-10 text-[#FFF0C7]"
                />
              </div>

              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-1 top-6 text-gold"
              >
                <Sparkles size={25} />
              </motion.div>

              <Heart
                size={20}
                className="absolute bottom-5 left-0 fill-burgundy text-burgundy"
              />
            </motion.div>

            <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-gold/80">
              A Little Something for You
            </p>

            <h2 className="font-serif text-3xl leading-snug text-cream">
              One Last
              <br />
              <span className="italic text-[#E9B6C5]">Surprise, Nayla</span>
            </h2>

            <p className="mt-4 max-w-[260px] text-sm leading-7 text-lavender/80">
              Ada hadiah kecil yang sudah aku siapkan khusus untuk kamu,
              sayang.
            </p>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setOpen(true)}
              className="mt-9 flex w-full items-center justify-center gap-3 rounded-full border border-gold/50 bg-gradient-to-r from-[#762542] to-[#4D1830] px-6 py-4 text-sm tracking-wide text-cream shadow-[0_8px_35px_rgba(100,25,55,0.3)] transition-colors hover:border-gold"
            >
              <Gift size={17} className="text-[#F4D99D]" />
              Buka Hadiahmu
              <Sparkles size={15} className="text-gold" />
            </motion.button>

            <p className="mt-5 text-[10px] tracking-[0.25em] text-lavender/50">
              MADE WITH LOVE, JUST FOR YOU ♡
            </p>
          </motion.div>
        )}

        <AnimatePresence>
          {open && (
            <motion.div
              key="gift-content"
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="w-full"
            >
              {/* Celebration particles */}
              {particles.map((p, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: p.x,
                    y: p.y,
                    scale: [0.5, 1.1, 0.7],
                    rotate: [0, 35, -25],
                  }}
                  transition={{
                    duration: 2,
                    delay: p.d,
                    ease: "easeOut",
                  }}
                  className="pointer-events-none fixed left-1/2 top-1/2 z-20 text-[#EAC77E]"
                  style={{ fontSize: `${p.s}px` }}
                >
                  {p.sym}
                </motion.span>
              ))}

              <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-b from-[#281728]/95 via-[#211626]/95 to-[#171321]/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-burgundy/30 blur-3xl" />

                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-burgundy/30"
                  >
                    <Heart
                      size={26}
                      className="fill-[#D986A5] text-[#F2B9CC]"
                    />
                  </motion.div>

                  <p className="mb-2 text-[9px] uppercase tracking-[0.4em] text-gold/80">
                    A Birthday Gift
                  </p>

                  <h2 className="font-serif text-2xl leading-relaxed text-cream">
                    For My Favorite
                    <br />
                    <span className="italic text-[#E9B6C5]">Person, Nayla</span>
                  </h2>

                  <p className="mt-3 text-xs leading-6 text-lavender/80">
                    Happy birthday, sayangku.
                    <br />
                    Walaupun kita jauh, aku ingin kamu tetap merasakan
                    sayangku lewat hal kecil ini. ❤️
                  </p>

                  <div className="my-5 flex items-center justify-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
                    <span className="text-xs text-gold">✦</span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
                  </div>

                  {/* QR container */}
                  <div className="rounded-2xl border border-[#E4C98D]/60 bg-[#FFFCF7] p-4 shadow-[0_10px_35px_rgba(0,0,0,0.18)]">
                    <img
                      src="/images/dana-kaget-qr.png"
                      alt="QR DANA Kaget"
                      className="mx-auto h-auto w-full max-w-[250px] object-contain"
                      onError={(e) => {
                        const t = e.currentTarget;
                        t.onerror = null;
                        t.src =
                          "data:image/svg+xml;utf8," +
                          encodeURIComponent(
                            `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect width='100%' height='100%' fill='#FFFCF7'/><rect x='20' y='20' width='260' height='260' fill='none' stroke='#A47B40' stroke-dasharray='6 6'/><text x='150' y='140' fill='#651D39' font-family='sans-serif' font-size='14' text-anchor='middle'>Letakkan file</text><text x='150' y='160' fill='#651D39' font-family='sans-serif' font-size='14' text-anchor='middle'>dana-kaget-qr.png</text><text x='150' y='180' fill='#651D39' font-family='sans-serif' font-size='14' text-anchor='middle'>di public/images/</text></svg>`
                          );
                      }}
                    />
                  </div>

                  <p className="mt-4 text-xs text-lavender/80">
                    A little gift, sent with all my love.
                  </p>

                  <button
                    onClick={() => setQr(true)}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-5 py-2.5 text-xs text-[#EAC77E] transition hover:bg-gold/10"
                  >
                    <Maximize2 size={14} />
                    Perbesar QR
                  </button>
                </div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileTap={{ scale: 0.97 }}
                onClick={onContinue}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-gradient-to-r from-[#762542] to-[#4D1830] py-4 text-sm tracking-wide text-cream shadow-lg transition hover:border-gold/70"
              >
                Lanjut ke Penutup
                <span className="text-gold">→</span>
              </motion.button>

              <p className="mt-4 text-[9px] tracking-[0.3em] text-lavender/50">
                FOREVER CLOSE, EVEN FROM AFAR ♡
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fullscreen QR modal */}
      <AnimatePresence>
        {qr && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQr(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#100C18]/95 p-5 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-[2rem] border border-gold/40 bg-gradient-to-b from-[#302033] to-[#191320] p-6 text-center shadow-2xl"
            >
              <button
                aria-label="Tutup QR"
                onClick={() => setQr(false)}
                className="absolute right-4 top-4 rounded-full border border-cream/15 bg-cream/5 p-2.5 text-cream transition hover:bg-cream/10"
              >
                <X size={18} />
              </button>

              <Sparkles
                size={23}
                className="mx-auto mb-3 mt-2 text-gold"
              />

              <h3 className="font-serif text-xl text-cream">
                Your Little Gift
              </h3>

              <p className="mb-5 mt-2 text-xs text-lavender/80">
                Scan this QR, sayang ❤️
              </p>

              <div className="rounded-2xl border border-gold/50 bg-[#FFFCF7] p-3">
                <img
                  src="/images/dana-kaget-qr.png"
                  alt="QR DANA Kaget"
                  className="mx-auto h-auto w-full max-w-[320px] object-contain"
                />
              </div>

              <button
                onClick={() => setQr(false)}
                className="mt-5 rounded-full border border-gold/30 px-7 py-2.5 text-xs text-[#EAC77E] transition hover:bg-gold/10"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
