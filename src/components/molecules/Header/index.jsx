import React from 'react'
import './Header.scss'
import {ReactComponent as Logo} from '../../../assets/logos/Logo.svg'
import ButtonLandingLogin from '../../atoms/ButtonLandingLogin'
import ButtonLandingRegister from '../../atoms/ButtonLandingRegister'
import Gap from '../../atoms/Gap'

const Header = () => {
    return (
        <div>
            <div className="header-wrapper">
                <div className="logo">
                    <Logo />
                </div>
                <div className="button-wrapper">
                    <div className="button-login">
                        <ButtonLandingLogin title="Login" />
                    </div>
                    <Gap width={15} />
                    <div className="button-register">
                        <ButtonLandingRegister title="Register" />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Header
