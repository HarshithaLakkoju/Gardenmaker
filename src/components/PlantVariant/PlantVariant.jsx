import React,{ useContext} from 'react'
import './PlantVariant.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'
const PlantVariant = ({id,name,price,description,image}) => {

  
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='plant-variant '>
        <div className='plant-variant-img-container'>
          <img className='plant-variant-image' src={image} alt=''/>
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.plus} alt=""/>
                :<div className='plant-variant-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.removeicon} alt="" />
                  <p>{cartItems[id]}</p>
                  <img  onClick={()=>addToCart(id)}src={assets.addicon} alt="" />
                </div>
           }
        </div>
        <div className="plant-variant-info">
            <div className="plant-variant-name-rating">
                <p>{name}</p>
                <img src={assets.star} alt="" />
            </div>
            <p className="plant-variant-description">{description}</p>
            <br/>
            <div>
              <p className="plant-variant-price">${price}</p>
             
            </div>
            
        </div>
    </div>
  )
}

export default PlantVariant