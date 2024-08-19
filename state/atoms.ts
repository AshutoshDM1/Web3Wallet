import { atom } from "recoil";

export const walletState = atom<string>({
  key: "wallet",
  default: "",
});

export const mnemonicState = atom<string[]>({
  key: "mnemonic",
  default: [
    "album",
    "wheel",
    "increase",
    "rail",
    "raven",
    "ball",
    "young",
    "wrestle",
    "coin",
    "laundry",
    "wet",
    "oven",
  ],
});

type Wallet = {
  privateKey: string;
  publicKey: string;
};

type walletNo = Wallet[];

export const walletNoState = atom<walletNo>({
  key: "walletNoState",
  default: [],
});
