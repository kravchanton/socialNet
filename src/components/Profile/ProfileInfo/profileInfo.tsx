import React from "react";
import classes from './profileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import {ProfileStatusWithHooks} from "./ProfileStatuswithHooks";

const ProfileInfo = (props: any) => {
    if (!props.profile.photos) {
        return <Preloader/>
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.logo}><img
                src={props.profile.photos.large ? props.profile.photos.large : userPhoto}
                alt=""/>
                {props.isOwner && <input type={'file'}/>}
                <div> <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></div>
            </div>
            <div className={classes.profileInfo}>
                <div>Full Name: {props.profile.fullName}</div>

                <div>About Me: {props.profile.aboutMe}</div>
                <ul className={classes.contacts}>Contacts: <li>{!props.profile.contacts.facebook && 'facebook'}</li>
                    <li>{!props.profile.contacts.vk && 'vk'}</li>
                    <li>{!props.profile.contacts.github && 'github'}</li>
                </ul>

            </div>
        </div>
    )
}
export default ProfileInfo;