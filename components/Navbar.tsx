import { Switch } from "@/components/ui/switch";
import { Box } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="h-[8vh] w-full flex justify-between  items-center ">
      <div className="flex  justify-center items-center  gap-2">
        <Box className="size-8" />
        <div className="flex flex-col gap-4">
          <span className="md:text-3xl tracking-tighter text-2xl font-extrabold text-primary flex gap-2 items-center">
            Web3 Wallet{" "}
            <span className="rounded-full text-sm md:text-base flex gap-1 bg-primary/10 border border-primary/50 px-2">
              v 1.0.0
            </span>
          </span>
        </div>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/keshav-exe/projekt-kosh"
      >
        <h1 className="font-bold text-2xl tracking-tighter leading-none hidden md:block">
          Inspired By Kosh
        </h1>
      </a>
      <div className="items-center gap-2 justify-center flex">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AshutoshDM1/Web3Wallet"
        >
          <h1 className="font-bold text-2xl tracking-tighter leading-none hidden md:block">
            My GitHub
          </h1>
        </a>

        <Avatar className="hidden md:block">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
