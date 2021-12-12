import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import {HashRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/profileContainer"))


class App extends React.Component<any, any> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <HashRouter>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <Navbar/>
                        <React.Suspense fallback={<Preloader/>}>
                            <div className='app-wrapper-content'>
                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                <Route path='/users' render={() => <UsersContainer/>}/>
                                <Route path='/login' render={() => <Login/>}/>
                                <Route path='/news' component={News}/>
                                <Route path='/music' component={Music}/>
                                <Route path='/settings' component={Settings}/>

                            </div>
                        </React.Suspense>
                    </div>
                </HashRouter>

            )
        }
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})
export default compose(
    connect(mapStateToProps, {initializeApp})(App));
