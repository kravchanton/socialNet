import React from "react";
import {UserType} from "../../redux/users_reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


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
        <Paginator totalUsersCount={props.totalUsersCount} sizePage={props.sizePage} onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}/>
        {
            props.users.map(u => <User user={u} follow={props.follow} followingInProgress={props.followingInProgress}
                                       unFollow={props.unFollow}/>)}
    </div>)
}

