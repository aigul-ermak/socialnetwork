import React from 'react';
import s from './Profileinfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+discription
            </div>
        </div>
    )
}

export default ProfileInfo;