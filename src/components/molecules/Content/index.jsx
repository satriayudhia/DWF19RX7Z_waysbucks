import React from 'react'
import {ReactComponent as Jumbotron} from '../../../assets/images/Jumbotron.svg'
import './Content.scss'
import Product from '../../atoms/Product'

const Content = () => {
    return (
        <div>
            <div className="jumbotron">
                <Jumbotron />
            </div>  
            <p className="let-order">Let's Order</p>
            <div className="product-wrapper">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default Content
