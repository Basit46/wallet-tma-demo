import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wallet",
  description: "wallet demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-[450px] mx-auto h-screen bg-[#020820] text-white border-t border-t-[#0E46AC] rounded-t-[32px] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
