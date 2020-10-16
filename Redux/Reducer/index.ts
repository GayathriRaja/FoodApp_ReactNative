import {SignUpReducer} from './SignUpReducer';
import {combineReducers} from 'redux';


const everyReducers=combineReducers({
    signUp:SignUpReducer,
   
});

export default everyReducers;