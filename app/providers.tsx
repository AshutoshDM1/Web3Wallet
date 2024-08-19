"use client";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { Toaster } from "@/components/ui/sonner";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <Toaster />
      {children}
    </RecoilRoot>
  );
};
