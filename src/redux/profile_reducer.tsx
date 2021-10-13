import {PostsType} from "./store";
import {ProfilePageType} from "../components/Profile/profile";
import React from "react";
import {usersAPI} from "../api/api";
import {setToggleIsFollowingProgress, unFollowAC} from "./users_reducer";


export type AddActionType = ReturnType<typeof addPostActionCreator>
export type UpdateActionType = ReturnType<typeof updateNewPostActionCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>

export const addPostActionCreator = () => {
    return {type: "ADD-POST"} as const
}
export const updateNewPostActionCreator = (text: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", text: text} as const
}
export const setUserProfile = (profile: any) => {
    return {type: "SET-USER-PROFILE", profile} as const
}

let initialState = {
    posts: [
        {message: `Hi, how are you?`, likesCount: 4, id: '1'},
        {message: 'Its my first post', likesCount: 1, id: '2'},
        {message: 'yesd', likesCount: 12, id: '3'},
    ],
    newPostText: '',
    profile: {}
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostsType = {
                message: state.newPostText,
                likesCount: 0,
                id: "5",
            }
            return {
                ...state, posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.text}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export type ActionType = AddActionType | SetUserProfileType | UpdateActionType

export const getProfile = (userId: number) => {
    return (dispatch: any) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))

        })
    }
}