import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import "@/lib/firebase";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlertStocks",
  description: "Track stock indices and set price alerts easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + " bg-gray-900 text-white min-h-screen"}
      >
        <AuthProvider>
          {children}
          <Toaster position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}
