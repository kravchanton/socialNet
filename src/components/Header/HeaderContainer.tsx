import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../redux/auth_reducer";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";



class HeaderContainer extends React.Component<any, any> {



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
export default connect(mapStateToProps, {logout})(HeaderContainer);