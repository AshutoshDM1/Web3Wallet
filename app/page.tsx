"use client";
import BlockChain from "@/components/SetBlockChain";
import Navbar from "@/components/Navbar";
import MnemonicInput from "@/components/MnemonicInput";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[95vh] dark:bg-[#0A0A0A]">
        <Navbar />
        <BlockChain />
        <MnemonicInput />
      </div>
    </>
  );
}
