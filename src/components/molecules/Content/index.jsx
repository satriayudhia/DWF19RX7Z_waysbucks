import React from 'react'
import Jumbotron from '../../../assets/images/Jumbotron-login.png'
import './Content.scss'
import Product from '../../atoms/Product'
import Products from '../../../API/Products'

const Content = () => {
    return (
        <div>
            <div className="jumbotron">
                <img src={Jumbotron} alt="Jumbotron" />
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
