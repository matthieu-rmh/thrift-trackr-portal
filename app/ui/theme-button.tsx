'use client'
import {MoonIcon} from '@heroicons/react/24/outline';
import { toggleTheme } from '@app/lib/actions';
import { useEffect } from 'react';


export default function ThemeButton() {

    const handleToggleTheme = (eTarget: HTMLInputElement) => {
        console.log(window.localStorage);
        console.log(eTarget.checked);
    }

    useEffect(() => {
        // Check if the window object is available (indicating client-side rendering)
        if (typeof window !== 'undefined') {
          // Access localStorage only on the client-side
          console.log(window.localStorage);
          let ls = window.localStorage;
          ls.setItem("theme", "light");
          console.log(ls.getItem("theme"));
        }
      }, []);

    // console.log(localStorage.getItem("theme"));


    return(
        <>
            <label className="inline-flex items-center cursor-pointer">
                <input onChange={(e) => handleToggleTheme(e.target)} type="checkbox" name='toggleTheme' className="sr-only peer"/>
                {/* <input type="checkbox" name='toggleTheme' value="" className="sr-only peer"/> */}
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span><MoonIcon/>
            </label>
        </>
    );
}