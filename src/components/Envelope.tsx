import { motion } from "motion/react";
import { useState } from "react";

type Props = { onOpen: () => void };

export default function Envelope({ onOpen }: Props) {
  const [opened, setOpened] = useState(false);

  const handleTap = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => onOpen(), 1400);
  };

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-10">
      {/* Dekorasi latar */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[12%] top-[18%] text-2xl text-gold/50"
        >
          ✧
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[14%] top-[25%] text-xl text-lavender/70"
        >
          ♡
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-[22%] left-[18%] text-lg text-gold/60"
        >
          ✦
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-[26%] right-[18%] text-lg text-gold/60"
        >
          ✧
        </motion.div>
      </div>

      {/* Judul */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center"
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-gold/80">
          A little something for you
        </p>

        <h1 className="font-serif text-3xl leading-relaxed text-cream sm:text-4xl">
          For my favorite person,
          <br />
          <span className="italic text-gold">Nayla.</span>
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 76 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-4 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-sm tracking-wide text-lavender/90"
        >
          I have something special for you...
        </motion.p>
      </motion.div>

      {/* Amplop */}
      <motion.button
        type="button"
        onClick={handleTap}
        whileHover={opened ? {} : { y: -5, scale: 1.025 }}
        whileTap={opened ? {} : { scale: 0.97 }}
        aria-label="Buka amplop cinta untuk Nayla"
        className="relative z-10 mt-14 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gold/70 rounded-xl"
      >
        <div
          className="relative h-48 w-72 sm:h-52 sm:w-80"
          style={{ perspective: "1000px" }}
        >
          {/* Bayangan */}
          <div className="absolute -inset-3 rounded-2xl bg-burgundy/10 blur-2xl" />

          {/* Badan amplop */}
          <div className="absolute inset-0 overflow-hidden rounded-xl border border-gold/40 bg-burgundy shadow-2xl">
            {/* Tekstur dekoratif */}
            <div className="absolute inset-2 rounded-lg border border-gold/20" />

            <div className="absolute inset-0 bg-gradient-to-br from-cream/5 via-transparent to-black/10" />

            {/* Pola sudut */}
            <span className="absolute left-4 top-3 text-xs text-gold/70">
              ✧
            </span>
            <span className="absolute right-4 top-3 text-xs text-gold/70">
              ✧
            </span>
            <span className="absolute bottom-3 left-4 text-xs text-gold/70">
              ✧
            </span>
            <span className="absolute bottom-3 right-4 text-xs text-gold/70">
              ✧
            </span>
          </div>

          {/* Surat di dalam amplop */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={
              opened
                ? { y: -76, opacity: 1, scale: 1.015 }
                : { y: 0, opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute left-5 right-5 top-3 flex h-40 flex-col items-center justify-start overflow-hidden rounded-t-md border border-[#e8d8c4] bg-[#fff8ed] px-3 pt-4 shadow-md sm:h-44"
          >
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#a88764]">
              Written with love
            </span>

            <motion.div
              animate={opened ? { scale: [1, 1.15, 1] } : { scale: 1 }}
              transition={{ duration: 0.8 }}
              className="my-2 text-2xl leading-none text-[#9c5268]"
            >
              ♡
            </motion.div>

            <p className="font-serif text-lg italic text-[#70394b]">
              Dear Nayla,
            </p>

            <div className="mt-2 h-px w-16 bg-gradient-to-r from-transparent via-[#c6a16c] to-transparent" />

            <p className="mt-2 text-center font-serif text-[10px] italic tracking-wide text-[#967b70]">
              A little letter, a lot of love.
            </p>
          </motion.div>

          {/* Lipatan depan amplop */}
          <div
            className="absolute inset-0 overflow-hidden rounded-xl"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="absolute inset-x-0 bottom-0 h-[72%] border-b border-gold/30 bg-[#68263e]"
              style={{
                clipPath: "polygon(0 0, 50% 58%, 100% 0, 100% 100%, 0 100%)",
              }}
            />

            <div
              className="absolute inset-x-0 bottom-0 h-[72%] border-b border-gold/20 bg-[#7a3049]"
              style={{
                clipPath: "polygon(0 100%, 50% 34%, 100% 100%)",
              }}
            />
          </div>

          {/* Tutup amplop */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={opened ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{
              transformOrigin: "top",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            className="absolute left-0 right-0 top-0 h-[52%]"
          >
            <div
              className="h-full w-full border-t border-x border-gold/50 bg-[#8b3851] shadow-sm"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                backfaceVisibility: "hidden",
              }}
            />
          </motion.div>

          {/* Segel hati */}
          <motion.div
            animate={
              opened
                ? { opacity: 0, scale: 0.4, y: 8 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={{ duration: 0.25 }}
            className="absolute left-1/2 top-[48%] z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 bg-[#ead5b6] shadow-lg"
          >
            <span className="text-xl text-[#85384f]">♥</span>
          </motion.div>
        </div>
      </motion.button>

      {/* Petunjuk */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: opened ? 0 : 1, y: opened ? 5 : 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-10 mt-12 text-center"
      >
        <motion.p
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="text-[10px] uppercase tracking-[0.3em] text-lavender"
        >
          Tap to open your letter
        </motion.p>

        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-gold/30" />
          <span className="text-xs text-gold/70">with love, always ♡</span>
          <span className="h-px w-8 bg-gold/30" />
        </div>
      </motion.div>
    </div>
  );
}
