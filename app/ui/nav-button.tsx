'use client'

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const handleNavChange = () => {
    console.log("navChange");
    const mobileNavBar = document.getElementById("mobile-navbar");

    const barIcon = document.getElementById("bar-icon");
    const xMarkIcon = document.getElementById("x-mark-icon");

    if (mobileNavBar?.classList.contains("-top-60")){
        mobileNavBar?.classList.replace("-top-60","top-10");
        xMarkIcon?.classList.remove("hidden");
        barIcon?.classList.add("hidden");
    } else if (mobileNavBar?.classList.contains("top-10")){
        mobileNavBar?.classList.replace("top-10", "-top-60");
        xMarkIcon?.classList.add("hidden");
        barIcon?.classList.remove("hidden");
    }

}

const NavButton = () => {
    return (
        <Link href={'#'} onClick={handleNavChange} className="flex md:hidden w-7 h-7 border-solid border-2 border-gray-400 rounded-md text-gray-500">
            <Bars3Icon id="bar-icon" className="ease-out duration-300"/>
            <XMarkIcon id="x-mark-icon" className="hidden ease-out duration-300"/>
        </Link>
    )
};

export default NavButton;