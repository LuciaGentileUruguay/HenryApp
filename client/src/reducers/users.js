
import {ADD_USER, UPDATE_USER, RESET_PASSWORD, SET_USER, CLEAN_USER, GET_ALL_USERS, USER_LOGOUT, COMPLETE_USER} from '../actions/user.js'
import { PROMOTE_PM } from '../actions/pm'
import { PROMOTE_INSTRUCTOR} from '../actions/instructor'
import { PROMOTE_STUDENT, SET_COHORT } from '../actions/student'



const initialState ={
    user:{
        id: 0,
    },
    email: [],

}

export default function user (state = initialState, action){
    if (action.type === ADD_USER){
        return {
            ...state,
            user: state.user.concat(action.payload)
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
        }
    }

    // if (action.type === PROMOTE_PM){
    //     return {
    //         ...state,
    //         user: action.payload
    //     }
    // }

    if (action.type === PROMOTE_INSTRUCTOR){
        return {
            ...state,
            user: action.payload
        }
    }

    if (action.type === PROMOTE_STUDENT){
        return {
            ...state,
            user: action.payload
        }
    }


    if (action.type === SET_COHORT){
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
          user: {id:0},
          usuario: {},
          userDetail:{}
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