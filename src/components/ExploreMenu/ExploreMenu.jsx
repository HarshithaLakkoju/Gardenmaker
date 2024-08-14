 import React from 'react'
 import './ExploreMenu.css'
 import { item_list } from '../../assets/assets'
 const ExploreMenu = ({category,setCategory}) => {
   return (
     <div>
        <div className='explore-items' id='explore-items'>
            <h1>Explore our plants</h1>
            <p className='explore-items-text'>"  Savor the freshness of homegrown vegetables and fruits, brighten up your space with stunning flowers, or add a touch of elegance with our decorative plants, we've got you covered. Browse our collection now and start gardening today!"</p>
            <div className='explore-items-list'>
                {item_list.map((item,index)=>{
                        return(
                            <div onClick={()=>setCategory(prev=>prev===item.item_name?"All":item.item_name)} key={index} className='explore-items-list-item'>
                                <img  className={category===item.item_name?"active":""}src={item.item_image} alt="" />
                                <p>{item.item_name}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
        <hr/>
     </div>
   )
 }
 
 export default ExploreMenu