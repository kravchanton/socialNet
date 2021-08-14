import React from "react";
import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";
import axios from "axios";
import {UserType} from "../../redux/users_reducer";

type UsersPropsType = {

    users: Array<UserType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
}

class Users extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (<div>
            {
                this.props.users.map(u =>
                        <div id={u.id}>
                <span><div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.img}/></div>
                <div>{u.followed ? <button onClick={() => {
                    this.props.unfollow(u.id)
                }}>unfollow</button> : <button onClick={() => {
                    this.props.follow(u.id)
                }}>follow</button>}
                    </div>
            </span>
                            <span>
<span>
    <div>{u.name}</div>
    <div>{u.status}</div>
    </span><span>
    <div>{"u.location.city"}</div>
    <div>{"u.location.country"}</div>
    </span>
                </span>
                        </div>
                )}
        </div>)

    }
}

export default Users;
