import React, {useState} from "react";
import styles from "./Paginator.module.css";


type PaginatorPropsType = {
    totalItemsCount: number,
    sizePage: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,

}

export function Paginator(props: PaginatorPropsType) {
    let portionSize = 10
    let pagesCount = Math.ceil(props.totalItemsCount / props.sizePage)

    let pages = []
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPAgeNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPAgeNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}

            {pages.filter(p => p >= leftPortionPAgeNumber && p <= rightPortionPAgeNumber).map(p => {
                // @ts-ignore
                return <span className={props.currentPage === p && styles.selectedPage} onClick={() => {
                    props.onPageChanged(p)
                    debugger
                }}>{p}</span>
            })}
            {
                portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }</div>
    )
}

