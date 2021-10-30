import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserDataAC} from "../../redux/auth_reducer";
import Header, {HeaderPropsType} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";



class HeaderContainer extends React.Component<any, any> {


    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header login={this.props.login} id={this.props.id} email={this.props.email} isAuth={this.props.isAuth} logout={this.props.logout} />


    }
}

const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth

})
export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);