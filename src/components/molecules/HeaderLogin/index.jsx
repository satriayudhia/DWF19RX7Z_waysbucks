import React from 'react'
import './HeaderLogin.scss'
import {ReactComponent as Logo} from '../../../assets/logos/Logo.svg'
import {ReactComponent as Avatar} from '../../../assets/avatar/avatar.svg'
import {ReactComponent as Cart} from '../../../assets/logos/cart.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HeaderLogin = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={8} className="logo-header">
                    <Logo />
                </Col>
                <Col sm={4} className="profile-header">
                    <Cart />
                    <Avatar className="avatar-header"/>
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderLogin
