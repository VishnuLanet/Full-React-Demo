import {ADD_CONTACT, GET_DATA} from "../action/actionTypes";

export default (state={}, action) => {
    switch(action.type)
    {
        case ADD_CONTACT:
            return {
                ...state,
                contact: action.contact
            };
        case GET_DATA:
            return action.data;
        default:
            return state;
    }
}