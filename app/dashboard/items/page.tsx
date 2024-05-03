import { getData} from "@app/lib/data";
import {Item} from "@app/lib/definitions";
import { isFirstLoggedIn, deleteFirstLoginCookie } from "@app/lib/actions";
// import { useEffect } from "react";
import toast from "react-hot-toast";
import ItemsTable from "@app/components/items-table";

export default async function Page(){
    let isFLoggedIn = await isFirstLoggedIn();

    // useEffect(()=>{
    //     if (isFLoggedIn){
    //         toast.success("Welcome");
    //         deleteFirstLoginCookie();
    //     }

    // }, [])

    let items:Item[] = await getData();

    return(
        <div>
            <div className="m-5">
                <h1 className="border-b border-gray-300 text-3xl">Items</h1>
            </div>
            <ItemsTable items={items} isFLoggedIn={isFLoggedIn}/>
        </div>
    );
}