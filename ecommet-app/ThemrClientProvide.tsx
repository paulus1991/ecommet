"use client"; // Mark this as a client component

import { theme } from "@/app/shared/Theme/theme";
import { ThemeProvider } from "@mui/material";

export function ThemeClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
