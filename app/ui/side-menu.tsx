import Link from 'next/link';

export default function SideMenu(){
    return(
        <aside className="bg-gray-200 w-auto p-6 border-r border-gray-300">
            <nav>
                <ul className="divide-y divide-gray-500">
                    <li className="h-14 flex items-center"><Link href="/dashboard/items" className="font-medium text-gray-900 hover:text-gray-700">Items</Link></li>
                    <li className="h-14 flex items-center"><Link href="#" className="font-medium text-gray-900 hover:text-gray-700">Users</Link></li>
                    <li className="h-14 flex items-center"><Link href="#" className="font-medium text-gray-900 hover:text-gray-700">Settings</Link></li>
                </ul>
            </nav>
         </aside>
  );
}