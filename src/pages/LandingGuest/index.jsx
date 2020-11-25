import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import Content from '../../components/molecules/Content'
import './LandingGuest.scss'
import Register from '../Register'
import Login from '../Login'
import {ReactComponent as Logo} from '../../assets/logos/Logo.svg'
import ButtonLandingLogin from '../../components/atoms/ButtonLandingLogin'
import ButtonLandingRegister from '../../components/atoms/ButtonLandingRegister'
import Gap from '../../components/atoms/Gap'

const LandingGuest = () => {
    const [loginShow, setLoginShow] = useState(false)
    const [registerShow, setRegisterShow] = useState(false)
    return (
            <div className="landing-wrapper">
                <Modal
                    size="lg"
                    show={loginShow}
                    onHide={() => setLoginShow(false)}
                    centered
                    dialogClassName="modal-login">
                    <Modal.Body><Login /></Modal.Body>
                </Modal>
                <Modal
                    size="lg"
                    show={registerShow}
                    onHide={() => setRegisterShow(false)}
                    centered
                    dialogClassName="modal-register">
                    <Modal.Body><Register /></Modal.Body>
                </Modal>
                <div className="header-wrapper">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="button-wrapper">
                        <div className="button-login">
                            <ButtonLandingLogin onClick={() => setLoginShow(true)} title="Login" />
                        </div>
                        <Gap width={15} />
                        <div className="button-register">
                            <ButtonLandingRegister onClick={() => setRegisterShow(true)} title="Register" />
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <Content /> 
                </div>
            </div>
    )
}

export default LandingGuest
