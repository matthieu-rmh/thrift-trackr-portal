import { getItems} from "@app/lib/data";
import {Item} from "@app/lib/definitions";
import { isFirstLoggedIn} from "@app/lib/actions";
import ItemsTable from "@app/components/items-table";
import { odooAuthenticate } from "@app/lib/odoo";

export default async function Page(){
    let isFLoggedIn = await isFirstLoggedIn();

    let items:Item[] = await getItems();

    let odooAuthenticationResBody = await odooAuthenticate();
    console.log( odooAuthenticationResBody );

    return(
        <div>
            <div className="m-5">
                <h1 className="border-b border-gray-300 text-3xl">Items</h1>
            </div>
            <ItemsTable items={items} isFLoggedIn={isFLoggedIn}/>
            <div>
                {odooAuthenticationResBody}
            </div>
        </div>
    );
}