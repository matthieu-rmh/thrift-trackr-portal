'use client'
import {MoonIcon} from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/solid';
import { useEffect} from 'react';

export default function ThemeButton() {

    useEffect(() => {
        // Check if the window object is available (indicating client-side rendering)
        if (typeof window !== 'undefined') {
            // Access localStorage only on the client-side
            let ls = window.localStorage;

            if (!ls.getItem("theme")) {
                /* 
                    If the theme is not set in localStorage, set it to "light" and 
                    apply the "light" theme by removing any existing "dark" className 
                */
                ls.setItem("theme", "light");
                document.getElementsByTagName("html")[0].classList.remove("dark");

                // Set the toggleThemeButton to unchecked
                let toggleThemeButton = document.getElementById("toggletheme") as HTMLInputElement;
                if (toggleThemeButton) {
                    toggleThemeButton.checked = false;
                }

                // Toggle icons display
                let moonIcon = document.getElementById("moon-icon");
                let sunIcon = document.getElementById("sun-icon");

                moonIcon?.classList.add("hidden");
                sunIcon?.classList.remove("hidden");

            };

            
            if ((ls.getItem("theme")) && ls.getItem("theme")==='light'){
                /* 
                    If the theme is  set in localStorageto "light"  
                    apply the "light" theme by removing any existing "dark" className 
                */
                document.getElementsByTagName("html")[0].classList.remove("dark");

                // Set the toggleThemeButton to unchecked
                let toggleThemeButton = document.getElementById("toggletheme") as HTMLInputElement;
                if (toggleThemeButton) {
                    toggleThemeButton.checked = false;
                }

                // Toggle icons display
                let moonIcon = document.getElementById("moon-icon");
                let sunIcon = document.getElementById("sun-icon");

                moonIcon?.classList.add("hidden");
                sunIcon?.classList.remove("hidden");
            }

            if ((ls.getItem("theme")) && ls.getItem("theme")==='dark'){
                /* 
                    If the theme is  set in localStorageto "dark"  
                    apply the "dark" theme by removing any existing "dark" 
                    className and adding it again to not make duplicate classname
                */
                    document.getElementsByTagName("html")[0].classList.remove("dark");
                    document.getElementsByTagName("html")[0].classList.add("dark");

                // Set the toggleThemeButton to checked
                let toggleThemeButton = document.getElementById("toggletheme") as HTMLInputElement;
                if (toggleThemeButton) {
                    toggleThemeButton.checked = true;
                }

                // Toggle icons display
                let moonIcon = document.getElementById("moon-icon");
                let sunIcon = document.getElementById("sun-icon");

                moonIcon?.classList.remove("hidden");
                sunIcon?.classList.add("hidden");
            }

        }
        }, []);


    const handleToggleTheme = () => {
       
        let theme = window.localStorage.getItem("theme")==='light'? 'dark' : 'light';

        if (theme === 'light'){
            document.getElementsByTagName("html")[0].classList.remove("dark");

            // Toggle icons display
            let moonIcon = document.getElementById("moon-icon");
            let sunIcon = document.getElementById("sun-icon");

            moonIcon?.classList.add("hidden");
            sunIcon?.classList.remove("hidden");

        } else if (theme === 'dark'){
            document.getElementsByTagName("html")[0].classList.remove("dark");
            document.getElementsByTagName("html")[0].classList.add("dark");

            // Toggle icons display
            let moonIcon = document.getElementById("moon-icon");
            let sunIcon = document.getElementById("sun-icon");

            moonIcon?.classList.remove("hidden");
            sunIcon?.classList.add("hidden");
        }

        window.localStorage.setItem("theme", theme);

    }

    return(
        <>
            <label className="flex items-center cursor-pointer w-full ml-2">
                <input onChange={() => handleToggleTheme()} id="toggletheme" type="checkbox" name='toggleTheme' className="sr-only peer"/>
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span><SunIcon id="sun-icon" className="w-7 h-7"/><MoonIcon id="moon-icon" className="w-7 h-7 text-white"/>
            </label>
        </>
    );
}