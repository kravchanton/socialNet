import React from "react";
import classes from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {ProfilePageType} from "../../redux/state";



export const Profile = (props: ProfilePageType  ) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>)
}
export default Profile;