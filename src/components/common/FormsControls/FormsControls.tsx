import React from "react";
import styles from './FormsControls.module.css'


export const TextArea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return <div className={(hasError ? styles.error : "")}>
        <textarea className={styles.error} {...input} {...props}></textarea>

        <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
}

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return <div className={(hasError ? styles.error : "")}>
        <input className={styles.error} {...input} {...props}></input>

        <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
}