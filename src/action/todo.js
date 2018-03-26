import {ADD_TODO} from "./actionTypes";

export const addTodo=(text) => {
    return {
        type:ADD_TODO,
        text
    }
};