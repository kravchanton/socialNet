import React from "react";

export type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number,
    sizePage: number,
    currentPage: number,
    isFetching: boolean,

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
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type SetTotalCountType = ReturnType<typeof setTotalCountAC>
export type setToggleIsFetchingType = ReturnType<typeof setToggleIsFetchingAC>

export const followAC = (userID: string) => {
    return {type: "FOLLOW", userID} as const
}
export const unFollowAC = (userID: string) => {
    return {type: "UNFOLLOW", userID} as const
}
export const setUsersAC = (users: UserType[]) => {
    return {type: "SET-USERS", users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}

export const setTotalCountAC = (totalCount: number) => {
    return {type: "SET-TOTAL-COUNT", totalCount} as const
}
export const setToggleIsFetchingAC = (isFetching: boolean) => {
    return {type: "SET-TOGGLE-IS-FETCHING", isFetching} as const
}

let initialState: UsersPropsType = {
    users: [],
    totalUsersCount: 0,
    sizePage: 4,
    currentPage: 1,
    isFetching: false,


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
