import PageHeader from '@app/ui/page-header' ;
import PageFooter from '@app/ui/page-footer' ;
import SideMenu from '@app/ui/side-menu' ;
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function dashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
    <>
        <SideMenu/>
        {/* CONTENT AREA */}
        <div>
          <div className="flex-grow p-6">
            {/* <h1 className="text-3xl font-bold mb-4">MAIN LAYOUT</h1> */}
            <div>{children}</div>
          </div>
        </div>
    </>
  
  
    );
}