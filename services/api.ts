import { walletState } from "@/state/atoms";
import axios from "axios";
import { toast } from "sonner";

const apiUrl1 = process.env.NEXT_PUBLIC_API_URL_SOLANA;
const apiUrl2 = process.env.NEXT_PUBLIC_API_URL_ETHERUM;

const HandleError = (error: any): void => {
  if (error.response) {
    console.error("Server error:", error.response.data);
    toast.error(`Server error: ${error.response.data.message}`);
    return error.response.data;
  } else if (error.request) {
    console.error("No response from server:", error.request);
    toast.error("No response from server");
  } else {
    console.error("Request error:", error.message);
    toast.error(`Request error: ${error.message}`);
  }
};

export const getBalance = async (key: string, url: string) => {
  let MainURL: string | undefined = "";
  let dataCall = null;

  const dataSol = {
    jsonrpc: "2.0",
    id: 1,
    method: "getBalance",
    params: ["Eg4F6LW8DD3SvFLLigYJBFvRnXSBiLZYYJ3KEePDL95Q"],
  };

  const dataEth = {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBalance",
    params: ["0xaeaa570b50ad00377ff8add27c50a7667c8f1811", "latest"],
  };

  if (url === "Solana") {
    MainURL = apiUrl1;
    dataCall = dataSol;
  } else if (url === "Ethereum") {
    MainURL = apiUrl2;
    dataCall = dataEth;
  } else {
    MainURL = apiUrl1;
    dataCall = dataSol;
  }

  try {
    const response = await axios.post(`${MainURL}`, dataCall);
    return response.data;
  } catch (error) {
    HandleError(error);
  }
};
