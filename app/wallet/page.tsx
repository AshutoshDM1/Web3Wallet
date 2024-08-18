import MnemonicDisplay from "@/components/MnemonicDisplay";
import Navbar from "@/components/Navbar";
import { Providers } from "../providers";
import MnemonicInput from "@/components/MnemonicInput";

const wallet = () => {
  return (
    <>
      <Providers>
         <div className="h-[94vh] max-w-7xl mx-auto flex flex-col gap-4 items-center bg-white text-black dark:text-white  dark:bg-[#0A0A0A]"   >
        <Navbar />
        <MnemonicDisplay/>
        </div>
      </Providers>
    </>
  );
};

export default wallet;
