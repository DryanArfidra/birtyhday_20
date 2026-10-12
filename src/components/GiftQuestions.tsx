
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Gift, Heart, Sparkles, ArrowRight } from "lucide-react";
import { config } from "../config/birthday";

type Props = { onAllCorrect: () => void };

export default function GiftQuestions({ onAllCorrect }: Props) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<{
    type: "wrong";
    msg: string;
  } | null>(null);
  const [locked, setLocked] = useState(false);

  const total = config.questions.length;
  const q = config.questions[index];

  const handleAnswer = (optIdx: number) => {
    if (locked) return;

    if (optIdx === q.correctIndex) {
      setFeedback(null);
      setLocked(true);

      setTimeout(() => {
        setLocked(false);

        if (index + 1 >= total) {
          onAllCorrect();
        } else {
          setIndex((prev) => prev + 1);
        }
      }, 650);
    } else {
      setFeedback({
        type: "wrong",
        msg: q.wrongMessage ?? "Coba lagi ya, sayang ❤️",
      });
    }
  };

  const progress = ((index + 1) / total) * 100;

  if (!started) {
    return (
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center overflow-hidden px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="mb-5 flex items-center justify-center gap-2 text-gold">
            <Sparkles size={15} />
            <span className="text-[10px] uppercase tracking-[0.4em]">
              Made with love
            </span>
            <Sparkles size={15} />
          </div>

          <h2 className="font-serif text-4xl leading-tight text-cream">
            A Little
            <br />
            <span className="italic text-gold">Surprise</span> for You
          </h2>

          <p className="mx-auto mt-4 max-w-[270px] text-sm leading-7 text-lavender/80">
            Before you open your gift, let's remember a few little things
            about our story.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="relative my-3"
        >
          <div className="absolute -inset-5 rounded-full bg-gold/10 blur-2xl" />

          <div className="relative flex h-48 w-48 items-center justify-center rounded-[2rem] border border-gold/40 bg-gradient-to-br from-burgundy via-[#54233e] to-midnight shadow-2xl shadow-black/30">
            <div className="absolute inset-3 rounded-[1.5rem] border border-gold/20" />

            <div className="absolute left-1/2 top-0 h-full w-7 -translate-x-1/2 bg-gold/20" />

            <div className="absolute left-0 top-1/2 h-7 w-full -translate-y-1/2 bg-gold/20" />

            <div className="absolute -top-3 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/4">
              <div className="h-8 w-10 -rotate-12 rounded-full border-4 border-gold bg-burgundy" />
              <div className="-ml-2 h-8 w-10 rotate-12 rounded-full border-4 border-gold bg-burgundy" />
            </div>

            <Gift
              size={62}
              strokeWidth={1.1}
              className="relative z-10 text-gold"
            />

            <Heart
              size={17}
              fill="currentColor"
              className="absolute bottom-5 right-5 text-gold"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 font-serif text-sm italic text-lavender"
        >
          "Every little detail matters."
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setStarted(true)}
          className="mt-8 flex w-full max-w-xs items-center justify-center gap-3 rounded-full border border-gold/50 bg-cream px-6 py-4 text-sm font-medium tracking-wide text-midnight shadow-xl shadow-black/20 transition-colors hover:bg-gold"
        >
          Unlock Your Gift
          <ArrowRight size={17} />
        </motion.button>

        <p className="mt-5 text-[10px] tracking-[0.2em] text-lavender/50">
          A LITTLE GAME JUST FOR YOU
        </p>
      </div>
    );
  }

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gold">
            <Heart size={15} fill="currentColor" />
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Our little story
            </span>
          </div>

          <span className="text-xs tracking-widest text-lavender">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="h-[3px] overflow-hidden rounded-full bg-lavender/15">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-burgundy via-gold to-gold"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/20 bg-gradient-to-br from-deepblue/95 to-midnight/95 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-burgundy/20 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-burgundy/30 text-gold">
                {index >= 2 ? (
                  <Gift size={23} strokeWidth={1.4} />
                ) : (
                  <Heart size={23} strokeWidth={1.4} />
                )}
              </div>

              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold/80">
                Question {index + 1}
              </p>

              <h3 className="font-serif text-2xl leading-relaxed text-cream">
                {q.question}
              </h3>

              <p className="mt-2 text-xs leading-6 text-lavender/60">
                Pilih jawaban yang menurutmu benar, ya ❤️
              </p>

              <div className="mt-7 space-y-3">
                {q.options.map((opt, i) => {
                  const letter = String.fromCharCode(65 + i);

                  return (
                    <motion.button
                      key={i}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(i)}
                      disabled={locked}
                      className="group flex w-full items-center gap-4 rounded-2xl border border-lavender/15 bg-white/[0.035] px-4 py-4 text-left text-sm text-cream transition-all duration-200 hover:border-gold/50 hover:bg-gold/[0.07] disabled:cursor-default disabled:opacity-60"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-burgundy/30 text-xs font-semibold text-gold transition-colors group-hover:bg-gold group-hover:text-midnight">
                        {letter}
                      </span>

                      <span className="flex-1 leading-6">{opt}</span>

                      <span className="text-gold/0 transition-colors group-hover:text-gold">
                        <ArrowRight size={16} />
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -5, height: 0 }}
                    className="mt-5 overflow-hidden"
                  >
                    <div className="flex items-start gap-3 rounded-xl border border-burgundy/60 bg-burgundy/20 px-4 py-3 text-sm leading-6 text-cream">
                      <Heart
                        size={17}
                        className="mt-1 shrink-0 text-gold"
                      />
                      <p>{feedback.msg}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.p
        key={`footer-${index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-7 text-center font-serif text-xs italic tracking-wide text-lavender/60"
      >
        One heart, a thousand little memories.
      </motion.p>
    </div>
  );
}