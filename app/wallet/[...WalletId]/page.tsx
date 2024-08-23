"use client";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { walletState } from "@/state/atoms";
import { ArrowLeftRight, Copy, HandCoins, SendHorizontal } from "lucide-react";
import { useRecoilValue } from "recoil";
import { useParams } from "next/navigation";
import { getBalance } from "@/services/api";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";



const Wallet: React.FC = () => {
  const [balance, setBalance] = useState(0.0);

  let getwallet = useRecoilValue(walletState);
  if (getwallet === "") {
    getwallet = "Solana";
  }

  const { WalletId } = useParams<{ WalletId: string[] }>();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = await getBalance(WalletId[1], getwallet);
        const balance = data.result.value / 1000000000;
        setBalance(balance);
      } catch (error) {}
    };

    fetchBalance();
  }, [getwallet]);

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard!");
  };

  return (
    <>
      <AnimatePresence>
        <motion.div className="max-w-7xl mx-auto flex flex-col gap-20 p-4 min-h-[96vh] dark:bg-[#0A0A0A]">
          <Navbar />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, staggerChildren: 0.3, delay: 0.5 }}
            className="h-[60vh] flex flex-col items-center gap-8 lg:gap-20 "
          >
            <div className="w-full flex justify-between items-center ">
              <h1 className="text-3xl font-semibold ">
                Wallet {WalletId?.[0]}{" "}
              </h1>
              <Avatar className="hidden md:block">
                <AvatarImage
                  src="https://github.com/shadcn.pnn"
                  alt="@shadcn"
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex justify-center gap-5 w-full">
              <h1 className="text-2xl font-semibold ">Public key</h1>
              <Copy 
              onClick={()=>copyToClipboard(WalletId[1])}
              className="cursor-pointer mt-2 "
              
              />
              <h1 className="text-lg font-light break-words flex-wrap w-[50%] mt-1">
                {WalletId?.[1]}
              </h1>
            </div>
            <motion.h1
              className="font-extrabold text-6xl text-center"
            >
              $ {balance}{" "}
              <span className="font-bold text-xl text-[#7f7f7f]">
                {getwallet}
              </span>{" "}
            </motion.h1>
            <div className="py-1 w-[40vh] xl:w-fit bg-foreground/10 grid grid-cols-1 xl:grid-cols-3 place-items-center px-1 rounded-sm font-bold ">
              <div className="py-3 w-full px-16 cursor-pointer text-2xl rounded-sm hover:bg-blue-500 ease-in-out duration-150 flex justify-center items-center">
                <SendHorizontal />
                <span>SEND</span>
              </div>
              <div className="py-3 w-full px-16 cursor-pointer text-2xl rounded-sm hover:bg-blue-500 ease-in-out duration-150 flex justify-center items-center">
                <HandCoins />
                <span>RECEIVE</span>
              </div>
              <div className="py-3 w-full px-16 cursor-pointer text-2xl rounded-sm hover:bg-blue-500 ease-in-out duration-150 flex justify-center items-center">
                <ArrowLeftRight />
                <span>SWAP</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Wallet;
