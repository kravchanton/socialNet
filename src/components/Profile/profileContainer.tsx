import React from "react";
import {
    getProfile,
    getStatus,
    updateStatus
} from "../../redux/profile_reducer";
import Profile from "./profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
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

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props} profilePage={this.props.profilePage} updateStatus={this.props.updateStatus}/>
    }

}


let mapStateToProps = (state: AppStateType) => ({
    profilePage: state.profilePage,
    id: state.auth.id
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI)
