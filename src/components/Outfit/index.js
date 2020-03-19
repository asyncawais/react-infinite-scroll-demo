import React from 'react'
import ProductThumbnail from '../ProductThumbnail'
import './style.css'

const Outfit = (props) => 
    <div className="outfit">
        <div className="outfit__items">
            { props.outfit.items.map((item, index) => <ProductThumbnail key={index} item={item} />) }
        </div>
        <div className="outfit__details">
            <div className="outfit__details-occasion">{ props.outfit.occasion.replace(/_/g, ' ') }</div>
            <div className="outfit__details-description">"{ props.outfit.description }"</div>
            <img className="outfit__details-image" alt="" src={ props.outfit.inspired_by_photo_url } />
        </div>
    </div>

export default Outfit