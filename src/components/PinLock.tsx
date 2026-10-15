import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Delete, Lock } from "lucide-react";

type Props = { onUnlock: () => void };

const CORRECT_PIN = "251003";
const PIN_LENGTH = 6;

export default function PinLock({ onUnlock }: Props) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleDigit = (d: string) => {
    if (pin.length >= PIN_LENGTH) return;
    setError(false);
    const next = pin + d;
    setPin(next);

    if (next.length === PIN_LENGTH) {
      if (next === CORRECT_PIN) {
        timeoutRef.current = window.setTimeout(() => onUnlock(), 350);
      } else {
        setError(true);
        setShake(true);
        timeoutRef.current = window.setTimeout(() => {
          setPin("");
          setShake(false);
        }, 700);
      }
    }
  };

  const handleDelete = () => {
    setError(false);
    setPin((p) => p.slice(0, -1));
  };

  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >
        <div className="rounded-full bg-burgundy/60 border border-gold/40 p-4 shadow-lg">
          <Lock size={22} className="text-gold" />
        </div>
        <h2 className="mt-5 font-serif text-2xl text-cream">Masukkan PIN</h2>
        <p className="mt-2 text-xs text-lavender text-center">
          Surat ini hanya untuk kamu, {""}
          <span className="text-gold">Nayla</span>. 💌
        </p>
      </motion.div>

      {/* Indikator PIN */}
      <motion.div
        animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex gap-3"
      >
        {Array.from({ length: PIN_LENGTH }).map((_, i) => {
          const filled = i < pin.length;
          return (
            <div
              key={i}
              className={`h-3.5 w-3.5 rounded-full border transition-all duration-200 ${
                error
                  ? "bg-burgundy border-burgundy"
                  : filled
                    ? "bg-gold border-gold scale-110"
                    : "bg-transparent border-lavender/50"
              }`}
            />
          );
        })}
      </motion.div>

      <div className="mt-4 h-5">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-burgundy"
          >
            PIN salah. Coba lagi ya 😊
          </motion.p>
        )}
      </div>

      {/* Keypad */}
      <div className="mt-8 grid w-full max-w-[280px] grid-cols-3 gap-3">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => (
          <button
            key={d}
            onClick={() => handleDigit(d)}
            aria-label={`Angka ${d}`}
            className="aspect-square rounded-full bg-deepblue/70 border border-lavender/20 text-cream font-serif text-2xl active:scale-95 active:bg-burgundy/50 transition"
          >
            {d}
          </button>
        ))}
        <div />
        <button
          onClick={() => handleDigit("0")}
          aria-label="Angka 0"
          className="aspect-square rounded-full bg-deepblue/70 border border-lavender/20 text-cream font-serif text-2xl active:scale-95 active:bg-burgundy/50 transition"
        >
          0
        </button>
        <button
          onClick={handleDelete}
          aria-label="Hapus"
          className="aspect-square rounded-full bg-deepblue/40 border border-lavender/20 text-lavender flex items-center justify-center active:scale-95 transition"
        >
          <Delete size={20} />
        </button>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-10 text-[11px] text-lavender/70 text-center tracking-wide"
      >
        Hint: tanggal lahir, bulan kamu, bulan aku✨
      </motion.p>
    </div>
  );
}