import React from 'react'
import Content from '../../components/molecules/Content'
import './LandingLogin.scss'
import {ReactComponent as Logo} from '../../assets/logos/Logo.svg'
import HeaderLogin from '../../components/molecules/HeaderLogin'


const LandingGuest = () => {
    return (
            <div>
                <div>
                    <HeaderLogin/>
                </div>
                <div className="content-wrapper-login">
                    <Content /> 
                </div>
            </div>
    )
}

export default LandingGuest
