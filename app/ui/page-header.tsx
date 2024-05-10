import Link from 'next/link';
import { logOut, isLoggedIn } from '@app/lib/actions';
import ThemeButton from './theme-button';
import NavButton from './nav-button';

export default async function PageHeader(){
    let loggedIn = await isLoggedIn();

    return(
        <header className="bg-gray-200 dark:bg-gray-800 py-2 px-6 border-b border-gray-300 dark:border-gray-700 ease-out duration-300 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-gray-900 dark:text-white font-bold text-xl">Thrift Trackr.</a>
                {/* Desktop Nav Bar START*/}
                <nav className="hidden md:flex">
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
                <NavButton/>
                {/* Desktop Nav Bar END */}

                {/* Mobile Nav Bar START */}

                <nav id="mobile-navbar" className="flex md:hidden absolute bg-gray-200 dark:bg-gray-800 inset-x-0 -top-60 ease-out duration-1000">
                    <ul className="w-full divide-y">
                        <li className="text-center my-2 pt-4"><Link href="/" className="text-gray-900 dark:text-white">Home</Link></li>
                        <li className="text-center my-2 pt-4"><Link href="#" className="text-gray-900 dark:text-white">About</Link></li>
                        <li className="text-center my-2 pt-4"><Link href="#" className="text-gray-900 dark:text-white">Contact</Link></li>
                        <li className="flex justify-center text-center my-2 pt-4"><ThemeButton/></li>

                       { loggedIn && <form action={logOut} >
                            <li className="text-center"><button type="submit" className="text-red-600 hover:text-red-400">Log out</button></li>
                        </form>}
                    </ul>
                </nav>
                {/* Mobile Nav Bar END */}
            </div>
        </header>
  );
}