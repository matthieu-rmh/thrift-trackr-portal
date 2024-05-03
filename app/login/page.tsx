import LoginForm from "@app/components/login-form";
import { needLogin, firstLogout } from "@app/lib/actions";

export default async function loginPage(){
    let needToLog = await needLogin();
    let firstLog = await firstLogout();
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
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
    );
}