import React from 'react'
import './AddProduct.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderLogin from '../../components/molecules/HeaderLogin'
import InputTextProduct from '../../components/atoms/InputTextProduct'
import InputNumberProduct from '../../components/atoms/InputNumberProduct'
import InputFile from '../../components/atoms/InputFile'
import Button from '../../components/atoms/Button'
import Logo from '../../assets/logos/logoProduct.png'

const AddProduct = () => {
    return (
        <Container fluid>
            <HeaderLogin/>
            <Row className="form-product-wrapper">
                <Col>
                    <Row className="form-header-product" >Product</Row>
                    <Row>
                        <InputTextProduct value="Name Product"/>
                        <InputNumberProduct value="Price"/>
                        <InputFile/>
                        <Button className="btn-add-product" title="Add Product"/>
                    </Row>
                </Col>
                <Col className="img-product-wrapper">
                    <img className="img-add-product" src="https://s3-alpha-sig.figma.com/img/4348/8c71/4273019eb029d3a34583371f7000ecba?Expires=1607299200&Signature=MHgd2V8TP9FK0In3Ik199anJJq37eTgSr5W7BrsZ2FB1e5cQuvzH0x85TproA8FPfQI-Jf7~5J1Q-UJCPnuppzSy5WTnkHn4ghB8Cwh-lzvkmlL1YANOxTs33Mqq5CzCAHgBtNEdrNzLdOxfc4QdyzLXTnhVTZkTIaB38XrwwWsMMDij0Y6IWF-RCuNn7CODZI~SX3-uVyjdx~jknE6Ma-ca16xcJ57C5pHbrV5BKz4jWkxMP2u32VUrSnVVDGpG2a2Rw7EC-pFbOX~nu8zQ4lvODW7lo2EkDyE-umnHIRAH2Dumv5XeIFkrxQphl7sKFcooNGrl7jN6DhYpnVWwLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="image coffe"/>
                    <img className="logo-add-product" src={Logo} alt="logo waysbucks" />
                </Col>
            </Row>
        </Container>
    )
}

export default AddProduct
