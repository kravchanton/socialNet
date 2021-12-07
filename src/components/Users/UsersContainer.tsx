import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, setToggleIsFollowingProgress, unFollow,
    UserType
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getSizePage, getTotalUsersCount,
    getUsersSelector
} from "../../redux/users-selectors";

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
       users: getUsersSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        sizePage: getSizePage(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    getUsers
})(UsersContainerAPI)
export default UsersContainer;