import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {AddActionType, PostsType, UpdateActionType} from "../../redux/state";

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch?: (action: AddActionType | UpdateActionType) => void

}

export const Profile = (props: ProfilePageType  ) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
                     />
        </div>)
}
export default Profile;