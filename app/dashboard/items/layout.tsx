import SideMenu from '@app/ui/side-menu' ;

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
            <div>{children}</div>
          </div>
        </div>
    </>
  
  
    );
}