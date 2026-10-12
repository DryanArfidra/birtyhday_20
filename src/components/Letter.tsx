import { motion } from "motion/react";
import { Heart, Sparkles, Feather } from "lucide-react";
import { config } from "../config/birthday";

type Props = { onContinue: () => void };

export default function Letter({ onContinue }: Props) {
  const { title, greeting, paragraphs, signature } = config.letter;

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center overflow-hidden px-5 py-12 sm:px-6 sm:py-16">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-burgundy/20 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-pink-300/10 blur-3xl" />

        <motion.span
          animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-[8%] top-[12%] text-2xl text-gold/40"
        >
          ✧
        </motion.span>

        <motion.span
          animate={{ y: [0, 14, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-[9%] top-[30%] text-2xl text-pink-200/40"
        >
          ♡
        </motion.span>

        <motion.span
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-[18%] left-[12%] text-xl text-gold/40"
        >
          ✦
        </motion.span>

        <span className="absolute bottom-[12%] right-[10%] text-xl text-lavender/30">
          ❀
        </span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-9 w-full text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-burgundy/20 shadow-[0_0_30px_rgba(212,175,100,0.08)]"
        >
          <Heart
            size={25}
            strokeWidth={1.4}
            className="fill-[#D982A2] text-[#F0B8CC]"
          />
        </motion.div>

        <p className="mb-3 text-[9px] uppercase tracking-[0.45em] text-gold/80">
          A Little Piece of My Heart
        </p>

        <h1 className="font-serif text-3xl leading-snug text-cream sm:text-4xl">
          A Letter
          <br />
          <span className="italic text-[#E9B6C5]">Just for You</span>
        </h1>

        <p className="mt-4 text-xs tracking-wide text-lavender/70">
          Written with love, especially for you ♡
        </p>
      </motion.div>

      {/* Letter paper */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full overflow-hidden rounded-[1.75rem] border border-[#E7CE9A]/70 bg-gradient-to-br from-[#FFFDF7] via-[#FFF8EE] to-[#F8EBDC] shadow-[0_25px_70px_rgba(0,0,0,0.3)]"
      >
        {/* Paper texture decorations */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#B9965C]/30" />
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-[#B9965C]/20" />
          <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full border border-[#B9965C]/30" />
        </div>

        {/* Inner border */}
        <div className="pointer-events-none absolute inset-2 rounded-[1.3rem] border border-[#B9965C]/30" />
        <div className="pointer-events-none absolute inset-3 rounded-[1.15rem] border border-[#B9965C]/10" />

        {/* Corner ornaments */}
        <span className="pointer-events-none absolute left-5 top-4 font-serif text-2xl text-[#A9864D]/70">
          ❧
        </span>

        <span className="pointer-events-none absolute right-5 top-4 -scale-x-100 font-serif text-2xl text-[#A9864D]/70">
          ❧
        </span>

        <span className="pointer-events-none absolute bottom-4 left-5 -rotate-45 font-serif text-2xl text-[#A9864D]/70">
          ❧
        </span>

        <span className="pointer-events-none absolute bottom-4 right-5 rotate-45 font-serif text-2xl text-[#A9864D]/70">
          ❧
        </span>

        <div className="relative px-6 py-10 sm:px-8 sm:py-12">

          {/* Letter emblem */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#B9965C]/50" />
            <Feather size={17} className="text-[#A9864D]" />
            <span className="h-px w-9 bg-[#B9965C]/50" />
          </div>

          {/* Config title */}
          <h2 className="text-center font-serif text-2xl leading-relaxed text-[#6D263F]">
            {title}
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#B9965C]/50" />
            <Heart size={12} className="fill-[#A64B69] text-[#A64B69]" />
            <span className="h-px w-10 bg-[#B9965C]/50" />
          </div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-8 font-serif text-lg italic text-[#762542]"
          >
            {greeting}
          </motion.p>

          {/* Letter body */}
          <div className="mt-5 space-y-5 text-[14px] leading-[2] text-[#33232C]/90 sm:text-[15px]">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35 + i * 0.18,
                  duration: 0.7,
                }}
                className="text-justify"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5 + paragraphs.length * 0.18,
              duration: 0.8,
            }}
            className="mt-9 text-right"
          >
            <p className="mb-2 text-xs italic tracking-wide text-[#66505A]/80">
              With all my heart,
            </p>

            <p className="font-serif text-xl italic text-[#762542]">
              {signature} ♡
            </p>
          </motion.div>

          {/* Bottom seal */}
          <div className="mt-9 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[#B9965C]/50" />
              <Sparkles size={14} className="text-[#A9864D]" />
              <span className="h-px w-12 bg-[#B9965C]/50" />
            </div>

            <p className="mt-4 font-serif text-[10px] italic tracking-[0.2em] text-[#762542]/70">
              FOREVER IN MY HEART
            </p>
          </div>
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        onClick={onContinue}
        whileTap={{ scale: 0.97 }}
        whileHover={{ y: -2 }}
        className="group relative mt-8 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-gold/50 bg-gradient-to-r from-[#762542] to-[#4D1830] px-5 py-4 text-sm tracking-wide text-cream shadow-[0_10px_30px_rgba(100,25,55,0.25)] transition hover:border-gold/80"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <Heart size={15} className="relative text-[#F4D99D]" />

        <span className="relative">
          Continue to Our Memories
        </span>

        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="relative text-gold"
        >
          →
        </motion.span>
      </motion.button>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-6 text-center text-[9px] tracking-[0.3em] text-lavender/50"
      >
        EVERY WORD, WRITTEN FOR YOU ♡
      </motion.p>
    </div>
  );
}