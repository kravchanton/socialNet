import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";


type UserPropsType = {
    user: UserType
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    followingInProgress: string[]
}

export function User(props: UserPropsType) {
    let user = props.user
    return (<div className={styles.item}>
        <div id={user.id}>
            <div>
                <NavLink to={'profile/' + user.id}> <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                                         className={styles.img}/> </NavLink>
            </div>
            <div>{user.name}</div>

            <div>{user.followed ?
                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                    props.unFollow(user.id)
                }}>unfollow</button>
                :
                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                    props.follow(user.id)
                }}>follow</button>}
            </div>

            <span>


    </span>

        </div>

    </div>)
}

