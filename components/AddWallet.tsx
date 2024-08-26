"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { mnemonicState, walletNoState, walletState } from "@/state/atoms";
import { Button } from "./ui/button";
import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { ethers } from "ethers";
import { Eye, EyeOff, Trash } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const AddWallet = () => {
  const router = useRouter();
  const [WalletNo, setWalletNo] = useRecoilState(walletNoState);
  const [Wallet, setWallet] = useRecoilState(walletState);
  const [show, setShow] = useState(true);
  const mnemonic = useRecoilValue(mnemonicState);

  const [getWallet, setGetWallet] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setGetWallet(localStorage.getItem("wallet"));
    }
  }, []);

  const handleRemoveAllWallets = () => {
    setWalletNo([]);
    toast.warning("All Wallets Removed");
  };

  const handleRemoveWallets = (index: number) => {
    setWalletNo(WalletNo.filter((_, i) => i !== index));
    toast.warning(`Wallet No-${index + 1} Removed `);
  };

  const handleChangeWalletType = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("wallet");
    }
    setWallet("");
    setWalletNo([]);
    toast.warning("All Wallets Removed, Select Your Blockchain");
    router.push("/");
  };

  const walletType =
    getWallet === "Ethereum" ? 60 : getWallet === "Solana" ? 501 : 0;

  const handleAddWallet = () => {
    const seed = mnemonicToSeedSync(mnemonic.join(" "));

    let publicKey, privateKey;

    if (walletType === 501) {
      const path = `m/44'/${walletType}'/${WalletNo.length}'/0'`;
      const derivedSeed = derivePath(path, seed.toString("hex")).key;
      const keyPair = nacl.sign.keyPair.fromSeed(derivedSeed);
      publicKey = Keypair.fromSecretKey(keyPair.secretKey).publicKey.toBase58();
      privateKey = Buffer.from(keyPair.secretKey).toString("hex");
    } else if (walletType === 60) {
      const path = `m/44'/${walletType}'/${WalletNo.length}'/0'/0`;
      const mnemonicObj = ethers.Mnemonic.fromPhrase(mnemonic.join(" "));
      const wallet = ethers.HDNodeWallet.fromMnemonic(mnemonicObj, path);
      publicKey = wallet.address;
      privateKey = wallet.privateKey;
    } else {
      toast.error("Unsupported wallet type");
      return;
    }

    setWalletNo([...WalletNo, { publicKey, privateKey }]);
    toast.success("New Wallet Created");
  };

  const wallet = useRecoilValue(walletState);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="h-fit w-full py-8 flex flex-wrap gap-5 justify-between items-center"
        >
          <h1 className="text-5xl font-bold">{wallet} Wallet</h1>
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleAddWallet}>Add Wallet</Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-500">
                  Remove All Wallets
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    all your wallet keys.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleRemoveAllWallets}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-500">
                  Change Wallet Type
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    all your wallets and keys.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleChangeWalletType}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </motion.div>
        <div className="min-h-[65vh] max-h-fit w-full flex flex-col gap-8 pb-10">
          {WalletNo.map((wallet, index) => (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              key={index}
              className="h-fit p-8 border-[1px] border-[#6363637c] rounded-xl w-full flex-col flex justify-center items-center"
            >
              <div className="w-full flex justify-between items-center">
                <h1 className="text-3xl font-semibold flex justify-center items-center">
                  Wallet {index + 1}
                </h1>
                <div className="flex gap-3">
                  <Button
                    onClick={() =>
                      router.push(`wallet/${index + 1}/${wallet.publicKey}`)
                    }
                    className="px-4"
                  >
                    Select Wallet
                  </Button>
                  <Button
                    onClick={() => handleRemoveWallets(index)}
                    className="px-2"
                  >
                    <Trash className="text-3xl w-full h-full" />
                  </Button>
                </div>
              </div>
              <div className="h-fit w-full pt-10">
                <h1 className="text-2xl font-semibold flex items-center pb-5">
                  Public Key
                </h1>
                <h2 className="break-words">{wallet.publicKey}</h2>
                <h1 className="text-2xl pt-8 font-semibold flex items-center pb-5">
                  Private Key
                </h1>
                <div className="flex items-center justify-between ">
                  {show ? (
                    <h2 className="break-words">
                      ••••••••••••••••••••••••••••••••••••••••••••••••••••••
                    </h2>
                  ) : (
                    <h2 className="break-words">{wallet.privateKey}</h2>
                  )}
                  {show ? (
                    <Eye
                      className="cursor-pointer"
                      onClick={() => setShow(!show)}
                    />
                  ) : (
                    <EyeOff
                      className="cursor-pointer"
                      onClick={() => setShow(!show)}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
};

export default AddWallet;
