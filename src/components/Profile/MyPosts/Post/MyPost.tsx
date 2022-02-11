import React from "react";
import classes from './MyPost.module.css';
import {PostsType} from "../../../../redux/store";
import userPhoto from "../../../../assets/images/user.png";


const MyPost = (props: PostsType) => {
    return (
        <div className={classes.wrapper}>
            <div><img
                src={userPhoto}
                alt=""/></div>
            <div className={classes.content}>
                {props.message}
            </div>
            <div>Likes {props.likesCount}</div>


        </div>
    )
}
export default MyPost;