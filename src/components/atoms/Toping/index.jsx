import React from 'react'
import './Toping.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Toping = (props) => {
    return (
        <div className="toping-wrapper">
            <div className="img-toping-wrapper">
                <img className="img-toping" src={props.img} alt="toping" />
            </div>
            <div className="title-toping-wrapper">
                <p className="title-toping">{props.name}</p>
            </div>
        </div>
    )
}

export default Toping
