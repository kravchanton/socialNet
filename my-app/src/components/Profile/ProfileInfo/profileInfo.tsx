import React from "react";
import classes from './profileInfo.module.css';
import {ProfileType} from "../profile";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props: any) => {

    if(!props.profile.photos) {
        return <Preloader />
    }
    debugger
    return (
        <div>


            <div className={classes.logo}><img
                    src={props.profile.photos.large ? props.profile.photos.large : userPhoto }
                    alt=""/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>

        </div>)
}
export default ProfileInfo;