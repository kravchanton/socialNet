import React from "react";
import classes from './MyPost.module.css';
import {PostsType} from "../../../../redux/state";


const MyPost = (props: PostsType) => {
    return (
        <div>

            <div className={classes.content}>
                {props.message}
            </div>
            <span>Likes</span> {props.likesCount}


        </div>
    )
}
export default MyPost;