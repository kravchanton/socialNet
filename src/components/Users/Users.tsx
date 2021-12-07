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
        {props.users.map(u => <User key={u.id} user={u} follow={props.follow}
                                    followingInProgress={props.followingInProgress}
                                    unFollow={props.unFollow}/>)}

        <Paginator totalItemsCount={props.totalUsersCount} sizePage={props.sizePage} onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}/>
    </div>)
}

