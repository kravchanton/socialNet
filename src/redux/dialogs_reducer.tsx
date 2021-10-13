import {ActionType, DialogsType} from "./store";
import {MessagesPageType} from "../components/Dialogs/Dialogs";

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageActionType = ReturnType<typeof updateNewMessageActionCreator>

export const addMessageActionCreator = () => {
    return {type: "ADD-MESSAGE"} as const
}
export const updateNewMessageActionCreator = (text: string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", text: text} as const
}

let initialState = {
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

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            return {
                ...state, messages: [...state.messages, {
                    message: state.newMessageText,
                    id: "4"
                }],
                newMessageText: ""
            }
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {...state, newMessageText: action.text}

        }
        default:
            return state
    }
}

