import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setToggleIsFetchingAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC,
    UsersPropsType,
    UserType
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
type UsersContainerType = {

    users: Array<UserType>
    totalUsersCount: number,
    sizePage: number,
    currentPage: number,
    isFetching: boolean,
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void

}

class UsersContainerAPI extends React.Component<UsersContainerType, any> {


    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`, {
            withCredentials: true
        }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setToggleIsFetching(false)

        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.sizePage}`, {
            withCredentials: true
        }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setToggleIsFetching(false)

        })
    }
    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                      sizePage={this.props.sizePage}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}/>

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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setToggleIsFetching: (isFetching: boolean) => {
            dispatch(setToggleIsFetchingAC(isFetching))
        }


    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)
export default UsersContainer;