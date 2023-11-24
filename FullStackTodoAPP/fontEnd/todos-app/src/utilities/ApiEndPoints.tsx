//imports
import Cookies from "universal-cookie";


//Handling the Cookies
const cookies = new Cookies();
const tokenFromCookies = cookies.get("jwt_authoraisation");
export const authToken = "Bearer ".concat(tokenFromCookies);


//Common Headers
export const headers = {
    'accept': 'application/json',
    "Content-Type": "application/json",
}

//token Headers
export const Token_Headers ={

    'accept':' application/json' ,
    'Content-Type': 'application/x-www-form-urlencoded'
}
//AuthenticataionHeaders
export const authHeaders = {
    'accept': 'application/json',
    "Content-type": "application/json",
    'Authorization': authToken
};

//Baseurl
export const BASEURL = "http://127.0.0.1:8000";

//endpoints

//authentication
export const CREATE_USER = BASEURL + "/auth/";
export const GET_AUTH_TOKEN = BASEURL + "/auth/token";
export const LOGIN = BASEURL +'/auth/authenticate';

//users
export const  CURRENT_USER = BASEURL +"/users/current_user";
export const CHANGE_USER_PASSWORD = BASEURL +"/users/change_password";
export const ALL_USERS = BASEURL+'/users/all_users';

//admin
export const ADMIN_TODOS = BASEURL +"/admin/todos";

//todos
export const TODO = BASEURL+"/todos/";

