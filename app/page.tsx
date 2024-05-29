import { playfairDisplay } from "./ui/fonts";

export default function Home() {

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-r from-slate-300 to-slate-600 dark:from-slate-900 dark:to-slate-500 ease-out duration-300">
      <div className="flex flex-col w-1/3 h-1/3 mx-auto my-auto justify-center items-center">
        <h1 className={`${playfairDisplay.className} text-5xl my-10 dark:text-gray-300 ease-out duration-300`}>THRIFT TRACKR.</h1>
        <a href="/login" className="flex justify-center items-center w-28 h-16 bg-gray-800 hover:bg-gray-900 dark:bg-gray-400 dark:hover:bg-gray-500 border border-transparent rounded-md my-10"><p className="text-white text-center text-lg dark:text-gray-900">Log In</p></a>

      </div>
    </div>
  );
}
