import {ADD_CONTACT, GET_DATA} from "./actionTypes";
import axios from 'axios';

export const addContact=(val) => {
    return {
        type:ADD_CONTACT,
        contact:val
    }
};

export const getData=(obj) => {
    return function (dispatch={type:GET_DATA, data:"Error"}) {
        axios.post("http://localhost:5000/api/student"/*"https://jsonplaceholder.typicode.com/users"*/, obj).then((result) =>
            dispatch({ type:GET_DATA,data:result}))
    }
}