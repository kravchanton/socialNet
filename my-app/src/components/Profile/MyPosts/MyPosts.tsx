import React from "react";
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
import {ProfilePageType} from "../../../redux/state";


const MyPosts= (props: ProfilePageType) => {


    let postsElements = props.posts.map((t) => <MyPost message={t.message} likesCount={t.likesCount}/>)
    return (
        <div className={classes.postsBlock}>
            My post
            <div className={classes.item}>New post</div>
            <div>
                <div>
                    <textarea>  </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;