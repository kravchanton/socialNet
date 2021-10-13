import React, {ChangeEvent, useState} from "react";
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
import {PostsType} from "../../../redux/store";


export type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {


    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }
    let onAddPost = () => {
        props.addPost()
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

