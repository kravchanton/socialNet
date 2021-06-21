import React, {ChangeEvent, useState} from "react";
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
import {ProfilePageType} from "../profile";


const MyPosts = (props: ProfilePageType) => {


    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        if (props.dispatch) {

            let action = {type: "UPDATE-NEW-POST-TEXT", text: e.currentTarget.value };
            props.dispatch(action)
        }
    }
    let addPost = () => {
        if (props.dispatch) {
            props.dispatch({type: "ADD-POST"})
        }

    }

    let postsElements = props.posts.map((t) => <MyPost message={t.message} likesCount={t.likesCount}/>)
    return (
        <div className={classes.postsBlock}>
            My post
            <div className={classes.item}>New post</div>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}>  </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;