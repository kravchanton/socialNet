import React from "react";
import s from './../Dialogs.module.css';
import userPhoto from "../../../assets/images/user.png";


export  type MessageType = {
    message: string
    id?: string
}


const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            <img
                src={userPhoto}
                alt=""/>            <p>{props.message}</p>
            <span className={s.time}>11:00</span>
        </div>

    )
}
export default Message;