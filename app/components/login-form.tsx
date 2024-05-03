'use client'

import { useFormState } from 'react-dom'
import { logIn, deleteNeedLoginCookie, deleteFirstLogoutCookie } from "@app/lib/actions";
import { useSearchParams } from 'next/navigation';
import { useEffect} from 'react';
import { toast } from 'react-hot-toast';

type LoginFormProps = {
    needToLog: boolean;
    firstLogOut: boolean;
  };


const LoginForm: React.FC<LoginFormProps> = ({ needToLog, firstLogOut}) => {
    const searchParams = useSearchParams();
    const [state, action] = useFormState(logIn, undefined)

    const params = new URLSearchParams(searchParams);

    
    
    useEffect(()=>{
        if (needToLog){
            toast.error("You need to be logged in");
            deleteNeedLoginCookie();
        }

        if(firstLogOut){
            toast.success("Logged out succesfully!");
            deleteFirstLogoutCookie();
        }

    }, [])

    return(
        <form action={action} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
                </label>
                <div className="mt-1">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {/* DISPLAY ANY ERROR MESSAGE RELATED TO THE NAME FIELD */}
                    {state?.errors?.name && <div><p className="text-red-500">{state.errors.name}</p></div>}

                </div>
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
                </label>
                <div className="mt-1">
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                    {/* DISPLAY ANY ERROR MESSAGE RELATED TO THE PASSWORD FIELD */}

                    {state?.errors?.password && <div><p className="text-red-500">{state.errors.password}</p></div>}

                </div>
            </div>

            <div>
                <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                Log in
                </button>
            </div>
        </form>
    );
};

export default LoginForm