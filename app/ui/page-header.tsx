import Link from 'next/link';

export default function PageHeader(){
    return(
        <header className="bg-gray-800 py-2 px-6 border-b border-gray-300">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white font-bold text-xl">Thrift Trackr.</a>
                <nav>
                    <ul className="flex space-x-1 divide-x divide-gray-500">
                        <li className="w-28 flex justify-center"><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
                        <li className="w-28 flex justify-center"><Link href="#" className="text-white hover:text-gray-300">About</Link></li>
                        <li className="w-28 flex justify-center"><Link href="#" className="text-white hover:text-gray-300">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
  );
}