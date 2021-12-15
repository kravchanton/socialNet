import React from "react";
import {ActionType, DialogsType, MessagesType, RootStateType, StateType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {compose} from "redux";


import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    }
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        onNewMessageChange: (text: string) => {
            dispatch(updateNewMessageActionCreator(text))
        },

        addMessage: (newMessage: string) => {
            dispatch(addMessageActionCreator(newMessage))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);