import { Box } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="flex h-[4vh] w-full items-center justify-between md:h-[8vh]">
      <div className="flex items-center justify-center gap-2">
        <Box className="size-6 md:size-8" />
        <div className="flex flex-col gap-4">
          <span className="flex items-center gap-2 text-lg font-extrabold tracking-tighter text-primary md:text-3xl">
            Web3 Wallet{" "}
            <span className="flex gap-1 rounded-full border border-primary/50 bg-primary/10 px-2 text-xs md:text-base">
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
        <h1 className="hidden text-2xl font-bold leading-none tracking-tighter md:block">
          Inspired By Kosh
        </h1>
      </a>
      <div className="flex items-center justify-center gap-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AshutoshDM1/Web3Wallet"
        >
          <h1 className="hidden text-2xl font-bold leading-none tracking-tighter md:block">
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
