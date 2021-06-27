import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message from "./Message/DialogMessages";
import {ActionType, DialogsType, MessagesType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs_reducer";

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    dispatch?: (action: ActionType) => void
}

const Dialogs = (props: MessagesPageType ) => {
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        if (props.dispatch) {

            props.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
        }
    }
    let addMessage = () => {
        if (props.dispatch) {
            props.dispatch(addMessageActionCreator())
        }

    }
    let dialogsElements = props.dialogs.map((t) => <DialogItem name={t.name} id={t.id}/>)
    let messegesElements = props.messages.map((t) => <Message message={t.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messegesElements}

                <textarea onChange={onMessageChange} value={props.newMessageText}></textarea>

                <button onClick={addMessage}>Add message</button>

            </div>
        </div>)
}
export default Dialogs;