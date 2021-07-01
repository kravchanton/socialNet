import React, {ChangeEvent, useState} from "react";
import MyPost from "./Post/MyPost";
import {MyPosts} from "./MyPosts"
import {ProfilePageType} from "../profile";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import StoreContext from "../../../StoreContext";



const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
            let state = store.getState()
            let onPostChange = (text: string) => {

                if (store.dispatch) {

                    store.dispatch(updateNewPostActionCreator(text))
                }
            }
            let addPost = () => {
                if (store.dispatch) {
                    store.dispatch(addPostActionCreator())
                }

            }
            return <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}
                            addPost={addPost} updateNewPostText={onPostChange}/>
        }

    }</StoreContext.Consumer>
    )
}
    export default MyPostsContainer;