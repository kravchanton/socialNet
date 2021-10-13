import React, {ChangeEvent} from "react";
import {ActionType, DialogsType, MessagesType, RootStateType, StateType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs, {DialogsPropsType} from "./Dialogs";

import {connect} from "react-redux";

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    dispatch?: (action: ActionType) => void
}


export const mapStateToProps = (state: RootStateType) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        isAuth: state.auth.isAuth
    }
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        onNewMessageChange: (text: string) => {
            dispatch(updateNewMessageActionCreator(text))
        },

        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;