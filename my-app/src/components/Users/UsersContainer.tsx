import React, {ChangeEvent} from "react";
import {ActionType, DialogsType, MessagesType, RootStateType, StateType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs_reducer";


import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users_reducer";



export const mapStateToProps = (state: RootStateType) => {
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
        setusers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;