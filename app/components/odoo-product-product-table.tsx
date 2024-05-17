import { ProductProduct } from "@app/lib/odoo-definitions";

const OdooProductProductTable = ({products}: {products: ProductProduct[]}) => {
    
    return(
    <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800">
            <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {products.map((product, index) => (

            <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
            </tr>
        ))}

        </tbody>
    </table>
    );
}

export default OdooProductProductTable