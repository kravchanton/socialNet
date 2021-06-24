import {ActionType, DialogsType} from "./state";
import {MessagesPageType} from "../components/Dialogs/Dialogs";

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageActionType = ReturnType<typeof updateNewMessageActionCreator>

export const addMessageActionCreator = () => {
    return {type: "ADD-MESSAGE"} as const
}
export const updateNewMessageActionCreator = (text: string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", text: text} as const
}

export const dialogsReducer = (state: MessagesPageType, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {
                message: state.newMessageText,
                id: "4"
            }
            state.messages.push(newMessage);
            state.newMessageText = ""
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.text;
            return state
        default:
            return state
    }
}