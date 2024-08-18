"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { RecoilRoot } from "recoil";
import { Toaster } from "@/components/ui/sonner";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <RecoilRoot>
        <Toaster />
        {children}
      </RecoilRoot>
    </ThemeProvider>
  );
};
