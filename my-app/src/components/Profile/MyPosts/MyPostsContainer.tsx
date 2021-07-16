import React from "react";
import {MyPosts, MyPostsPropsType} from "./MyPosts"
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";


const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },

        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;