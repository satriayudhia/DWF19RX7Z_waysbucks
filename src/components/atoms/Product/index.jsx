import React from 'react'
import './Product.scss'
import {LogoProduct} from '../../../assets'

const Product = () => {
    return (
        <div className="product-wrapper">
            <img className="img-product" src="https://s3-alpha-sig.figma.com/img/82f2/db53/fac76fcc5fc42321f68aa860e9145f4f?Expires=1607299200&Signature=cviytiuLkgWgVRMH-VSLs8PHyeIb~tn0EXkd8CG4rCL2eb~TwzsgjFet8h6jp3C1HQ5OY2Dz3ewbo75IuWo5plZ3zWfrerS~1ilVVxXmCLm49gPQrCEDJF8txk2Ml6BZmdRsaooeEI4KtnZpGQklfTgjDFYA5fYMxz3oSYgz7JJ7nKP9WSk9YBd1TjfZx2ahzbfwICHyqC6GSLDP9UpG5Gve9mybn~G3D~~BuddpSHRhvhvd~bWXP1kewDM1zO-Q9LQTqzjgDew7AgkhCzLvXopl2QMg1RfDtzrhmL33ov2tC574oVARbeMOhjSsOKrqemB-yIdVc5A8lDbqEPjGKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="product 1" />
            <img className="logo-product" src={LogoProduct} alt="Logo Waysbucks" />
            <p className="product-name">Ice Coffe Palm Sugar</p>
            <p className="product-price">Rp. 27.000</p>
        </div>
    )
}

export default Product
