export default function (state={}, action) {
    debugger;
    switch(action.type)
    {
        case "ADD_TODO":
            return{
                ...state,
                todo: action.text
            };
        default:
            return state;
    }
}