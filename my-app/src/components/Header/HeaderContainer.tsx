import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth_reducer";
import Header, {HeaderPropsType} from "./Header";
import {AppStateType} from "../../redux/redux-store";



class HeaderContainer extends React.Component<any, any> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0 ) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserDataAC(id, email, login)
            }


        })
    }
    render() {
        return <Header login={this.props.login} id={this.props.id} email={this.props.email} isAuth={this.props.isAuth} />


    }
}

const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth

})
export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);