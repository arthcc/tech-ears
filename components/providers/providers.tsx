"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { LanguageContextProvider } from "@/src/context/LanguageContext";

const queryClient = new QueryClient();
export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <LanguageContextProvider>
      <QueryClientProvider client={queryClient}>
        {" "}
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </QueryClientProvider>
    </LanguageContextProvider>
  );
}
