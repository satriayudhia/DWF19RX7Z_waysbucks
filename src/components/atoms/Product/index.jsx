import React from 'react'
import {useHistory} from 'react-router-dom'
import './Product.scss'
import {LogoProduct} from '../../../assets'

const Product = (props) => {
    const router = useHistory();

    const toDetail = () => {
      router.push("/detail")
    }
    return (
        <div className="product-wrapper" onClick={toDetail}>
            <img className="img-product" src={props.img} alt="product waysbucks" />
            <img className="logo-product" src={LogoProduct} alt="Logo Waysbucks" />
            <p className="product-name">{props.name}</p>
            <p className="product-price">{props.price}</p>
        </div>
    )
}

export default Product
