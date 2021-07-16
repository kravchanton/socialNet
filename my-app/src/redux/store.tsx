import {ProfilePageType} from "../components/Profile/profile";
import {DialogsPropsType, MessagesPageType} from "../components/Dialogs/Dialogs";
import {
    AddActionType,
    addPostActionCreator,
    profileReducer,
    UpdateActionType,
    updateNewPostActionCreator
} from "./profile_reducer";
import {
    addMessageActionCreator,
    AddMessageActionType,
    dialogsReducer, UpdateMessageActionType,
    updateNewMessageActionCreator
} from "./dialogs_reducer";
import {UsersPropsType} from "./users_reducer";

export type PostsType = {
    message: string,
    likesCount: number,
    id?: string
}

export type DialogsType = {
    name: string
    id: string
}

export type MessagesType = {
    message: string
    id: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: DialogsPropsType
    usersPage: UsersPropsType
}

export type StateType = {
    _state?: RootStateType
    rerenderEntireTree?: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}

/*export let store: StateType = {
    _state: {
        profilePage: {
            posts: [
                {message: `Hi, how are you?`, likesCount: 4, id: '1'},
                {message: 'Its my first post', likesCount: 1, id: '2'},
                {message: 'yesd', likesCount: 12, id: '3'},
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogs: [
                {name: 'Victor', id: '1'},
                {name: 'Anton', id: '2'},
                {name: 'Andrey', id: '3'},
                {name: 'Sveta', id: '4'},
                {name: 'Anna', id: '5'},
                {name: 'Dmitry', id: '6'},
            ],
            messages: [
                {message: 'Hi', id: '1'},
                {message: 'How are you?', id: '2'},
                {message: 'fdsfdsa', id: '3'},
            ],
            newMessageText: '',
        }
    },
    rerenderEntireTree() {

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        store._state.profilePage = profileReducer(store._state.profilePage, action)
        store._state.messagesPage = dialogsReducer(store._state.messagesPage, action)
        this.rerenderEntireTree()
    }

}*/


export type ActionType = AddActionType | AddMessageActionType | UpdateActionType | UpdateMessageActionType





