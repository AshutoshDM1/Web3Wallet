"use client";
import BlockChain from "@/components/SetBlockChain";
import Navbar from "@/components/Navbar";
import MnemonicInput from "@/components/MnemonicInput";

export default function Home() {
  return (
    <>
      <div className="mx-auto flex min-h-[95vh] max-w-7xl flex-col gap-4 p-4 dark:bg-[#0A0A0A]">
        <Navbar />
        <BlockChain />
        <MnemonicInput />
      </div>
    </>
  );
}
