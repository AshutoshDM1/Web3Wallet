import AddWallet from "@/components/AddWallet";
import Footer from "@/components/Footer";
import MnemonicDisplay from "@/components/MnemonicDisplay";
import Navbar from "@/components/Navbar";

const wallet = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[94vh] dark:bg-[#0A0A0A]">
        <Navbar />
        <MnemonicDisplay />
        <AddWallet />
      </div>
    </>
  );
};

export default wallet;
