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
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const LandingGuest = () => {
    const [loginShow, setLoginShow] = useState(false)
    const [registerShow, setRegisterShow] = useState(false)
    return (
        <Container fluid>
            <Row>
                <Col sm={8} className="logo-header-guest">
                    <Logo />
                </Col>
                <Col sm={4} className="button-header-guest">
                    <ButtonLandingLogin onClick={() => setLoginShow(true)} title="Login" />
                    <ButtonLandingRegister onClick={() => setRegisterShow(true)} title="Register"/>
                </Col>
            </Row>
            <Row>
                <Col className="content-guest">
                    <Content />
                </Col>
            </Row>
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
        </Container>

                // <Modal
                //     size="lg"
                //     show={loginShow}
                //     onHide={() => setLoginShow(false)}
                //     centered
                //     dialogClassName="modal-login">
                //     <Modal.Body><Login /></Modal.Body>
                // </Modal>
                // <Modal
                //     size="lg"
                //     show={registerShow}
                //     onHide={() => setRegisterShow(false)}
                //     centered
                //     dialogClassName="modal-register">
                //     <Modal.Body><Register /></Modal.Body>
                // </Modal>
                // <div className="header-wrapper">
                //     <div className="logo">
                //         <Logo />
                //     </div>
                //     <div className="button-wrapper">
                //         <div className="button-login">
                //             <ButtonLandingLogin onClick={() => setLoginShow(true)} title="Login" />
                //         </div>
                //         <Gap width={15} />
                //         <div className="button-register">
                //             <ButtonLandingRegister onClick={() => setRegisterShow(true)} title="Register" />
                //         </div>
                //     </div>
                // </div>
                // <div className="content-wrapper">
                //     <Content /> 
                // </div>

    )
}

export default LandingGuest
