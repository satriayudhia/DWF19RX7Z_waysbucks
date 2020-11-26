import React from 'react'
import {useHistory} from 'react-router-dom'
import LogoutButton from '../../../assets/logos/logoutBtn.png'

const LogoutBtn = () => {
    const router = useHistory();

    const toLogin = () => {
      router.push("/")
    }
    return (    
        <div>
            <img style={{width: "50%", cursor: 'pointer'}} onClick={toLogin} src={LogoutButton} alt="profile button"/>
        </div>
    )
}

export default LogoutBtn
