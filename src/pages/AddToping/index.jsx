import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import './AddToping.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderAdmin from '../../components/molecules/HeaderAdmin'
import InputTextProduct from '../../components/atoms/InputTextProduct'
import InputNumberProduct from '../../components/atoms/InputNumberProduct'
import InputFile from '../../components/atoms/InputFile'
import Button from '../../components/atoms/Button'
import Clip from '../../assets/logos/clip.png'
import Logo from '../../assets/logos/logoProduct.png'

const AddToping = () => {
    const [image, setImage] = useState('https://www.brdtex.com/wp-content/uploads/2019/09/no-image.png')
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [productStatus, setProductStatus] = useState(false)

    const router = useHistory()

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'satriayud')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/satria-img/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
    }

    const submitProduct = e => {
        e.preventDefault()
        let timestamp = new Date().getTime()
        let idToping = 'TOP' + timestamp
        axios({
            method: 'post',
            url: 'http://localhost:3000/topings',
            data: {
                id: idToping,
                name: product,
                price: price,
                img: image
            }
        })
        .then (
            setProduct(null),
            setPrice(null),
            setProductStatus(true)
        )
    }

    const hideProductStatus = () => {
        setProductStatus(false)
        router.push('/admin')
    }

    return (
        <Container fluid>
            <HeaderAdmin/>
            <Row className="form-toping-wrapper">
                <Col>
                    <Row className="form-header-toping" >Toping</Row>
                    <Row>
                    <input onChange={e => setProduct(e.target.value)} className="form-input-product" type="text" placeholder="Toping Name" />
                        <input onChange={e => setPrice(e.target.value)} className="form-number-product" type="number" placeholder="Price" />
                        <label className="file">
                            <input onChange={uploadImage} className="file-input" type="file" placeholder="Photo Product"/>
                            <img src={Clip} alt="upload image" />
                        </label>
                        <Button onClick={(e) => submitProduct(e)} className="btn-add-toping" title="Add Product"/>
                    </Row>
                </Col>
                <Col className="img-toping-wrapper">
                    {
                        loading ? (<h3 className="uploading">Uploading...</h3>) : (
                            <img className="img-add-toping" src={image} alt="image toping"/>
                        )
                    }    
                </Col>
            </Row>
            <Modal
                size="lg"
                show={productStatus}
                onHide={() => hideProductStatus()}
                centered>
                <Modal.Body className="text-center"><p className="order-status">Product berhasil ditambahkan</p></Modal.Body>
            </Modal>
        </Container>
    )
}

export default AddToping
