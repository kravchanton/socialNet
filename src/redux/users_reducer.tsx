import React from "react";
import {usersAPI} from "../api/api";

export type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number,
    sizePage: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[],


}
export type UserType = {
    name: string,
    id: string,
    uniqueUrlName: any,
    photos: PhotosType,
    status: any,
    followed: boolean,

}

export type PhotosType = {
    small: any
    large: any
}
export type FollowActionType = ReturnType<typeof followAC>
export type UnFollowActionType = ReturnType<typeof unFollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalCountType = ReturnType<typeof setTotalCountAC>
export type setToggleIsFetchingType = ReturnType<typeof setToggleIsFetchingAC>
export type setToggleIsFollowingProgressType = ReturnType<typeof setToggleIsFollowingProgress>

export const followAC = (userID: string) => {
    return {type: "FOLLOW", userID} as const
}
export const unFollowAC = (userID: string) => {
    return {type: "UNFOLLOW", userID} as const
}
export const setUsersAC = (users: UserType[]) => {
    return {type: "SET-USERS", users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}

export const setTotalCountAC = (totalCount: number) => {
    return {type: "SET-TOTAL-COUNT", totalCount} as const
}
export const setToggleIsFetchingAC = (isFetching: boolean) => {
    return {type: "SET-TOGGLE-IS-FETCHING", isFetching} as const
}
export const setToggleIsFollowingProgress = (isFetching: boolean, userId: string) => {
    return {type: "SET-FOLLOWING-IS-PROGRESS", isFetching, userId} as const
}

let initialState: UsersPropsType = {
    users: [],
    totalUsersCount: 0,
    sizePage: 4,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []


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
                users: [...action.users]
            }

        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-TOTAL-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case "SET-TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "SET-FOLLOWING-IS-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }
}
export type UsersActionType =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageType
    | SetTotalCountType
    | setToggleIsFetchingType
    | setToggleIsFollowingProgressType


export const getUsers = (currentPage: number, sizePage: number) => {
    return async (dispatch: any) => {
        dispatch(setToggleIsFetchingAC(true))
        let response = await usersAPI.getUsers(currentPage, sizePage)
        dispatch(setUsersAC(response.items))
        dispatch(setTotalCountAC(response.totalCount))
        dispatch(setToggleIsFetchingAC(false))


    }
}
export const follow = (userId: string) => {
    return (dispatch: any) => {
        dispatch(setToggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(followAC(userId))
            }
            debugger
            dispatch(setToggleIsFollowingProgress(false, userId))


        })
    }
}
export const unFollow = (userId: string) => {
    return (dispatch: any) => {
        dispatch(setToggleIsFollowingProgress(true, userId))
        usersAPI.unFollow(userId).then(response => {
            if (response.resultCode === 0) {
                debugger
                dispatch(unFollowAC(userId))
            }
            debugger
            dispatch(setToggleIsFollowingProgress(false, userId))


        })
    }
}