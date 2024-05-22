import { playfairDisplay } from "./ui/fonts";

export default function Home() {

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-r from-slate-300 to-slate-600 dark:from-slate-900 dark:to-slate-500 ease-out duration-300">
      <div className="flex flex-col w-1/3 h-1/3 mx-auto my-auto justify-center items-center">
        <h1 className={`${playfairDisplay.className} text-5xl my-10`}>THRIFT TRACKR.</h1>
        <a href="/login" className="flex justify-center items-center w-28 h-16 bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md my-10"><p className="text-white text-center text-lg">Log In</p></a>

      </div>
    </div>
  );
}
