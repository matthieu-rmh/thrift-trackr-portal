import Link from 'next/link';

export default function SideMenu(){
    return(
        <aside className="bg-gray-800 w-auto p-6">
            <nav>
            <ul className="divide-y divide-gray-500">
                <li className="h-14 flex items-center"><Link href="/items" className="font-medium text-white hover:text-gray-300">Items</Link></li>
                <li className="h-14 flex items-center"><Link href="#" className="font-medium text-white hover:text-gray-300">Users</Link></li>
                <li className="h-14 flex items-center"><Link href="#" className="font-medium text-white hover:text-gray-300">Settings</Link></li>
            </ul>
            </nav>
         </aside>
  );
}