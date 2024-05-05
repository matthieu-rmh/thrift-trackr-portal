'use server';

import { redirect } from 'next/navigation';
import { LoginFormState } from './definitions';
import { cookies } from 'next/headers'

export async function getTheme() {
  /*
    Returns the current theme from cookie
    If not defined, set it to the default one (light)
   */

  let defaultTheme = "light";

  if (!cookies().has("theme")){
    return defaultTheme;
  } else {
    return cookies().get("theme");
  }
  
}

export async function deleteFirstLogoutCookie() {
  /* called after the succesful display of the 'first_logout' toast */
  cookies().delete("first_logout");
}

export async function firstLogout(){
  /* 
    Checks if the "first_logout" cookie is set 
    (which means the user just logged out) 
    Returns the boolean on whether or not the login page 
    should display the "first_logout" toast or not  
  */
  let firstLogout = false;

  if (cookies().has("first_logout") && cookies().get("first_logout")?.value=="true"){
    firstLogout = true;
  }
 
  return firstLogout;
}

export async function isFirstLoggedIn() {
  /*
    This function checks if the user is logged in for the first time
  */
  let isFirstLoggedIn = false;

  if (cookies().has("first_login") && cookies().get("first_login")?.value=="true"){
    isFirstLoggedIn = true;
  }
 
  return isFirstLoggedIn;
}

export async function deleteFirstLoginCookie() {
  /* called after the succesful display of the 'first_login' toast*/
  cookies().delete("first_login");
}


export async function deleteNeedLoginCookie(){
  /* called after the first display of the 'need_login' toast */
  cookies().delete("need_login");
}

export async function needLogin(){
  /* 
    Checks if the "need_login" cookie is set 
    (which means there was an attempt to enter a 
    protected route without a valid 'user_token') 
    Returns the boolean on whether or not the login page 
    should display the "need_login" toast or not  
  */
  let needLogin = false;

  if (cookies().has("need_login") && cookies().get("need_login")?.value=="true"){
    needLogin = true;
  }
 
  return needLogin;
}
export async function isLoggedIn() {
  /* check if user is logged_in (user_token in cookies) */
  return cookies().has("user_token");
}

export async function logOut() {
  /* log out action */

  cookies().delete("user_token");
  // This cookie will be used to display a toast after a succesful logout
  cookies().set("first_logout","true");
  redirect('/login');
}

export async function readCookies(){
  /* Read cookies for test purposes */
  console.log("READING COOKIES");
  console.log(cookies().getAll());
}

export async function verifyUserToken(userToken: string){
  /*
    This function will make a request to the API 
    to verify the user token validirty
  */
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

export async function toggleTheme(formData: FormData){
  console.log(formData);
}

export async function logIn(state: LoginFormState, formData: FormData){
  /* Log in to the server and get the user token if succesful */

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