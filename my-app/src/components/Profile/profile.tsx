import React from "react";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {AddActionType,UpdateActionType} from "../../redux/profile_reducer";
import {PostsType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../App";

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    addPost?: () => void
    updateNewPostText?: (text: string) => void
    dispatch?: (action: AddActionType | UpdateActionType) => void

}

export const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>)
}
export default Profile;