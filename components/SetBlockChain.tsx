"use client";
import { useRecoilState } from "recoil";
import { Button } from "./ui/button";
import { walletState } from "@/state/atoms";
import { motion, AnimatePresence } from "framer-motion";

type BlockChainProps = {};
const BlockChain: React.FC<BlockChainProps> = () => {
  const [wallet, setWallet] = useRecoilState(walletState);

  return (
    <>
      <AnimatePresence>
        {wallet === "" ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20  }}
            transition={{ duration: 0.5 }}
            className="h-[30%] w-full flex flex-col justify-center gap-5 px-6"
          >
            <h1 className="text-5xl font-bold">
              We support Multiple Blockchains
            </h1>
            <h1 className="text-xl dark:text-white text-zinc-900 font-medium">
              Choose a blockchain to get started.
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => {
                  setWallet("Solana");
                }}
                className="w-24"
              >
                Solana
              </Button>
              <Button
                onClick={() => {
                  setWallet("Ethereum");
                }}
                className="w-28"
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
