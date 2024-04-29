export default function PageHeader(){
    return(
        <header className="bg-gray-800 py-2 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white font-bold text-xl">Thrift Trackr.</a>
                <nav>
                    <ul className="flex space-x-4">
                    <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
  );
}