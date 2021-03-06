import React, {useRef} from "react";
import classes from './profileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import {ProfileStatusWithHooks} from "./ProfileStatuswithHooks";

const ProfileInfo = (props: any) => {

    const myRef = useRef<HTMLInputElement>(null);
    if (!props.profile.photos) {
        return <Preloader/>
    }

    const savePhotos = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.logo}><img
                src={props.profile.photos.large ? props.profile.photos.large : userPhoto}
                alt="" onClick={() => myRef && myRef.current && myRef.current.click()}/>
                {props.isOwner && <input type={'file'} onChange={savePhotos} ref={myRef} style={{display: 'none'}}/>}
                <div><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></div>
            </div>
            <div className={classes.profileInfo}>
                <div>Full Name: {props.profile.fullName}</div>

                <div>About Me: {props.profile.aboutMe}</div>
                <ul className={classes.contacts}>Contacts: <li>{!!props.profile.contacts.facebook ? props.profile.contacts.vk : 'facebook'}</li>
                    <li>{!!props.profile.contacts.vk ? props.profile.contacts.vk : ''}</li>
                    <li>{!!props.profile.contacts.github ? props.profile.contacts.github : ''}</li>
                </ul>
                <div>Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}
                </div>

            </div>
        </div>
    )
}
export default ProfileInfo;