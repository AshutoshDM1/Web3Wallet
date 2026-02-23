"use client";
import AddWallet from "@/components/AddWallet";
import Footer from "@/components/Footer";
import MnemonicDisplay from "@/components/MnemonicDisplay";
import Navbar from "@/components/Navbar";

const MakeWallet = () => {
  return (
    <>
      <div className="mx-auto flex min-h-[94vh] max-w-7xl flex-col gap-4 p-4 dark:bg-[#0A0A0A]">
        <Navbar />
        <MnemonicDisplay />
        <AddWallet />
      </div>
    </>
  );
};

export default MakeWallet;
