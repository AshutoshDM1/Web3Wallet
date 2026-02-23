"use client";
import { useRecoilValue } from "recoil";
import { mnemonicState } from "@/state/atoms";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";
import { toast } from "sonner";

const MnemonicDisplay: React.FC = () => {
  const mnemonic = useRecoilValue(mnemonicState);
  const [showMnemonic, setShowMnemonic] = useState(false);
  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard!");
  };
  return (
    <>
      <AnimatePresence>
        {mnemonic.length !== 0 ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="min-h-fit w-full gap-10 rounded-md border-[1px] border-[#6363637c] p-3 md:p-8"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold md:text-3xl">
                Your Secret Phrase
              </h1>
              <Button
                onClick={() => setShowMnemonic(!showMnemonic)}
                variant="ghost"
              >
                {showMnemonic ? (
                  <ChevronUp className="size-4" />
                ) : (
                  <ChevronDown className="size-4" />
                )}
              </Button>
            </div>
            {showMnemonic && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="flex w-full flex-col items-center justify-center"
                onClick={() => copyToClipboard(mnemonic.join(" "))}
              >
                <motion.div
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="mx-auto my-8 grid w-full grid-cols-2 items-center justify-center gap-2 md:grid-cols-3 lg:grid-cols-4"
                >
                  {mnemonic.map((word, index) => (
                    <p
                      key={index}
                      className="rounded-lg bg-foreground/5 p-4 transition-all duration-300 hover:bg-foreground/10 md:text-lg"
                    >
                      {word}
                    </p>
                  ))}
                </motion.div>
                <div className="flex w-full cursor-pointer items-center gap-2 text-sm text-primary/50 transition-all duration-300 group-hover:text-primary/80 md:text-base">
                  <Copy className="size-4" /> Click Anywhere To Copy
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MnemonicDisplay;
