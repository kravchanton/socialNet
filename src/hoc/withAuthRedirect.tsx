import {Redirect} from "react-router-dom";
import Profile from "../components/Profile/profile";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsFotRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
  class RedirectCOmponent extends React.Component<any, any> {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'}/>
      return <Component {...this.props}/>
    }
  }
  let connetctedFuthRedirectComponent =  connect(mapStateToPropsFotRedirect)(RedirectCOmponent)
  return connetctedFuthRedirectComponent
}