import {ActionType, PostsType} from "./state";
import {ProfilePageType} from "../components/Profile/profile";
import React from "react";

export type AddActionType = ReturnType<typeof addPostActionCreator>
export type UpdateActionType = ReturnType<typeof updateNewPostActionCreator>

export const addPostActionCreator = () => {
    return {type: "ADD-POST"} as const
}
export const updateNewPostActionCreator = (text: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", text: text} as const
}


export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                message: state.newPostText,
                likesCount: 0,
                id: "5",
            }
            state.posts.push(newPost);
            state.newPostText = ""
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.text;
            return state
        default:
            return state
    }
}