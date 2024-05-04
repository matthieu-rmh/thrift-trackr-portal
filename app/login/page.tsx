import LoginForm from "@app/components/login-form";
import { needLogin, firstLogout } from "@app/lib/actions";
import Image from "next/image";

export default async function loginPage(){
    let needToLog = await needLogin();
    let firstLog = await firstLogout();
    return(
        <div className="grid grid-cols-3 w-full">
            <div className="col-span-1 min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Log in to your Thrift Trackr. account
                    </h2>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <LoginForm needToLog={needToLog} firstLogOut={firstLog}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <Image src='/img/thrift-homepage-background.png' alt={'thrift-homepage-background.png'} width={2000} height={2000} className="w-full h-full"/>
            </div>
        </div>

    );
}