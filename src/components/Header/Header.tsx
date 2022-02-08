import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.png'

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
            <div className={classes.logo}><img src={logo}
                                               alt="logo"/><span>SocialV</span></div>

            <div className={classes.login}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>)
}

export default Header;