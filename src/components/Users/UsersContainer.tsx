import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {
    follow,
    followAC, getUsers,
    setCurrentPage, setToggleIsFetchingAC, setToggleIsFollowingProgress,
    setTotalCountAC,
    setUsersAC, unFollow,
    unFollowAC,
    UserType
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type UsersContainerType = {

    users: Array<UserType>
    totalUsersCount: number,
    sizePage: number,
    currentPage: number,
    isFetching: boolean,
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setCurrentPage: (currentPage: number) => void
    followingInProgress: string[]
    getUsers: (currentPage: number, sizePage: number) => void

}

class UsersContainerAPI extends React.Component<UsersContainerType, any> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.sizePage)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.sizePage)
        this.props.setCurrentPage(pageNumber)

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   sizePage={this.props.sizePage}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
            />

        </>

    }
}

export const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        sizePage: state.usersPage.sizePage,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        follow,
        unFollow,
        setCurrentPage,
        setToggleIsFollowingProgress,
        getUsers

    }
}
const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    getUsers
})(UsersContainerAPI)
export default UsersContainer;