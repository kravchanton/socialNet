import {Redirect} from "react-router-dom";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import { ComponentType } from "react";


type MapStatePropsType = {
  isAuth: boolean
}
let mapStateToPropsFotRedirect = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth
})

export function withAuthRedirect <T>(Component: ComponentType<T>) {
  function RedirectComponent(props: MapStatePropsType) {
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to={'/login'}/>
    return <Component {...restProps as T}/>
  }

  let connetctedFuthRedirectComponent =  connect(mapStateToPropsFotRedirect)(RedirectComponent)
  return connetctedFuthRedirectComponent
}