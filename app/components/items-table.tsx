'use client'
import { Item } from "@app/lib/definitions"
import { useEffect } from "react";
import {deleteFirstLoginCookie } from "@app/lib/actions";
import toast from "react-hot-toast";

type ItemsTableProps = {
    items: Item[];
    isFLoggedIn: boolean;
    // Add other props as needed
  };

const ItemsTable: React.FC<ItemsTableProps> = ({items, isFLoggedIn}) => {
    

    useEffect(()=>{
        if (isFLoggedIn){
            toast.success("Welcome");
            deleteFirstLoginCookie();
        }

    }, [])
    
    return(
    <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800">
            <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {items.map((item, index) => (

            <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.category.name}</td>
            </tr>
        ))}

        </tbody>
    </table>
    );
}

export default ItemsTable