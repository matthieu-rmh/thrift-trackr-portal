import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageHeader from '@app/ui/page-header' ;
import PageFooter from '@app/ui/page-footer' ;
import SideMenu from '@app/ui/side-menu' ;
import "./globals.css";

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
    <html lang="en">
      
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <PageHeader/>
        {/*MAIN CONTENT*/}
        <main className="flex-grow flex bg-gray-200">
          {/* SIDE MENU */}
          <SideMenu/>

          {/* CONTENT AREA */}
          <div>
            <div className="flex-grow p-6">
              {/* <h1 className="text-3xl font-bold mb-4">MAIN LAYOUT</h1> */}
              <div>{children}</div>
            </div>
          </div>

        </main>

        <PageFooter/>

      </body>
      
      

    </html>
  );
}
