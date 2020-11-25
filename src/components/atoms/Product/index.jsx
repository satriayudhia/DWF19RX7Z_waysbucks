import React from 'react'
import './Product.scss'
import {LogoProduct} from '../../../assets'

const Product = (props) => {
    return (
        <div className="product-wrapper">
            <img className="img-product" src={props.img} alt="product waysbucks" />
            <img className="logo-product" src={LogoProduct} alt="Logo Waysbucks" />
            <p className="product-name">{props.name}</p>
            <p className="product-price">{props.price}</p>
        </div>
    )
}

export default Product
