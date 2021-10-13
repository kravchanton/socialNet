import React from "react";
import {authAPI, usersAPI} from "../api/api";
import {setUserProfile} from "./profile_reducer";

export type AuthPropsType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionType = ReturnType<typeof setAuthUserDataAC>


export const setAuthUserDataAC = (id: string, email: string, login: string) => {
    return {type: "SET-USER-DATA", data: {id, email, login} } as const
}

let initialState: AuthPropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}

export const authReducer = (state: AuthPropsType = initialState, action: UsersActionType): AuthPropsType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
                }

        default:
            return state
    }
}

export type UsersActionType =
    AuthActionType


export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.me().then(response => {
            if(response.resultCode === 0 ) {
                let {id, email, login} = response.data
                dispatch(setAuthUserDataAC(id, email, login))
            }


        })
    }
}