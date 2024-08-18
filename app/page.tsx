import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen max-w-7xl mx-auto flex flex-col gap-4 items-center bg-white text-black dark:text-white  dark:bg-[#0A0A0A]  ">
      <Navbar />
    </div>
  );
}
