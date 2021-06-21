import {ProfilePageType} from "../components/Profile/profile";

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

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}


export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type AddActionType = {
    type: "ADD-POST"
}

export type UpdateActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    text: string
}
export type StateType = {
    _state: RootStateType
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: AddActionType | UpdateActionType) => void
}
export type StoreType = {
    store: StateType
}

export let store: StateType = {
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
            ]
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
        if(action.type === "ADD-POST") {
            let newPost: PostsType = {
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                id: "5",
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""
            this.rerenderEntireTree()
        } else if(action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.text;
            this.rerenderEntireTree()
        }
    }

}


export default store