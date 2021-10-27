import React from "react";
import {MyPosts, MyPostsPropsType} from "./MyPosts"
import {addPostActionCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";


const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;