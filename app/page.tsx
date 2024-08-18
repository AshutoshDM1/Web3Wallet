"use client";
import BlockChain from "@/components/SetBlockChain";
import Navbar from "@/components/Navbar";
import { RecoilRoot } from "recoil";
import MnemonicInput from "@/components/MnemonicInput";
import MnemonicDisplay from "@/components/MnemonicDisplay";

export default function Home() {
  return (
    <div className="h-[94vh] max-w-7xl mx-auto flex flex-col gap-4 items-center bg-white text-black dark:text-white  dark:bg-[#0A0A0A]  ">
      <Navbar />
      <BlockChain />
      <MnemonicInput />
    </div>
  );
}
