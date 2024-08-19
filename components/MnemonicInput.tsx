"use client";
import { useRecoilState } from "recoil";
import { Button } from "./ui/button";
import { walletState, mnemonicState } from "@/state/atoms";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { generateMnemonic } from "bip39";
import { useRouter } from "next/navigation";

const MnemonicInput: React.FC = () => {
  const router = useRouter();
  const [wallet, setWallet] = useRecoilState(walletState);
  const [mnemonic, setMnemonic] = useRecoilState(mnemonicState);
  return (
    <>
      <AnimatePresence>
        {wallet !== "" ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-[30%] w-full flex flex-col justify-center gap-5 px-6"
          >
            <h1 className="text-5xl font-bold">Secret Recovery Phrase</h1>
            <h1 className="text-xl dark:text-white text-zinc-900 font-medium">
              Save these words in a safe place.
            </h1>
            <div className="flex  gap-4">
              <Input
                className="dark:bg-black dark:border-white "
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
