import React from "react";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {AddActionType,UpdateActionType} from "../../redux/profile_reducer";
import {PostsType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    addPost?: () => void
    updateNewPostText?: (text: string) => void
    dispatch?: (action: AddActionType | UpdateActionType) => void
    profile: any
    status: string

}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk:string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo profile={props.profilePage.profile} status={props.profilePage.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>)
}
export default Profile;