"use client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "./ui/button";
import { walletState, mnemonicState } from "@/state/atoms";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { generateMnemonic } from "bip39";
import { useRouter } from "next/navigation";

const MnemonicInput: React.FC = () => {
  const router = useRouter();
  const wallet = useRecoilValue(walletState);
  const setMnemonic = useSetRecoilState(mnemonicState);
  return (
    <>
      <AnimatePresence>
        {wallet !== "" ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex h-[30%] w-full flex-col justify-center gap-2 md:gap-5 md:px-6"
          >
            <h1 className="text-3xl font-extrabold md:text-5xl md:font-bold">
              Secret Recovery Phrase
            </h1>
            <h1 className="text-lg font-medium text-zinc-900 dark:text-zinc-400 md:text-xl">
              Save these words in a safe place.
            </h1>
            <div className="mt-2 flex flex-wrap gap-4">
              <Input
                className="dark:border-white dark:bg-black"
                placeholder="Enter your secret phrase Or Leave it Blank to Generate"
              />
              <Button
                onClick={async function () {
                  const mn = generateMnemonic();
                  setMnemonic((prevMnemonic) => {
                    const newMnemonic = mn.split(" ");
                    return newMnemonic;
                  });
                  setMnemonic((prevMnemonic) => {
                    const newMnemonic = mn.split(" ");
                    return newMnemonic;
                  });

                  router.replace("/wallet");
                }}
              >
                Create Seed Phrase
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MnemonicInput;
