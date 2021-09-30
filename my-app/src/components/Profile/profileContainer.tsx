import React from "react";
import {AddActionType, setUserProfile, UpdateActionType} from "../../redux/profile_reducer";
import Profile, {ProfilePageType, ProfileType} from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";



export type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {

        // @ts-ignore
        return <Profile {...this.props} profile={this.props.profile}/>
    }

}



let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainerAPI)
const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
export default ProfileContainer