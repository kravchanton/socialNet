import React from "react";
import {
    AddActionType,
    getProfile,
    getStatus,
    setUserProfile,
    UpdateActionType,
    updateStatus
} from "../../redux/profile_reducer";
import Profile, {ProfilePageType, ProfileType} from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";





type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: number,
}



// @ts-ignore
export type PropsType = MapStateToPropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainerAPI extends React.Component<PropsType, any> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 18070;
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props} profilePage={this.props.profilePage} updateStatus={this.props.updateStatus} />
    }

}

let authRedirectComponent = withAuthRedirect(ProfileContainerAPI)

let mapStateToProps = (state: AppStateType) => ({
    profilePage: state.profilePage
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI)
