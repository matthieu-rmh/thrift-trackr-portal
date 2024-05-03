'use server';

import { redirect } from 'next/navigation';
import { LoginFormState } from './definitions';
import { cookies } from 'next/headers'

export async function isFirstLoggedIn() {
  let isFirstLoggedIn = false;

  if (cookies().has("first_login") && cookies().get("first_login")?.value=="true"){
    isFirstLoggedIn = true;
  }
 
  return isFirstLoggedIn;
}

// CALLED AFTER THE SUCCESFUL DISPLAY OF THE 'FIRST_LOGIN' TOAST
export async function deleteFirstLoginCookie() {
  cookies().delete("first_login");
}


// CALLED AFTER THE FIRST DISPLAY OF THE 'NEED_LOGIN' TOAST
export async function deleteNeedLoginCookie(){
  cookies().delete("need_login");
}

/* 
  Checks if the "need_login" cookie is set 
  (which means there was an attempt to enter a 
  protected route without a valid 'user_token') 
  Returns the boolean on whether or not the login page 
  should display the "need_login" toast or not  
*/
export async function needLogin(){
  let needLogin = false;

  if (cookies().has("need_login") && cookies().get("need_login")?.value=="true"){
    needLogin = true;
  }
 
  return needLogin;
}
// CHECK IF USER IS LOGGED_IN (USER_TOKEN IN COOKIES)
export async function isLoggedIn() {
  return cookies().has("user_token");
}

// LOG OUT ACTION
export async function logOut() {
  cookies().delete("user_token");
  redirect('/login');
}

// READ COOKIES FOR TEST PURPOSES
export async function readCookies(){
  console.log("READING COOKIES");
  console.log(cookies().getAll());
}

export async function verifyUserToken(userToken: string){
  let data = {};
  let responseValue;
  try {
    const response = await fetch("http://localhost:3010/auth/verifyUserToken", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "user_token": userToken
        },
        body: JSON.stringify(data)
    });

    let res = await response.json();
    responseValue = res;
  } catch (error) {
    responseValue = error;
  }
  
  return responseValue;
}


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

export async function logIn(state: LoginFormState, formData: FormData){

    let url = "http://localhost:3010/auth/login";
    let responseValue;

    const data = {
      name: formData.get('name'), 
      password: formData.get('password')
    };

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
        responseValue = res;
      } catch (error) {
        responseValue = error;
      }

    // DISPLAY ERRORS IF ERRORS EXIST AT LOGIN FORM
    if ('errors' in responseValue){
      return responseValue;
    // ELSE CREATE SESSION AND REDIRECT TO DASHBOARD
    } else{
        // CREATING SESSION
        cookies().set("user_token", responseValue.accessToken);

        // WE NEED THIS COOKIE TO DISPLAY A SUCCESFUL LOGIN TOAST
        cookies().set("first_login", "true");

        // DELETE THE COOKIE RESPONSIBLE OF DISPLAYING THE NEEDLOGIN TOAST
        cookies().delete("need_login");
        redirect('/dashboard/items');
    }

}

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