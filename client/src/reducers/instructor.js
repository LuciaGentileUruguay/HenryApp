import { GET_INSTRUCTOR, GET_INSTRUCTOR_DETAIL, PROMOTE_INSTRUCTOR } from '../actions/instructor'

const initialState ={
    user:[{
        id: 0,
        isAdmin: false
    }],
    email: [],
    userDetail: {}
}

export default function instructor (state = initialState, action){
    if (action.type === GET_INSTRUCTOR){
        return {
            ...state,
            user: action.payload
        }
    }
    if (action.type === GET_INSTRUCTOR_DETAIL){
        return {
            ...state,
            userDetail: action.payload
        }
    }
    if (action.type === PROMOTE_INSTRUCTOR){
        return {
            ...state,
            user: action.payload
        }
    }
    return state
}