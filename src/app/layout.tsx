import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Timon Cards | Designed for travellers who never want to be stranded",
  description:
    "Load any currency or stablecoin and spend everywhere Visa and Mastercard work. Earn rewards on every transaction. Apple and Google Pay supported.",
  keywords: [
    "stablecoin card",
    "dollar card Nigeria",
    "travel dollar card",
    "dollar cards for Nigerians",
    "crypto card Nigeria",
    "global travel card",
    "travel card Nigeria",
    "use Apple Pay in Nigeria",
    "use Google Pay in Nigeria",
    "virtual dollar card",
    "international debit card Nigeria",
    "Visa card for travellers",
    "Mastercard for Nigerians abroad",
    "card for travelling from Nigeria",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
