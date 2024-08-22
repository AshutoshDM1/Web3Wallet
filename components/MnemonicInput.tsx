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
            className="h-[30%] w-full flex flex-col justify-center md:gap-5 gap-2 md:px-6"
          >
            <h1 className="md:text-5xl text-3xl md:font-bold font-extrabold">Secret Recovery Phrase</h1>
            <h1 className="md:text-xl text-lg dark:text-zinc-400 text-zinc-900 font-medium">
              Save these words in a safe place.
            </h1>
            <div className="flex flex-wrap gap-4 mt-2">
              <Input
                className="dark:bg-black dark:border-white"
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
