import React, {useState} from "react";
import {PropsType} from "../profileContainer";


export const ProfileStatusWithHooks = (props: any) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)
    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    let onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }
    return (<div>
        {!editMode &&
        <div><span onDoubleClick={activateEditMode}>{status || "----"}</span></div>
        }
        {
            editMode &&
            <div><input autoFocus={true} onChange={onStatusChange} value={status} onBlur={deactivateEditMode}/></div>
        }
    </div>)
}



