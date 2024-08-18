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
