"use client";
import { useRecoilState } from "recoil";
import { mnemonicState } from "@/state/atoms";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";
import { toast } from "sonner"

const MnemonicDisplay: React.FC = () => {
  const [mnemonic, setMnemonic] = useRecoilState(mnemonicState);
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
            transition={{ duration: 0.5, delay: 0.5 }}
            className="min-h-[20vh] border-[1px] border-[#6363637c] rounded-md w-full gap-10 p-8"
          >
            <div className="flex justify-between ">
              <h1 className="text-3xl font-bold">Your Secret Phrase</h1>
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
                className="flex flex-col w-full items-center justify-center"
                onClick={() => copyToClipboard(mnemonic.join(" "))}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center w-full items-center mx-auto my-8"
                >
                  {mnemonic.map((word, index) => (
                    <p
                      key={index}
                      className="md:text-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 rounded-lg p-4"
                    >
                      {word}
                    </p>
                  ))}
                </motion.div>
                <div className="text-sm md:text-base text-primary/50 flex w-full gap-2 items-center group-hover:text-primary/80 transition-all duration-300">
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
