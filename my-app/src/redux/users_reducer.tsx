import React from "react";

export type UsersPropsType = {
    users: Array<UserType>
}
export type UserType = {
    name: string
    id: string
    uniqueUrlName: any,
    photos: PhotosType
    status: any
    followed: boolean

}

export type PhotosType = {
    small: any
    large: any
}
export type FollowActionType = ReturnType<typeof followAC>
export type UnFollowActionType = ReturnType<typeof unFollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

export const followAC = (userID: string) => {
    return {type: "FOLLOW", userID} as const
}
export const unFollowAC = (userID: string) => {
    return {type: "UNFOLLOW", userID} as const
}
export const setUsersAC = (users: UserType[]) => {
    return {type: "SET-USERS", users} as const
}

let initialState: UsersPropsType= {
    users: []

}

export const usersReducer = (state: UsersPropsType = initialState, action: UsersActionType): UsersPropsType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}
export type UsersActionType = FollowActionType | UnFollowActionType | SetUsersActionType
