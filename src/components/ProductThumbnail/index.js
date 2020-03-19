import React from 'react'

import './style.css'

const ProductThumbnail = (props) => 
    <div className="product-thumbnail">
        <div className="product-thumbnail__image"><img alt="" src={props.item.image_url} /></div>
        <div className="product-thumbnail__brand">{props.item.brand}</div>
        <div className="product-thumbnail__name">{props.item.name}</div>
        <div className="product-thumbnail__price">&pound;{props.item.price_gbp}</div>
    </div>

export default ProductThumbnail