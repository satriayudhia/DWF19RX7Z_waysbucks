import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderLogin from '../../components/molecules/HeaderLogin'
import ProductCart from '../../components/atoms/ProductCart'
import Attachment from '../../assets/logos/attachment.png'
import InputTextPayment from '../../components/atoms/InputTextPayment'
import InputTextArea from '../../components/atoms/InputTextArea'
import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'
import './Cart.scss'

const Cart = () => {
    const [payStatus, setPayStatus] = useState(false)
    return (
        <Container fluid className="cart-wrapper">
            <HeaderLogin />
            <Row>
                <Col className="top-cart-mycart"><p>My Cart</p></Col>
            </Row>
            <Row>
                <Col className="top-cart-review"><p>Review Your Order</p></Col>
            </Row>
            <Row>
                <Col sm={4} className="left-cart-detail">
                    <ProductCart />
                    <ProductCart />
                    <Row>
                        <Col className="garis" />
                    </Row>
                    <Row>
                        <Col>
                            <Row className="garis-subtotal"/>
                            <Row className="subtotal-price">
                                <Col>Subtotal</Col>
                                <Col className="align-right">69.000</Col>
                            </Row>
                            <Row className="subtotal-price">
                                <Col>Qty</Col>
                                <Col className="align-right">2</Col>
                            </Row>
                            <Row className="garis-subtotal"/>
                            <Row className="total-price">
                                <Col>Total</Col>
                                <Col className="align-right">69.000</Col>
                            </Row>
                        </Col>
                        <Col className="attachment"><img src={Attachment} alt="attachment" /></Col>
                    </Row>
                </Col>
                <Col sm={3} className="payment-column">
                    <Gap height={8} />
                    <InputTextPayment value="Name" />
                    <Gap height={20} />
                    <InputTextPayment value="Email" />
                    <Gap height={20} />
                    <InputTextPayment value="Phone" />
                    <Gap height={20} />
                    <InputTextPayment value="Pos Code" />
                    <Gap height={20} />
                    <InputTextArea value="Address" />
                    <Gap height={20} />
                    <Button className="btn-payment" onClick={() => setPayStatus(true)} title="Pay" />
                </Col>
            </Row>
            <Modal
                size="lg"
                show={payStatus}
                onHide={() => setPayStatus(false)}
                centered>
                <Modal.Body className="text-center"><p className="order-status">Thank you for ordering in us, please wait to verify your order</p></Modal.Body>
            </Modal>
        </Container>
    )
}

export default Cart
