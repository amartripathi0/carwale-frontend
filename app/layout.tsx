import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carwale-Clone",
  description: "Carwale Frontend clone built using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "min-h-screen"}>
        <Navbar />
        {/* <div className="fixed top-1/2 z-50 right-0 bg-[#6F6F6F] text-white p-2">
          <h4 className="font-medium text-sm">
          Buying a New Car?
          </h4>
          <p className="text-xs">Ask the Experts</p>
          <h2 className="font-medium">
          1800 2090 230
          </h2>
          <p className="text-xs">(Toll free)</p>
        </div> */}
        {children}
        <Footer/>
      </body>

    </html>
  );
}
