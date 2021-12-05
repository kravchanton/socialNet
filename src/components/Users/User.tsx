import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { UserType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";


type UsersPropsType = {

    users: Array<UserType>
    totalUsersCount: number,
    sizePage: number,
    currentPage: number,
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: string[]


}

export function Users(props: UsersPropsType) {

    return (<div>
       <Paginator totalUsersCount={props.totalUsersCount} sizePage={props.sizePage} onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
        {
            props.users.map(u =>
                    <div id={u.id}>
                <span><div>
                    <NavLink to={'profile/' + u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                          className={styles.img}/> </NavLink>
                </div>
                <div>{u.followed ?
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.unFollow(u.id)

                    }}>unfollow</button>
                    :
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.follow(u.id)
                    }}>follow</button>}
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

