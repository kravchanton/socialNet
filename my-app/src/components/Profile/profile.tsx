import React from "react";
import classes from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PostsType} from "../../redux/state";

export type ProfilePageType = {
    posts: Array<PostsType>
    addPost?: (postMessage: string) => void
}

export const Profile = (props: ProfilePageType  ) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     addPost={props.addPost}/>
        </div>)
}
export default Profile;