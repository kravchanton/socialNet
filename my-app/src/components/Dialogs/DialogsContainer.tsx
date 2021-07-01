import React, {ChangeEvent} from "react";
import {ActionType, DialogsType, MessagesType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../App";
import StoreContext from "../../StoreContext";

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    dispatch?: (action: ActionType) => void
}

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let onNewMessageChange = (text: string) => {

                    if (store.dispatch) {

                        store.dispatch(updateNewMessageActionCreator(text))
                    }
                }
                let addMessage = () => {
                    if (store.dispatch) {
                        store.dispatch(addMessageActionCreator())
                    }

                }
                return <Dialogs onNewMessageChange={onNewMessageChange} addMessage={addMessage}
                                dialogs={state.messagesPage.dialogs}
                                messages={state.messagesPage.messages}
                                newMessageText={state.messagesPage.newMessageText}/>
            }
        }
        </StoreContext.Consumer>)
}
