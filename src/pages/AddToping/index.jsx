import React from 'react'
import './AddToping.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderAdmin from '../../components/molecules/HeaderAdmin'
import InputTextProduct from '../../components/atoms/InputTextProduct'
import InputNumberProduct from '../../components/atoms/InputNumberProduct'
import InputFile from '../../components/atoms/InputFile'
import Button from '../../components/atoms/Button'
import Logo from '../../assets/logos/logoProduct.png'

const AddToping = () => {
    return (
        <Container fluid>
            <HeaderAdmin/>
            <Row className="form-toping-wrapper">
                <Col>
                    <Row className="form-header-toping" >Product</Row>
                    <Row>
                        <InputTextProduct value="Name Toping"/>
                        <InputNumberProduct value="Price"/>
                        <InputFile/>
                        <Button className="btn-add-toping" title="Add Product"/>
                    </Row>
                </Col>
                <Col className="img-toping-wrapper">
                    <img className="img-add-toping" src="https://s3-alpha-sig.figma.com/img/3dbd/dff1/9f672a3713f55e8efe97e637120fd656?Expires=1607299200&Signature=OzXKK1GOYE5A7oOpi5Ox1T-0VYOmt3uAb0y747Ort~bHTzDwki8R~~ZuyE91znXT0MzS4WVa77pGIHmnT4K4U4Zo1PSj7BRa9GU-S4akbU5wIpb-uBnz~wtnV15-RmQQf9umsVPgSyJdZL4UY7gTn7nxyfA2l4jDkPf9mQou81gUOyoj7XjX5gi0cGTzdQoQ67iDDZvEtJ2nZH6A3HnKjqH66RGHA5bDXo-kQXRG4bOqiJYvqKcfJ-4EEqw7HtQz2~O3u9yBqjayv-wr3~HXndjdvnNQ3kMpQ7WBHnXKE7T6pnjFx3j7PuQ3RXHHLPNsQKguRyUnfxXoPMmFYGFcfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="image coffe"/>
                </Col>
            </Row>
        </Container>
    )
}

export default AddToping
