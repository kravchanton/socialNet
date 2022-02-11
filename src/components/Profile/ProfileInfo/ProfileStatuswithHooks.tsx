import React, {useEffect, useState} from "react";


export const ProfileStatusWithHooks = (props: any) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)


    useEffect(() => {
            setStatus(props.status)
        }, [props.status])


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
        <div><span onDoubleClick={activateEditMode}>Status: {status || "----"}</span></div>
        }
        {
            editMode &&
            <div><input autoFocus={true} onChange={onStatusChange} value={status} onBlur={deactivateEditMode}/></div>
        }
    </div>)
}



