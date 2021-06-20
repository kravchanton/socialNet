import React, {useState} from "react";
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
import {ProfilePageType} from "../profile";
import {addPost} from "../../../redux/state";



const MyPosts= (props: ProfilePageType) => {


    let [value, setValue] = useState("")
    let addPost = () => {
        if (props.addPost) {
            props.addPost(value);
        }
        setValue('')
    }
    let postsElements = props.posts.map((t) => <MyPost message={t.message} likesCount={t.likesCount}/>)
    return (
        <div className={classes.postsBlock}>
            My post
            <div className={classes.item}>New post</div>
            <div>
                <div>
                    <textarea onChange={(e) => {setValue(e.currentTarget.value)}}  value={value}>  </textarea>
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