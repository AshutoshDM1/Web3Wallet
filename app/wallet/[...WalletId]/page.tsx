"use client";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeftRight, Copy, HandCoins, SendHorizontal } from "lucide-react";
import { useParams } from "next/navigation";
import { getBalance } from "@/services/api";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const Wallet: React.FC = () => {
  const [balance, setBalance] = useState(0.0);

  let getwallet: string | null = localStorage.getItem("wallet");

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
        <motion.div className="mx-auto flex min-h-[96vh] max-w-7xl flex-col gap-20 p-4 dark:bg-[#0A0A0A]">
          <Navbar />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, staggerChildren: 0.3, delay: 0.5 }}
            className="flex h-[60vh] flex-col items-center gap-8 lg:gap-20"
          >
            <div className="flex w-full items-center justify-between">
              <h1 className="text-3xl font-semibold">
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
            <div className="flex w-full justify-center gap-5">
              <h1 className="text-2xl font-semibold">Public key</h1>
              <Copy
                onClick={() => copyToClipboard(WalletId[1])}
                className="mt-2 cursor-pointer"
              />
              <h1 className="mt-1 w-[50%] flex-wrap break-words text-lg font-light">
                {WalletId?.[1]}
              </h1>
            </div>
            <motion.h1 className="text-center text-6xl font-extrabold">
              $ {balance}{" "}
              <span className="text-xl font-bold text-[#7f7f7f]">
                {getwallet}
              </span>{" "}
            </motion.h1>
            {/* <div className="grid w-[40vh] grid-cols-1 place-items-center rounded-sm bg-foreground/10 px-1 py-1 font-bold xl:w-fit xl:grid-cols-3">
              <div className="flex w-full cursor-pointer items-center justify-center rounded-sm px-16 py-3 text-2xl duration-150 ease-in-out hover:bg-blue-500">
                <SendHorizontal />
                <span>SEND</span>
              </div>
              <div className="flex w-full cursor-pointer items-center justify-center rounded-sm px-16 py-3 text-2xl duration-150 ease-in-out hover:bg-blue-500">
                <HandCoins />
                <span>RECEIVE</span>
              </div>
              <div className="flex w-full cursor-pointer items-center justify-center rounded-sm px-16 py-3 text-2xl duration-150 ease-in-out hover:bg-blue-500">
                <ArrowLeftRight />
                <span>SWAP</span>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Wallet;
