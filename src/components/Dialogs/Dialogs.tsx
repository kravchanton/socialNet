import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message from "./Message/DialogMessages";
import {ActionType, DialogsType, MessagesType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs_reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    dispatch?: (action: ActionType) => void
}

export type DialogsPropsType = {
    onNewMessageChange: (text: string) => void
    addMessage: (text: string) => void
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string

}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map((t) => <DialogItem name={t.name} id={t.id}/>)
    let messegesElements = props.messages.map((t) => <Message message={t.message}/>)
    let addNewMessage = (values: AddMessageFormType) => {
        props.addMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messegesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>


            </div>
        </div>)
}

type AddMessageFormType = {
    newMessageBody: string
}
const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            <button>Add message</button>
        </form>
    )
}


const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;