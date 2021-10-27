import React, {ChangeEvent, useState} from "react";
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
import {PostsType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {type} from "os";


export type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (text: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {


    let onAddPost = (value: AddPostType) => {
        props.addPost(value.addPostBody)
    }

    let postsElements = props.posts.map((t) => <MyPost message={t.message} likesCount={t.likesCount}/>)
    return (
        <div className={classes.postsBlock}>
            My post
            <div className={classes.item}>New post</div>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

type AddPostType ={
    addPostBody: string
}
const AddPostForm: React.FC<InjectedFormProps<AddPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='addPostBody' placeholder='Enter your post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<AddPostType>({form: 'profileAddMessageForm'})(AddPostForm)
