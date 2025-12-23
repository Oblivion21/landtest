import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VaultX - The Rise of Your Savings Begins Here",
  description: "A turnkey way to invest in crypto, designed with top global standards of capital management. Track your crypto journey effortlessly with VaultX.",
  keywords: ["crypto", "investment", "savings", "cryptocurrency", "fintech", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
