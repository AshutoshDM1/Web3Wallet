"use client";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { walletNoState } from "@/state/atoms";
import { ArrowLeftRight, Copy, HandCoins, SendHorizontal } from "lucide-react";
import { useRecoilValue } from "recoil";
import { useParams, useRouter } from "next/navigation";

type WalletProps = {
  WalletID: number;
  PublicKey: string;
};

const Wallet: React.FC<WalletProps> = () => {
  const { WalletId } = useParams();
  console.log(WalletId);
  // const wallet = useRecoilValue(walletNoState);
  // console.log(wallet.find(index : WalletId) );
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col gap-20 p-4 min-h-[96vh] dark:bg-[#0A0A0A]">
        <Navbar />
        <div className="h-[60vh] flex flex-col items-center gap-8 lg:gap-20 ">
          <div className="w-full flex justify-between items-center ">
            <h1 className="text-3xl font-semibold ">Wallet 1</h1>
            <Avatar className="hidden md:block">
              <AvatarImage src="https://github.com/shadcn.pnn" alt="@shadcn" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex justify-center  gap-5 w-full">
            <h1 className="text-2xl font-semibold ">Public key</h1>
            <h1 className="text-lg font-light break-words flex-wrap w-[50%] ">
              G5Ub1Z5X4HMS65yP5PYNJ532orgdEqtWAWDLdYRJfnzw
            </h1>
            <Copy className="cursor-pointer" />
          </div>
          <h1 className="font-extrabold text-6xl text-center">
            $ {`0.00`}{" "}
            <span className="font-bold text-xl text-[#7f7f7f]">USD</span>{" "}
          </h1>
          <div className="py-1 w-[40vh]  xl:w-fit bg-foreground/10 grid grid-cols-1 xl:grid-cols-3 place-items-center px-1 rounded-sm font-bold ">
            <div className="py-3 w-full px-16 cursor-pointer text-2xl rounded-sm hover:bg-blue-500 ease-in-out duration-150 flex justify-center items-center">
              <SendHorizontal className="" />
              <span>SEND</span>
            </div>
            <div className="py-3 w-full px-16 cursor-pointer text-2xl rounded-sm hover:bg-blue-500 ease-in-out duration-150 flex justify-center items-center">
              <HandCoins className="" />
              <span>RECEIVE</span>
            </div>
            <div className="py-3 w-full px-16 cursor-pointer text-2xl rounded-sm hover:bg-blue-500 ease-in-out duration-150 flex justify-center items-center">
              <ArrowLeftRight className="" />
              <span>SWAP</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
