import React from 'react'
import './HeaderLogin.scss'
import {ReactComponent as Logo} from '../../../assets/logos/Logo.svg'
import {ReactComponent as Avatar} from '../../../assets/avatar/avatar.svg'
import {ReactComponent as Cart} from '../../../assets/logos/cart.svg'
import Gap from '../../atoms/Gap'

const HeaderLogin = () => {
    return (
        <div>
            <div className="header-wrapper">
                <div className="logo">
                    <Logo />
                </div>
                <div className="button-wrapper">
                    <Cart />
                    <Gap width={36}/>
                    <Avatar />
                </div>
            </div> 
        </div>
    )
}

export default HeaderLogin
