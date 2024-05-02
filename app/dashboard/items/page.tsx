import { getData} from "@app/lib/data";
import {Item} from "@app/lib/definitions";
// import { verifyUserToken } from "@app/lib/actions";

export default async function Page(){
    let items:Item[] = await getData();
    return(
        <div>
            <div className="m-5">
                <h1 className="border-b border-gray-300 text-3xl">Items</h1>
            </div>
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
        </div>
    );
}