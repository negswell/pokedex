import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokeDex",
  description: "PokeDex inspired by PokeMon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
