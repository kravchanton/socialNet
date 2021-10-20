import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
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

export type DialogsPropsType = {
    onNewMessageChange: (text: string) => void
    addMessage: () => void
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string

}

const Dialogs = (props: DialogsPropsType) => {
    let onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.onNewMessageChange(e.currentTarget.value)
    }
    let onAddMessage = () => {
        props.addMessage()

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

                <textarea onChange={onChange} value={props.newMessageText}></textarea>

                <button onClick={onAddMessage}>Add message</button>

            </div>
        </div>)
}
export default Dialogs;