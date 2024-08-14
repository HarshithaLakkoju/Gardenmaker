import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay'
export const Home = () => {
  
    const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <PlantDisplay category={category}  />
    </div>
  )
}

export default Home