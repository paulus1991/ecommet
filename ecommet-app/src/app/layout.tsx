import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./lib/Navbar";
import { theme } from "./shared/Theme/theme";
import { ThemeClientProvider } from "../../ThemrClientProvide";

const poppinsFont = localFont({
  src: "./fonts/Poppins-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Ecommet",
  description: "Ecommet Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
        }}
        className={poppinsFont.className}
      >
        <ThemeClientProvider>
          <Navbar />
          {children}
        </ThemeClientProvider>
      </body>
    </html>
  );
}
