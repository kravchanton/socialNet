import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import {StateType} from "./redux/store";


export type StoreType = {
    store: StateType
}

const App: React.FC<StoreType> = (props) => {

    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={state.profilePage.posts}
                                                                  newPostText={state.profilePage.newPostText}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                                  />}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={state.messagesPage.dialogs}
                                                                  messages={state.messagesPage.messages}
                                                                  newMessageText={state.messagesPage.newMessageText}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>

    )
}


export default App;
