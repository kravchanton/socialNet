import React from "react";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthPropsType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionType = ReturnType<typeof setAuthUserDataAC>


export const setAuthUserDataAC = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: "SET-USER-DATA", data: {id, email, login, isAuth}} as const
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
            }

        default:
            return state
    }
}

export type UsersActionType =
    AuthActionType


export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }


}
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let messages = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: messages}))
    }


}
export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }


}