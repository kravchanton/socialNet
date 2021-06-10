import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message from "./Message/DialogMessages";
import {MessagesPageType} from "../../redux/state";


const Dialogs = (props: MessagesPageType ) => {

    let dialogsElements = props.dialogs.map((t) => <DialogItem name={t.name} id={t.id}/>)
    let messegesElements = props.messages.map((t) => <Message message={t.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messegesElements}

            </div>
        </div>)
}
export default Dialogs;