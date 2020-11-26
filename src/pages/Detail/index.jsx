import React from 'react'
import './Detail.scss'
import HeaderLogin from '../../components/molecules/HeaderLogin'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LogoProduct from '../../assets/logos/logoProduct.png'
import Toping from '../../components/atoms/Toping'
import Button from '../../components/atoms/Button'
import Topings from '../../API/Topings'

const Detail = () => {
    return (
        <Container fluid>
            <HeaderLogin/>
            <Row>
                <Col sm={5} className="image-product-wrapper">
                    <img className="img-product-detail" src="https://s3-alpha-sig.figma.com/img/4348/8c71/4273019eb029d3a34583371f7000ecba?Expires=1607299200&Signature=MHgd2V8TP9FK0In3Ik199anJJq37eTgSr5W7BrsZ2FB1e5cQuvzH0x85TproA8FPfQI-Jf7~5J1Q-UJCPnuppzSy5WTnkHn4ghB8Cwh-lzvkmlL1YANOxTs33Mqq5CzCAHgBtNEdrNzLdOxfc4QdyzLXTnhVTZkTIaB38XrwwWsMMDij0Y6IWF-RCuNn7CODZI~SX3-uVyjdx~jknE6Ma-ca16xcJ57C5pHbrV5BKz4jWkxMP2u32VUrSnVVDGpG2a2Rw7EC-pFbOX~nu8zQ4lvODW7lo2EkDyE-umnHIRAH2Dumv5XeIFkrxQphl7sKFcooNGrl7jN6DhYpnVWwLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Ice Coffe Palm Sugar" />
                    <img className="logo-product-detail" src={LogoProduct} alt="logo waysbucks" />
                </Col>
                <Col sm={7} className="detail-product-wrapper">
                    <Row className="product-title-detail">
                        <p>Ice Coffe Palm Sugar</p>
                    </Row>
                    <Row className="product-price-detail">
                        <p>Rp. 27.000</p>
                    </Row>
                    <Row className="product-toping-detail">
                        <p>Toping</p>
                    </Row>
                    <Row className="product-toping-list">
                        {
                            Topings.map((toping) => (
                                <Toping key={toping.id} name={toping.name} price={toping.price} img={toping.img} />
                            ))
                        }
                    </Row>
                    <Row className="total-product">
                        <Col><p>Total</p></Col>
                        <Col><p>Rp. 27.000</p></Col>
                    </Row>
                    <Row>
                        <Button className="btn-add-cart" title="Add Cart" />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Detail
