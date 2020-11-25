import React from 'react'
import {ReactComponent as Jumbotron} from '../../../assets/images/Jumbotron.svg'
import './Content.scss'
import Product from '../../atoms/Product'
import Products from '../../../API/Products'

const Content = () => {
    return (
        <div>
            <div className="jumbotron">
                <Jumbotron />
            </div>  
            <p className="let-order">Let's Order</p>
            <div className="product-list">
                {
                    Products.map((product) => (
                        <Product key={product.id} name={product.name} price={product.price} img={product.img} />
                    ))
                }
            </div>
        </div>
    )
}

export default Content
