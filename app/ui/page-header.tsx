import Link from 'next/link';
import { logOut, isLoggedIn } from '@app/lib/actions';
import ThemeButton from './theme-button';

export default async function PageHeader(){
    let loggedIn = await isLoggedIn();

    return(
        <header className="bg-gray-200 dark:bg-gray-800 py-2 px-6 border-b border-gray-300 dark:border-gray-700">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-gray-900 dark:text-white font-bold text-xl">Thrift Trackr.</a>
                <nav>
                    <ul className="flex space-x-1 divide-x divide-gray-500">
                        <li className="w-28 flex justify-center"><Link href="/" className="text-gray-900 dark:text-white hover:text-gray-700">Home</Link></li>
                        <li className="w-28 flex justify-center"><Link href="#" className="text-gray-900 dark:text-white hover:text-gray-700">About</Link></li>
                        <li className="w-28 flex justify-center"><Link href="#" className="text-gray-900 dark:text-white hover:text-gray-700">Contact</Link></li>
                        <li className="w-28 flex justify-center"><ThemeButton/></li>

                       { loggedIn && <form action={logOut} >
                            <li className="w-28 flex justify-center"><button type="submit" className="text-red-600 hover:text-red-400">Log out</button></li>
                        </form>}
                    </ul>
                </nav>
            </div>
        </header>
  );
}