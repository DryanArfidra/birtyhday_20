import { motion } from "motion/react";
import { Heart, Sparkles, RotateCcw } from "lucide-react";
import { config } from "../config/birthday";

type Props = { onRestart: () => void };

export default function Closing({ onRestart }: Props) {
  const { title, paragraphs, cta } = config.closing;

  return (
    <div className="relative z-10 flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-14 text-center">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-burgundy/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />

        <motion.span
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-[12%] top-[15%] text-2xl text-gold/40"
        >
          ✦
        </motion.span>

        <motion.span
          animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute right-[13%] top-[25%] text-xl text-pink-200/40"
        >
          ♡
        </motion.span>

        <span className="absolute bottom-[18%] left-[15%] text-lg text-gold/30">
          ✧
        </span>
        <span className="absolute bottom-[25%] right-[12%] text-xl text-pink-200/30">
          ♡
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        {/* Decorative top */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70" />
          <Sparkles size={16} className="text-gold" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold/80">
            A Letter from My Heart
          </p>
          <Sparkles size={16} className="text-gold" />
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70" />
        </div>

        {/* Main card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-b from-[#352034]/90 via-[#261827]/95 to-[#191321]/95 px-6 py-9 shadow-[0_25px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-8 sm:py-11">
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-burgundy/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-pink-400/10 blur-3xl" />

          {/* Heart animation */}
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-burgundy/20 shadow-[0_0_35px_rgba(180,90,120,0.12)]"
          >
            <Heart
              size={35}
              strokeWidth={1.2}
              className="fill-[#D982A2] text-[#F0B8CC]"
            />

            <Sparkles
              size={15}
              className="absolute -right-1 top-1 text-gold"
            />
            <Sparkles
              size={12}
              className="absolute -bottom-1 left-1 text-pink-200"
            />
          </motion.div>

          {/* Title from config */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-3xl leading-relaxed text-cream sm:text-4xl"
          >
            {title}
          </motion.h2>

          {/* Decorative divider */}
          <div className="my-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-sm text-gold">♡</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          {/* Paragraphs from config */}
          <div className="space-y-5 text-sm leading-7 text-lavender/90">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + i * 0.25,
                  duration: 0.7,
                }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 flex flex-col items-center"
          >
            <div className="flex items-center gap-4 text-gold/70">
              <span>✦</span>
              <Heart size={13} className="fill-pink-300/70 text-pink-200" />
              <span>✦</span>
            </div>

            <p className="mt-4 font-serif text-sm italic tracking-wide text-[#E9B6C5]">
              With love, always and forever.
            </p>
          </motion.div>
        </div>

        {/* Restart button */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={onRestart}
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-full border border-gold/40 bg-gradient-to-r from-[#762542] to-[#4D1830] px-6 py-4 text-sm tracking-wide text-cream shadow-[0_8px_30px_rgba(100,25,55,0.25)] transition hover:border-gold/70"
        >
          <RotateCcw size={15} className="text-[#F4D99D]" />
          {cta}
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="mt-6 text-[9px] uppercase tracking-[0.35em] text-lavender/40"
        >
          Made with love, just for you ♡
        </motion.p>
      </motion.div>
    </div>
  );
}
