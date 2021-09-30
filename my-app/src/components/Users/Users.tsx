import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPropsType = {

    users: Array<UserType>
    totalUsersCount: number,
    sizePage: number,
    currentPage: number,
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    onPageChanged: (pageNumber: number) => void

}

export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.sizePage)
    if(pagesCount > 10) {
        pagesCount = 10;
    }
    let pages = []
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i)
    }
    return (<div>
        <div>{pages.map(p => {
            // @ts-ignore
            return <span className={props.currentPage === p && styles.selectedPage} onClick={() => {props.onPageChanged(p)}}>p</span>
        })}</div>
        {
            props.users.map(u =>
                    <div id={u.id}>
                <span><div>
                    <NavLink to={'profile/' + u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.img}/> </NavLink>
                </div>
                <div>{u.followed ? <button onClick={() => {axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {"API-KEY": "f834a8c4-9e98-4ab1-bfe3-8b09b66ab744"} ,
                }).then(response => {
                    if(response.data.resultCode === 0 ) {
                        props.unfollow(u.id)
                    }
                })}}>unfollow</button> : <button onClick={() => {axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                    withCredentials: true,
                    headers: {"API-KEY": "f834a8c4-9e98-4ab1-bfe3-8b09b66ab744"}
                }).then(response => {
                    if(response.data.resultCode === 0 ) {
                        props.follow(u.id)
                    }
                })}}>follow</button>}
                    </div>
            </span>
                        <span>
<span>
    <div>{u.name}</div>
    <div>{u.status}</div>
    </span><span>
    <div>{u.id}</div>

    </span>
                </span>
                    </div>
            )}
    </div>)
}

