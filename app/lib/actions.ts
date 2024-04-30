'use server';

import { redirect } from 'next/navigation';

// function makeFetching(url: string, data: Object, method: string): Object{
//     /*
//         // MAKING THE POST REQUEST TO ATTEMPT TO AUTHENTICATE TO THE BACKEND SERVER
//         // USING THEN / CATCH METHODS
//     */
//     fetch(url, {
//         method: method,
//         headers: {
//             "Content-Type": "application/json",
//           },
//         body: JSON.stringify(data)

//         // The reponse value will be the json having the access token if request succesful
//       }).then(response => response.json()).then((value) => {
//         console.log("VALUE IN METHOD");
//         console.log(value);
//           return value;
//         // If not, will be the error message to display/treat on the UI
//       }).catch((error) => {
//         console.log(error);
//       });

//     return {};
// }

export async function logIn(formData: FormData){

    let url = "http://localhost:3010/auth/login";
    let response_value;

    const data = {name: formData.get('name'), password: formData.get('password')};

    // MAKING THE POST REQUEST TO ATTEMPT TO AUTHENTICATE TO THE BACKEND SERVER
    // USING THEN / CATCH METHODS
    
    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         },
    //     body: JSON.stringify(data)
    //     // The reponse value will be the json having the access token if request succesful
    //     }).then(response => response.json()).then((value) => {
    //         console.log("VALUE IN METHOD");
    //         console.log(value);

    //         if ('errors' in value){
    //             redirect('/');
    //         } else{
    //             redirect('/dashboard/items');
    //         }
    //     // If not, will be the error message to display/treat on the UI
    //     }).catch((error) => {

    //         console.log(error);
    //     });


    // USING TRY / CATCH BRACKETS
      try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        let res = await response.json();
        response_value = res;
      } catch (error) {
        response_value = error;
      }

    if ('errors' in response_value){
        redirect('/');
    } else{
        redirect('/dashboard/items');
    }

}