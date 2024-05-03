export async function getItems() {
    const res = await fetch('http://localhost:3010/api/items');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    let result = res.json();
   
    // console.log(result);
    return result;
}