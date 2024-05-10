'use client'

import Link from "next/link";
import { Bars3Icon } from '@heroicons/react/24/solid';

const handleNavChange = () => {
    console.log("navChange");
    const mobileNavBar = document.getElementById("mobile-navbar");

    if (mobileNavBar?.classList.contains("-top-60")){
        mobileNavBar?.classList.replace("-top-60","top-10");
    } else if (mobileNavBar?.classList.contains("top-10")){
        mobileNavBar?.classList.replace("top-10", "-top-60");
    }

}

const NavButton = () => {
    return (
        <Link href={'#'} onClick={handleNavChange} className="flex md:hidden w-7 h-7 border-solid border-2 border-gray-400 rounded-md text-gray-500">
            <Bars3Icon/>
        </Link>
    )
};

export default NavButton;