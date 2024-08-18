import { Switch } from "@/components/ui/switch";
import { Box } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="h-[8vh] w-full flex justify-between px-1 md:px-6  items-center ">
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
      <div className="items-center gap-2 justify-center flex">
        <h1 className="font-bold text-2xl tracking-tighter leading-none hidden md:block">
          Member
        </h1>
        <Avatar className="hidden md:block" >
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ModeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
