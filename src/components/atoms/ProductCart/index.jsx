import React from 'react'
import './ProductCart.scss'
import Logo from '../../../assets/logos/logoProduct.png'
import Bin from '../../../assets/logos/bin.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductCart = () => {
    return (
        <Container>
            <Row>
                <Col sm={2} className="cart-img-wrapper">
                    <img className="cart-img" src="https://s3-alpha-sig.figma.com/img/4348/8c71/4273019eb029d3a34583371f7000ecba?Expires=1607299200&Signature=MHgd2V8TP9FK0In3Ik199anJJq37eTgSr5W7BrsZ2FB1e5cQuvzH0x85TproA8FPfQI-Jf7~5J1Q-UJCPnuppzSy5WTnkHn4ghB8Cwh-lzvkmlL1YANOxTs33Mqq5CzCAHgBtNEdrNzLdOxfc4QdyzLXTnhVTZkTIaB38XrwwWsMMDij0Y6IWF-RCuNn7CODZI~SX3-uVyjdx~jknE6Ma-ca16xcJ57C5pHbrV5BKz4jWkxMP2u32VUrSnVVDGpG2a2Rw7EC-pFbOX~nu8zQ4lvODW7lo2EkDyE-umnHIRAH2Dumv5XeIFkrxQphl7sKFcooNGrl7jN6DhYpnVWwLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Image Coffe"/>
                    <img className="cart-logo" src={Logo} alt="logo dumbways"/>
                </Col>
                <Col sm={7} className="cart-product-wrapper">
                    <Row>
                        <Col><p className="cart-product-name">Ice Coffe Sugar</p></Col>
                    </Row>
                    <Row>
                        <Col><p className="cart-toping-name">Toping : Bill Berry Boba, Bubble Tea Gelatin</p></Col>
                    </Row>
                </Col>
                <Col sm={3} className="cart-price-wrapper">
                    <Row>
                        <Col><p>Rp. 33.000</p></Col>
                    </Row>
                    <Row>
                        <Col><img className="remove-bin" src={Bin} alt="Hapus"/></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        // <div>
        //     <div>
        //         <img src="https://s3-alpha-sig.figma.com/img/4348/8c71/4273019eb029d3a34583371f7000ecba?Expires=1607299200&Signature=MHgd2V8TP9FK0In3Ik199anJJq37eTgSr5W7BrsZ2FB1e5cQuvzH0x85TproA8FPfQI-Jf7~5J1Q-UJCPnuppzSy5WTnkHn4ghB8Cwh-lzvkmlL1YANOxTs33Mqq5CzCAHgBtNEdrNzLdOxfc4QdyzLXTnhVTZkTIaB38XrwwWsMMDij0Y6IWF-RCuNn7CODZI~SX3-uVyjdx~jknE6Ma-ca16xcJ57C5pHbrV5BKz4jWkxMP2u32VUrSnVVDGpG2a2Rw7EC-pFbOX~nu8zQ4lvODW7lo2EkDyE-umnHIRAH2Dumv5XeIFkrxQphl7sKFcooNGrl7jN6DhYpnVWwLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Image Coffe"/>
        //         <img src={Logo} alt="logo dumbways"/>
        //     </div>
        //     <div>
        //         <p>Ice Coffe Sugar</p>
        //         <p>Toping : Bill Berry Boba, Bubble Tea Gelatin</p>
        //     </div>
        //     <div>
        //         <p>Rp. 33.000</p>
        //         <img />
        //     </div>
        // </div>
    )
}

export default ProductCart
