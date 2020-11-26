import React from 'react'
import {useHistory} from 'react-router-dom'
import ProfileButton from '../../../assets/logos/profile-btn.png'

const ProfileBtn = () => {
    const router = useHistory();

    const toProfile = () => {
      router.push("/profile")
    }
    return (    
        <div>
            <img onClick={toProfile} style={{width: "50%", cursor: 'pointer'}} src={ProfileButton} alt="profile button"/>
        </div>
    )
}

export default ProfileBtn
