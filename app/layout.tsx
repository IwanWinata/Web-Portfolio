import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components Initialize
import HeaderNavigation from "@/components/headerNavigation";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footerSection";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iwan Winata | Web Portfolio",
  description: "Humble Fullstack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-auto pt-28 sm:pt-36`}
      >
        <div
          className="bg-[#FBE2E3] absolute top-[-6rem] right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
        -z-10"
        ></div>
        <div
          className="bg-[#DBD7FB] absolute top-[-1rem] left-[-35rem] 
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
        md:left-[-33rem] lg:left-[-28rem] xl:left[-15rem] 2xl-left-[-5rem]
        -z-10"
        ></div>
        <ActiveSectionContextProvider>
          <HeaderNavigation />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
