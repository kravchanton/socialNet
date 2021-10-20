import React from "react";
import {AddActionType, getProfile, setUserProfile, UpdateActionType} from "../../redux/profile_reducer";
import Profile, {ProfilePageType, ProfileType} from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";





type MapDispatchPropsType = {
    getProfile: (userId: number) => void
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
            userId = 2;
        }
        this.props.getProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }

}

let authRedirectComponent = withAuthRedirect(ProfileContainerAPI)

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(authRedirectComponent)
const ProfileContainer = connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent)
export default ProfileContainer