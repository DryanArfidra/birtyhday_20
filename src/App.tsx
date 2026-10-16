import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import StarField from "./components/StarField";
import Envelope from "./components/Envelope";
import PinLock from "./components/PinLock";
import Letter from "./components/Letter";
import PhotoAlbum from "./components/PhotoAlbum";
import GiftQuestions from "./components/GiftQuestions";
import DanaGift from "./components/DanaGift";
import Closing from "./components/Closing";
import MusicPlayer from "./components/MusicPlayer";

type Stage =
  | "envelope"
  | "pin"
  | "letter"
  | "album"
  | "questions"
  | "gift"
  | "closing";

export default function App() {
  const [stage, setStage] = useState<Stage>("envelope");
  const [musicOn, setMusicOn] = useState(false);

  const handleOpenEnvelope = () => {
    setMusicOn(true);
    setStage("pin");
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-midnight">
      <StarField count={45} />
      <MusicPlayer shouldPlay={musicOn} />

      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {stage === "envelope" && (
            <Envelope onOpen={handleOpenEnvelope} />
          )}

          {stage === "pin" && (
            <PinLock onUnlock={() => setStage("letter")} />
          )}

          {stage === "letter" && (
            <Letter onContinue={() => setStage("album")} />
          )}

          {stage === "album" && (
            <PhotoAlbum onContinue={() => setStage("questions")} />
          )}

          {stage === "questions" && (
            <GiftQuestions
              onAllCorrect={() => setStage("gift")}
            />
          )}

          {stage === "gift" && (
            <DanaGift onContinue={() => setStage("closing")} />
          )}

          {stage === "closing" && (
            <Closing onRestart={() => setStage("letter")} />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}