import React, {ChangeEvent} from "react";
import {UserType} from "../../redux/users_reducer";
import styles from "../Users/users.module.css";

export type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setusers: (users: UserType[]) => void
}


const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setusers([{
            id: "1",
            photoURL: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/sunny-leones-hot-yellow-bikini-photo-201605-1615385159.jpg",
            followed: true,
            fullName: "Dmitry",
            status: "boss",
            location: {country: "Belarus", city: "Minsk"}
        },
            {
                id: "2",
                photoURL: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/sunny-leones-hot-yellow-bikini-photo-201605-1615385159.jpg",
                followed: false,
                fullName: "Anton",
                status: "I'm a boss too",
                location: {country: "Belarus", city: "Brest"}
            },
            {
                id: "3",
                photoURL: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/sunny-leones-hot-yellow-bikini-photo-201605-1615385159.jpg",
                followed: true,
                fullName: "Vika",
                status: "I'm a boss too",
                location: {country: "Ukraine", city: "Kiev"}
            },])
    }
debugger
    return (<div>
        {
            props.users.map(u =>
                <div id={u.id}>
                <span><div><img src={u.photoURL} className={styles.img}/></div>
                <div>{u.followed ? <button onClick={() => {
                    props.unfollow(u.id)
                }}>unfollow</button> : <button onClick={() => {
                    props.follow(u.id)
                }}>follow</button>}
                    </div>
            </span>
                    <span>
<span>
    <div>{u.fullName}</div>
    <div>{u.status}</div>
    </span><span>
    <div>{u.location.city}</div>
    <div>{u.location.country}</div>
    </span>
                </span>
                </div>
        )}
    </div>)

}
export default Users;