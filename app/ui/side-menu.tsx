import Link from 'next/link';

export default function SideMenu(){
    return(
        <aside className="bg-gray-800 w-auto p-6">
            <nav>
            <ul className="space-y-4">
                <li><Link href="/items" className="font-medium text-white hover:text-gray-300">Items</Link></li>
                <li><a href="#" className="font-medium text-white hover:text-gray-300">Users</a></li>
                <li><a href="#" className="font-medium text-white hover:text-gray-300">Settings</a></li>
            </ul>
            </nav>
         </aside>
  );
}