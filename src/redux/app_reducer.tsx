import React from "react";
import {authAPI, usersAPI} from "../api/api";
import {setUserProfile} from "./profile_reducer";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth_reducer";

export type AppPropsType = {
    initialized: boolean
}
export type InitializedSuccessType = ReturnType<typeof initializedSuccess>




let initialState: AppPropsType = {
    initialized: false,


}

export const appReducer = (state: AppPropsType = initialState, action: InitializedSuccessType): AppPropsType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

export const initializedSuccess = () => {
    return ({type: "INITIALIZED-SUCCESS"} as const)
}

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise =  dispatch(getAuthUserData())

   Promise.all([promise]).then(() => {
       dispatch(initializedSuccess())
   })

    }
}
