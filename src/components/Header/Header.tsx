import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import {logout} from "../../redux/auth_reducer";

type HeaderType = {

}
export type HeaderPropsType = {
    id: string
    email: string
    login: string
    isAuth: boolean
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return (

            <header className={classes.header}>
                <img
                    src="https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300"
                    alt="logo"/>

                <div className={classes.login}>
                    {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> : <NavLink to={"/login"}>Login</NavLink>}
                </div>
            </header>)
}

export default Header;