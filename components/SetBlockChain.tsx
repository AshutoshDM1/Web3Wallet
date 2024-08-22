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
            className="h-[30%] w-full flex flex-col justify-center gap-5 md:px-6"
          >
            <h1 className="md:text-5xl text-3xl md:font-bold font-extrabold">
              We support Multiple Blockchains
            </h1>
            <h1 className="md:text-xl text-lg dark:text-zinc-400 text-zinc-900 font-medium">
              Choose a blockchain to get started.
            </h1>
            <div className="flex flex-wrap md:gap-4 gap-2">
              <Button
                onClick={() => {
                  setWallet("Solana");
                }}
                className="md:w-24 w-full"
              >
                Solana
              </Button>
              <Button
                onClick={() => {
                  setWallet("Ethereum");
                }}
                className="md:w-28 w-full"
              >
                Ethereum
              </Button>
              <Button
                onClick={() => {
                  setWallet("Bitcoin");
                }}
                className="md:w-28 w-full"
              >
                Bitcoin
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default BlockChain;
