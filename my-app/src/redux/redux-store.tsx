import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {usersReducer} from "./users_reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer
})


export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);


export default store;