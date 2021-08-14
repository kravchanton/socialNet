import React, {ChangeEvent} from "react";
import {ActionType, DialogsType, MessagesType, RootStateType, StateType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs_reducer";


import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, UsersPropsType, UserType} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    usersPage: UsersPropsType
}

export const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },

        unfollow: (userID: string) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;