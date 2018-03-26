import todo from './todo';
import contact from './contact';

import {combineReducers} from 'redux';

export default combineReducers(
    {
        todo,
        contact
    }
)