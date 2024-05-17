export const odooAuthenticate = async () => {
    /* 
        Get session_id cookie from the authentication from the odoo instance
    */

    // body of the authentication request with my Odoo credentials
    const params = {
        params: 
        {
            db: "main-bte",
            login: "admin",
            password: "admin"
        }
    }

    const res = await fetch('http://localhost:8069/web/session/authenticate',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    // Get all cookies from the  response's headers

    let  cookies = res.headers.get("Set-Cookie");

    // parse the header  to get the session_id
    let session_id = cookies?.split(";")[0].split("=")[1];
   
    // console.log(result);
    return session_id;
    
};

export const odooGetProductProduct = async () => {
    /* 
        Fetch product_product records from the odoo instance
    */

    const odoo_session = await odooAuthenticate();

    const res = await fetch('http://localhost:8069/custom_api/products',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `session_id=${odoo_session}`
        }
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    let result = res.json();
   
    return result;

};