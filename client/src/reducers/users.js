
import {ADD_USER, UPDATE_USER, RESET_PASSWORD, SET_USER, CLEAN_USER, GET_ALL_USERS, USER_LOGOUT} from '../actions/user.js'
import { PROMOTE_PM, GET_PM, GET_PM_DETAIL} from '../actions/pm'


const initialState ={
    user:{
        id: 0,
        isAdmin: false
    },
    email: [],
}

export default function user (state = initialState, action){
    if (action.type === ADD_USER){
        return {
            ...state,
            // user: state.user.concat(action.payload)
        }
    }
    if (action.type === UPDATE_USER){
        return {
            ...state,
            user: action.payload
        }
    }
    if (action.type === RESET_PASSWORD){
        return {
            ...state,
            email: action.payload
        }
    }

    if (action.type === PROMOTE_PM){
        return {
            ...state,
            user: action.payload
        }
    }
    if (action.type === GET_PM){
        return {
            ...state,
            user: action.payload
        }
    }

    if (action.type === SET_USER){
        return {
            ...state,
            user: action.payload
        }
    }
    if (action.type === USER_LOGOUT){
        return{
          ...state,
          user: {}
      }
    }

    if (action.type === CLEAN_USER){
        return state = initialState
    }

    if (action.type === GET_ALL_USERS){
       // console.log(action.type)
        //console.log(action.payload)
        return {
            ...state,
            usuario: action.payload
        }
    }
    return state
}