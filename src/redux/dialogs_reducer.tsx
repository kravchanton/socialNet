import {ActionType} from "./store";
import {MessagesPageType} from "../components/Dialogs/Dialogs";

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageActionType = ReturnType<typeof updateNewMessageActionCreator>

export const addMessageActionCreator = (newMessage: string) => {
    return {type: "ADD-MESSAGE", newMessage} as const
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
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            return {
                ...state, messages: [...state.messages, {
                    message: action.newMessage,
                    id: "4"
                }],
            }
        }
        default:
            return state
    }
}

