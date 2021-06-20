
import {ProfilePageType} from "../components/Profile/profile";

let rerenderEntireTree = () => {

}
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

export type stateType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}
export let addPost = (postMessage: string) => {
    let newPost: PostsType = {
        message: postMessage,
        likesCount: 0,
        id: "5",
    }

    state.profilePage.posts.push(newPost);
}
let state: RootStateType = {

    profilePage: {
        posts: [
            {message: 'Hi, how are you?', likesCount:4, id: '1'},
            {message: 'Its my first post', likesCount:1, id: '2'},
            {message: 'yesd', likesCount:12, id: '3'},
        ]
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
}
export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

export default state