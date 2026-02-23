"use client";
import { useRecoilState } from "recoil";
import { Button } from "./ui/button";
import { walletState } from "@/state/atoms";
import { motion, AnimatePresence } from "framer-motion";

type BlockChainProps = {};

const BlockChain: React.FC<BlockChainProps> = () => {
  const [walletSee, setWalletsee] = useRecoilState(walletState);

  const handleButtonClick = (walletType: string) => {
    setWalletsee(walletType);
    if (typeof window !== "undefined") {
      localStorage.setItem("wallet", walletType);
    }
  };

  return (
    <>
      <AnimatePresence>
        {walletSee === "" ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex h-[30%] w-full flex-col justify-center gap-5 md:px-6"
          >
            <h1 className="text-3xl font-extrabold md:text-5xl md:font-bold">
              We support Multiple Blockchains
            </h1>
            <h1 className="text-lg font-medium text-zinc-900 dark:text-zinc-400 md:text-xl">
              Choose a blockchain to get started.
            </h1>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <Button
                onClick={() => handleButtonClick("Solana")}
                className="w-full md:w-24"
              >
                Solana
              </Button>
              <Button
                onClick={() => handleButtonClick("Ethereum")}
                className="w-full md:w-28"
              >
                Ethereum
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default BlockChain;
