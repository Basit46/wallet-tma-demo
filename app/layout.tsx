import type { Metadata } from "next";
import "./globals.css";
import { TelegramProvider } from "./TelegramContext";

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
        className={`max-w-[450px] w-full mx-auto h-screen bg-[#020820] text-white border-t border-x-0 border-x-transparent border-t-[#0E46AC] rounded-t-[32px] antialiased`}
      >
        <TelegramProvider>{children}</TelegramProvider>

        <script src="https://telegram.org/js/telegram-web-app.js?56"></script>
      </body>
    </html>
  );
}
