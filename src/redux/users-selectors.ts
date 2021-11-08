import {AppStateType} from "./redux-store";

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getSizePage = (state: AppStateType) => {
    return state.usersPage.sizePage
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}