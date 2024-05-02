import Link from 'next/link';
import { logOut, isLoggedIn } from '@app/lib/actions';

export default async function PageHeader(){
    let loggedIn = await isLoggedIn();
    return(
        <header className="bg-gray-800 py-2 px-6 border-b border-gray-300">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white font-bold text-xl">Thrift Trackr.</a>
                <nav>
                    <ul className="flex space-x-1 divide-x divide-gray-500">
                        <li className="w-28 flex justify-center"><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
                        <li className="w-28 flex justify-center"><Link href="#" className="text-white hover:text-gray-300">About</Link></li>
                        <li className="w-28 flex justify-center"><Link href="#" className="text-white hover:text-gray-300">Contact</Link></li>
                       { loggedIn && <form action={logOut} >
                            <li className="w-28 flex justify-center"><button type="submit" className="text-red-300 hover:text-pink-300">Log out</button></li>
                        </form>}
                    </ul>
                </nav>
            </div>
        </header>
  );
}