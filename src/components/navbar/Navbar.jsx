import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  const [menu,setMenu]= useState("shop now");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo"/>
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("shop now")} className={menu==="shop now"?"active":""}>shop now</li>
        <li onClick={()=>setMenu("sell")} className={menu==="sell"?"active":""}>sell</li>
        <li onClick={()=>setMenu("services")} className={menu==="services"?"active":""}>services</li>
        <li onClick={()=>setMenu("contribution")} className={menu==="contribution"?"active":""}>contribution</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li>
        <li onClick={()=>setMenu("about us")} className={menu==="about us"?"active":""}>about us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.searchicon} alt=""/>
        <div className="navbar-search-icon">
          <img src={assets.basketicon} alt=""  />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar