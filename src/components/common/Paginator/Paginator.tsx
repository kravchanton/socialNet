import React from "react";
import styles from "./Paginator.module.css";



type PaginatorPropsType = {
    totalUsersCount: number,
    sizePage: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,

}

export function Paginator(props: PaginatorPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.sizePage)
    if (pagesCount > 10) {
        pagesCount = 10;
    }
    let pages = []
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i)
    }
    return (
        <div>{pages.map(p => {

            // @ts-ignore
            return <span className={props.currentPage === p && styles.selectedPage} onClick={() => {
                props.onPageChanged(p)
                debugger
            }}>p</span>
        })}</div>
    )
}

