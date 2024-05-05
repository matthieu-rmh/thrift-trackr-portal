import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from '@app/ui/page-header' ;
import PageFooter from '@app/ui/page-footer' ;
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Thrift Trackr App",
  description: "App to track my thrift Items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
          <PageHeader/>
          {/*MAIN CONTENT*/}
          <main className="flex-grow flex bg-gray-200">
            <Toaster/>
            {children}

          </main>
  
          <PageFooter/>
  
      </body>
    </html>
  );
}
